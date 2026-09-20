const fs = require('fs');
const path = require('path');

function updateHtmlLang(dir, targetLang) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      updateHtmlLang(fullPath, targetLang);
    } else if (file.endsWith('.html') || file.endsWith('.rsc')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      if (content.includes('<html lang="en"')) {
        content = content.replace(/<html lang="en"/g, `<html lang="${targetLang}"`);
        modified = true;
      }

      if (content.includes('"lang":"en"')) {
        content = content.replace(/"lang":"en"/g, `"lang":"${targetLang}"`);
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`[postbuild] Updated ${file} -> lang="${targetLang}"`);
      }
    }
  }
}

const serverAppDir = path.join(process.cwd(), '.next', 'server', 'app');
const esDir = path.join(serverAppDir, 'es');
const ptDir = path.join(serverAppDir, 'pt');

console.log('[postbuild] Scanning localized static HTML/RSC routes...');
updateHtmlLang(esDir, 'es');
updateHtmlLang(ptDir, 'pt');
console.log('[postbuild] Localization lang sync complete.');
