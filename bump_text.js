import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/usuario/Desktop/meraki/Merakipage/src';

function walk(directory) {
  let results = [];
  const list = fs.readdirSync(directory);
  list.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        results.push(filePath);
      }
    }
  });
  return results;
}

const files = walk(dir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace text-[Xpx] with text-[X+2px]
  content = content.replace(/text-\[(\d+)px\]/g, (match, p1) => {
    const size = parseInt(p1, 10);
    // Increase size by 2px, or 3px if larger
    const newSize = size >= 14 ? Math.floor(size * 1.2) : size + 2;
    return `text-[${newSize}px]`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
});
