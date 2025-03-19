const svg2img = require('svg2img');
const fs = require('fs');
const path = require('path');

// Read the SVG file
const svgContent = fs.readFileSync('favicon.svg', 'utf8');

// Convert to 32x32 PNG
svg2img(svgContent, { width: 32, height: 32 }, function(error, buffer) {
    if (error) {
        console.error(error);
        return;
    }
    fs.writeFileSync('favicon-32x32.png', buffer);
});

// Convert to 16x16 PNG
svg2img(svgContent, { width: 16, height: 16 }, function(error, buffer) {
    if (error) {
        console.error(error);
        return;
    }
    fs.writeFileSync('favicon-16x16.png', buffer);
    fs.writeFileSync('favicon.ico', buffer); // Use 16x16 as ICO
});
