'use-strict';

const Jimp = require('jimp');

const IMAGE_FILE_NAME = 'bob.png';

const colorToRGBA = color => Jimp.intToRGBA(color);

Jimp.read(IMAGE_FILE_NAME)
  .then(image => {
    const output = new Jimp(image.bitmap.width, image.bitmap.height, 0x000000ff);
    for (let y = 0; y < image.bitmap.height; y++) {
      for (let x = 0; x < image.bitmap.width; x++) {
        const color = image.getPixelColor(x, y);
        const rgba = colorToRGBA(color);
        // console.log(`The colors of pixel (${x}, ${y}) son:`, rgba);
        output.setPixelColor(color, x, y);
      }
    }
    output.write('clone__bob.png');
  })
  .catch(err => {
    console.log(`The image file could not be loaded properly due to the following error:\n${err}`);
  })