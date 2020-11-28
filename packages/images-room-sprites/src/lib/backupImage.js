import { __awaiter, __generator } from "tslib";
import * as fs from 'fs-extra';
export default (function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs.copySync("./images/" + id + ".png", "./oldImages/" + id + ".png")];
            case 1:
                _a.sent();
                return [4 /*yield*/, fs.removeSync("./images/" + id + ".png")];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=backupImage.js.map