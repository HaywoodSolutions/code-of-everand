import * as Jimp from 'jimp';

const baseHeight: number = 1;
const baseWidth: number = 2.00569;

const createImage = (depth: [number, number], height: number, masterImagePixelToBaseUnit: number = 100): Promise<Jimp> => {
  return new Promise(async (resolve, reject) => {
      
    const dimentions = {
      leftDepth: depth[0],
      rightDepth: depth[1],
      height: height,
    };

    let baseImg = await Jimp.read('./baseImages/baseTriangle.png');
    const baseSize: {
      width: number,
      height: number
    } = {
      width: baseWidth * masterImagePixelToBaseUnit,
      height: baseHeight * masterImagePixelToBaseUnit
    };
    baseImg = await baseImg.resize(baseSize.width, baseSize.height);

    const imageUnitsWidthL = baseSize.width * dimentions.leftDepth;
    const imageUnitsWidthR = baseSize.width * dimentions.rightDepth;
    const imageUnitsHight = baseSize.height * dimentions.height;

    const imageSize: {
      width: number,
      height: number
    } = {
      width: (imageUnitsWidthL + imageUnitsWidthR - 2) / 2,
      height: imageUnitsHight
    };

    new Jimp(imageSize.width, imageSize.height, 0x1, async function (err, image) {
      for (let y=0; y<dimentions.height; y += 0.5) {
        if (y % 1 == 0) {
          image.composite(baseImg, baseSize.width / 2 * (dimentions.leftDepth - 1), baseSize.height * (dimentions.height - 1) - y * baseSize.height);
          
          for (let x=0; x<Math.max(dimentions.leftDepth, dimentions.rightDepth); x+=2) {
            image.composite(baseImg, baseSize.width / 2 * (dimentions.leftDepth - 1) - x * baseSize.width / 2, baseSize.height * (dimentions.height - 1) - y * baseSize.height);
            image.composite(baseImg, baseSize.width / 2 * (dimentions.leftDepth - 1) + x * baseSize.width / 2, baseSize.height * (dimentions.height - 1) - y * baseSize.height);
          }
        } else if (y < dimentions.height - 1) {
          for (let x=1; x<Math.max(dimentions.leftDepth, dimentions.rightDepth); x+=2) {
            image.composite(baseImg, baseSize.width / 2 * (dimentions.leftDepth - 1) - x * baseSize.width / 2, baseSize.height * (dimentions.height - 1) - y * baseSize.height);
            image.composite(baseImg, baseSize.width / 2 * (dimentions.leftDepth - 1) + x * baseSize.width / 2, baseSize.height * (dimentions.height - 1) - y * baseSize.height);
          }
        }
      }
      return resolve(image);
    });
  })
}

export default createImage;