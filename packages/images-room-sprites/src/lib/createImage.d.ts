import * as Jimp from 'jimp';
declare const createImage: (depth: [number, number], height: number, masterImagePixelToBaseUnit?: number) => Promise<Jimp>;
export default createImage;
