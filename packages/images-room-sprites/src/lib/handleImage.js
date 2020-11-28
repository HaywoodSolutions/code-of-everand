import { __awaiter, __generator } from "tslib";
import * as Jimp from "jimp";
import backupImage from "./backupImage";
import createImage from "./createImage";
import isImageExists from "./isImageExists";
var handleImage = function (id, depth, height, masterImagePixelToBaseUnit) {
    if (masterImagePixelToBaseUnit === void 0) { masterImagePixelToBaseUnit = 100; }
    return __awaiter(void 0, void 0, void 0, function () {
        var tempImage, tempImage, localFile;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!isImageExists(id)) return [3 /*break*/, 2];
                    console.log("Image " + id + " doesnt exist so creating it");
                    return [4 /*yield*/, createImage(depth, height, masterImagePixelToBaseUnit)];
                case 1:
                    tempImage = _a.sent();
                    tempImage.writeAsync("./images/" + id + ".png");
                    return [3 /*break*/, 8];
                case 2: return [4 /*yield*/, createImage(depth, height, masterImagePixelToBaseUnit)];
                case 3:
                    tempImage = _a.sent();
                    return [4 /*yield*/, Jimp.read("./images/" + id + ".png")];
                case 4:
                    localFile = _a.sent();
                    if (!(tempImage.getWidth() != localFile.getWidth() || localFile.getHeight() != localFile.getHeight())) return [3 /*break*/, 6];
                    return [4 /*yield*/, backupImage(id)];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    if (Jimp.diff(localFile, tempImage, 0)) {
                        return [2 /*return*/];
                    }
                    _a.label = 7;
                case 7:
                    tempImage.writeAsync("./images/" + id + ".png");
                    _a.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    });
};
export default handleImage;
//# sourceMappingURL=handleImage.js.map