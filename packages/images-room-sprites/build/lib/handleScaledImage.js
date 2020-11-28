"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Jimp = require("jimp");
exports.default = async (id, widths, masterImagePixelToBaseUnit = 100) => {
    return Promise.all(widths.map(async (width) => {
        const scale = width / masterImagePixelToBaseUnit;
        let baseImg = await Jimp.read(`./images/${id}.png`);
        baseImg.resize(baseImg.getWidth() * scale, baseImg.getHeight() * scale);
        return await baseImg.writeAsync(`./scaledImages/${id}.${width}.png`);
    }));
};
//# sourceMappingURL=handleScaledImage.js.map