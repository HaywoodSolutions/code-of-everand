import { __awaiter, __generator } from "tslib";
import storeRooms from "./utils/storeRooms";
import storeRoomSprites from "./utils/storeRoomSprites";
(function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, storeRooms()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, storeRoomSprites()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
})();
//# sourceMappingURL=index.js.map