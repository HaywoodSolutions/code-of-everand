import * as Jimp from 'jimp';

export default async (id: string, widths: number[], masterImagePixelToBaseUnit: number = 100): Promise<any> => {
  return Promise.all(widths.map(async(width) => {
    const scale: number = width / masterImagePixelToBaseUnit;
    let baseImg = await Jimp.read(`./images/${id}.png`);
    baseImg.resize(baseImg.getWidth() * scale, baseImg.getHeight() * scale);
    return await baseImg.writeAsync(`./scaledImages/${id}.${width}.png`);
  }));
};