import { __awaiter, __generator } from "tslib";
import * as Jimp from 'jimp';
export default (function (id, widths, masterImagePixelToBaseUnit) {
    if (masterImagePixelToBaseUnit === void 0) { masterImagePixelToBaseUnit = 100; }
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, Promise.all(widths.map(function (width) { return __awaiter(void 0, void 0, void 0, function () {
                    var scale, baseImg;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                scale = width / masterImagePixelToBaseUnit;
                                return [4 /*yield*/, Jimp.read("./images/" + id + ".png")];
                            case 1:
                                baseImg = _a.sent();
                                baseImg.resize(baseImg.getWidth() * scale, baseImg.getHeight() * scale);
                                return [4 /*yield*/, baseImg.writeAsync("./scaledImages/" + id + "." + width + ".png")];
                            case 2: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); }))];
        });
    });
});
//# sourceMappingURL=handleScaledImage.js.map