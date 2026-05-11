import sharp from "sharp";
import { copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const SRC = resolve("src/assets/aboutus.png");
const BACKUP = resolve("src/assets/aboutus.original.png");

const HARD_TOL = 28;
const SOFT_TOL = 70;

const main = async () => {
  if (!existsSync(BACKUP)) {
    await copyFile(SRC, BACKUP);
    console.log(`backup -> ${BACKUP}`);
  }

  const src = sharp(BACKUP).ensureAlpha();
  const { data, info } = await src.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.from(data);

  const idx = (x, y) => (y * width + x) * channels;
  const isOpaque = (x, y) => out[idx(x, y) + 3] > 0;

  const samples = [];
  const samplePoints = [
    [Math.floor(width * 0.05), Math.floor(height * 0.05)],
    [Math.floor(width * 0.5), Math.floor(height * 0.03)],
    [Math.floor(width * 0.95), Math.floor(height * 0.05)],
    [Math.floor(width * 0.03), Math.floor(height * 0.5)],
    [Math.floor(width * 0.97), Math.floor(height * 0.5)],
    [Math.floor(width * 0.05), Math.floor(height * 0.95)],
    [Math.floor(width * 0.95), Math.floor(height * 0.95)],
  ];
  for (const [x, y] of samplePoints) {
    if (isOpaque(x, y)) {
      const i = idx(x, y);
      samples.push([out[i], out[i + 1], out[i + 2]]);
    }
  }
  if (samples.length === 0) {
    console.error("no opaque samples found — image may already be transparent");
    process.exit(1);
  }
  const bg = samples.reduce(
    (acc, c) => [
      acc[0] + c[0] / samples.length,
      acc[1] + c[1] / samples.length,
      acc[2] + c[2] / samples.length,
    ],
    [0, 0, 0]
  );
  console.log(
    `samples=${samples.length}  bg ~ rgb(${bg.map((v) => Math.round(v)).join(", ")})`
  );

  const distToBg = (x, y) => {
    const i = idx(x, y);
    const dr = out[i] - bg[0];
    const dg = out[i + 1] - bg[1];
    const db = out[i + 2] - bg[2];
    return Math.sqrt(dr * dr + dg * dg + db * db);
  };

  const visited = new Uint8Array(width * height);
  const stack = [];

  const seed = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const k = y * width + x;
    if (visited[k]) return;
    if (!isOpaque(x, y)) {
      visited[k] = 1;
      return;
    }
    if (distToBg(x, y) > SOFT_TOL) return;
    stack.push(k);
  };

  for (let x = 0; x < width; x++) {
    seed(x, 0);
    seed(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    seed(0, y);
    seed(width - 1, y);
  }

  let killed = 0;
  while (stack.length) {
    const k = stack.pop();
    if (visited[k]) continue;
    visited[k] = 1;

    const x = k % width;
    const y = (k - x) / width;
    if (!isOpaque(x, y)) continue;

    const d = distToBg(x, y);
    if (d > SOFT_TOL) continue;

    const i = k * channels;
    if (d <= HARD_TOL) {
      out[i + 3] = 0;
    } else {
      const t = (d - HARD_TOL) / (SOFT_TOL - HARD_TOL);
      out[i + 3] = Math.round(out[i + 3] * t);
    }
    killed++;

    if (x > 0) stack.push(k - 1);
    if (x < width - 1) stack.push(k + 1);
    if (y > 0) stack.push(k - width);
    if (y < height - 1) stack.push(k + width);
  }

  console.log(`pixels modified: ${killed}`);

  await sharp(out, { raw: { width, height, channels } })
    .png({ compressionLevel: 9 })
    .toFile(SRC);

  console.log(`wrote -> ${SRC}`);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
