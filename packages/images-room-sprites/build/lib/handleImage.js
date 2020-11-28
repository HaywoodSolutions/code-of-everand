"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Jimp = require("jimp");
const backupImage_1 = require("./backupImage");
const createImage_1 = require("./createImage");
const isImageExists_1 = require("./isImageExists");
const handleImage = async (id, depth, height, masterImagePixelToBaseUnit = 100) => {
    if (!isImageExists_1.default(id)) {
        console.log(`Image ${id} doesnt exist so creating it`);
        const tempImage = await createImage_1.default(depth, height, masterImagePixelToBaseUnit);
        tempImage.writeAsync(`./images/${id}.png`);
    }
    else {
        const tempImage = await createImage_1.default(depth, height, masterImagePixelToBaseUnit);
        let localFile = await Jimp.read(`./images/${id}.png`);
        if (tempImage.getWidth() != localFile.getWidth() || localFile.getHeight() != localFile.getHeight()) {
            await backupImage_1.default(id);
        }
        else if (Jimp.diff(localFile, tempImage, 0)) {
            return;
        }
        tempImage.writeAsync(`./images/${id}.png`);
    }
};
exports.default = handleImage;
//# sourceMappingURL=handleImage.js.map