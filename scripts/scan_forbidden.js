const fs = require("fs");
const path = require("path");

const targets = ["app", "components", "lib"];
let found = 0;

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) {
      const content = fs.readFileSync(fullPath, "utf8");
      const lines = content.split("\n");
      lines.forEach((line, idx) => {
        if (line.includes("2025")) {
          console.log(`[2025] ${fullPath}:${idx + 1} -> ${line.trim()}`);
          found++;
        }
        if (line.includes("\u2014")) {
          console.log(`[EM-DASH] ${fullPath}:${idx + 1} -> ${line.trim()}`);
          found++;
        }
        if (line.includes("\u2013")) {
          console.log(`[EN-DASH] ${fullPath}:${idx + 1} -> ${line.trim()}`);
          found++;
        }
      });
    }
  }
}

for (const target of targets) {
  scanDir(target);
}

console.log(`Scan complete. Total forbidden tokens found: ${found}`);
