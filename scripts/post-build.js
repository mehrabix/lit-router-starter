import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Read the original index.html
const indexPath = path.join(projectRoot, 'index.html');
const distPath = path.join(projectRoot, 'dist');

if (!fs.existsSync(indexPath)) {
  console.error('index.html not found in project root');
  process.exit(1);
}

// Read the HTML content
let htmlContent = fs.readFileSync(indexPath, 'utf8');

// Find all JavaScript files in the dist directory
const jsFiles = fs.readdirSync(distPath).filter(file => file.endsWith('.js'));

// Remove all existing script tags
htmlContent = htmlContent.replace(/<script[^>]*><\/script>/g, '');

// Add script tags for all built JavaScript files
const scriptTags = jsFiles.map(file => `    <script src="${file}"></script>`).join('\n');

// Insert the script tags before the closing </body> tag
if (htmlContent.includes('</body>')) {
  htmlContent = htmlContent.replace('</body>', `${scriptTags}\n  </body>`);
} else {
  // If no </body> tag, append to the end
  htmlContent += `\n${scriptTags}\n`;
}

// Write the updated HTML to dist/index.html
const distHtmlPath = path.join(distPath, 'index.html');
fs.writeFileSync(distHtmlPath, htmlContent);

console.log('✅ HTML file copied and updated successfully');
console.log(`📁 Built files in: ${distPath}`);
console.log(`📄 HTML file: ${distHtmlPath}`);
console.log(`📦 JavaScript files: ${jsFiles.join(', ')}`); 