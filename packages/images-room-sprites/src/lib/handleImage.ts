import * as Jimp from "jimp";
import backupImage from "./backupImage";
import createImage from "./createImage"
import isImageExists from "./isImageExists"

const handleImage = async (id: string, depth: [number, number], height: number, masterImagePixelToBaseUnit: number = 100) => {
  if (!isImageExists(id)) {
    console.log(`Image ${id} doesnt exist so creating it`)
    const tempImage = await createImage(depth, height, masterImagePixelToBaseUnit);
    tempImage.writeAsync(`./images/${id}.png`)
  } else {
    const tempImage = await createImage(depth, height, masterImagePixelToBaseUnit);
    let localFile = await Jimp.read(`./images/${id}.png`);

    if (tempImage.getWidth() != localFile.getWidth() || localFile.getHeight() != localFile.getHeight()) {
      await backupImage(id);
    } else if (Jimp.diff(localFile, tempImage, 0)) {
      return;
    }
    tempImage.writeAsync(`./images/${id}.png`)
  }
}

export default handleImage;