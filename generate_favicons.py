from cairosvg import svg2png
from PIL import Image
import os

# Convert SVG to PNG in different sizes
svg2png(url='favicon.svg', write_to='favicon-32x32.png', output_width=32, output_height=32)
svg2png(url='favicon.svg', write_to='favicon-16x16.png', output_width=16, output_height=16)

# Convert 32x32 PNG to ICO
img = Image.open('favicon-32x32.png')
img.save('favicon.ico', format='ICO', sizes=[(32, 32), (16, 16)])
