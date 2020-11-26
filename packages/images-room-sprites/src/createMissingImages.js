import { __awaiter, __generator } from "tslib";
import RoomSprites from '@code-of-everand/data-room-sprites';
import handleImage from './lib/handleImage';
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.all(Object.entries(RoomSprites).map(function (_a) {
                    var id = _a[0], roomSprite = _a[1];
                    return handleImage(id, roomSprite.depth, roomSprite.height);
                }))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=createMissingImages.js.map