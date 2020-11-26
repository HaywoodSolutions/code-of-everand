import { __awaiter, __generator } from "tslib";
import * as Jimp from 'jimp';
var baseHeight = 1;
var baseWidth = 2.00569;
var createImage = function (depth, height, masterImagePixelToBaseUnit) {
    if (masterImagePixelToBaseUnit === void 0) { masterImagePixelToBaseUnit = 100; }
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var dimentions, baseImg, baseSize, imageUnitsWidthL, imageUnitsWidthR, imageUnitsHight, imageSize;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dimentions = {
                        leftDepth: depth[0],
                        rightDepth: depth[1],
                        height: height,
                    };
                    return [4 /*yield*/, Jimp.read('./baseImages/baseTriangle.png')];
                case 1:
                    baseImg = _a.sent();
                    baseSize = {
                        width: baseWidth * masterImagePixelToBaseUnit,
                        height: baseHeight * masterImagePixelToBaseUnit
                    };
                    return [4 /*yield*/, baseImg.resize(baseSize.width, baseSize.height)];
                case 2:
                    baseImg = _a.sent();
                    imageUnitsWidthL = baseSize.width * dimentions.leftDepth;
                    imageUnitsWidthR = baseSize.width * dimentions.rightDepth;
                    imageUnitsHight = baseSize.height * dimentions.height;
                    imageSize = {
                        width: (imageUnitsWidthL + imageUnitsWidthR - 2) / 2,
                        height: imageUnitsHight
                    };
                    new Jimp(imageSize.width, imageSize.height, 0x1, function (err, image) {
                        return __awaiter(this, void 0, void 0, function () {
                            var y, x, x;
                            return __generator(this, function (_a) {
                                for (y = 0; y < dimentions.height; y += 0.5) {
                                    if (y % 1 == 0) {
                                        image.composite(baseImg, baseSize.width / 2 * (dimentions.leftDepth - 1), baseSize.height * (dimentions.height - 1) - y * baseSize.height);
                                        for (x = 0; x < Math.max(dimentions.leftDepth, dimentions.rightDepth); x += 2) {
                                            image.composite(baseImg, baseSize.width / 2 * (dimentions.leftDepth - 1) - x * baseSize.width / 2, baseSize.height * (dimentions.height - 1) - y * baseSize.height);
                                            image.composite(baseImg, baseSize.width / 2 * (dimentions.leftDepth - 1) + x * baseSize.width / 2, baseSize.height * (dimentions.height - 1) - y * baseSize.height);
                                        }
                                    }
                                    else if (y < dimentions.height - 1) {
                                        for (x = 1; x < Math.max(dimentions.leftDepth, dimentions.rightDepth); x += 2) {
                                            image.composite(baseImg, baseSize.width / 2 * (dimentions.leftDepth - 1) - x * baseSize.width / 2, baseSize.height * (dimentions.height - 1) - y * baseSize.height);
                                            image.composite(baseImg, baseSize.width / 2 * (dimentions.leftDepth - 1) + x * baseSize.width / 2, baseSize.height * (dimentions.height - 1) - y * baseSize.height);
                                        }
                                    }
                                }
                                return [2 /*return*/, resolve(image)];
                            });
                        });
                    });
                    return [2 /*return*/];
            }
        });
    }); });
};
export default createImage;
//# sourceMappingURL=createImage.js.map