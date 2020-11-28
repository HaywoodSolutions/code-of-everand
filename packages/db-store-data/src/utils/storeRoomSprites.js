import { __awaiter, __generator, __spreadArrays } from "tslib";
import { DB } from "@code-of-everand/firebase";
import RoomSprites from "@code-of-everand/data-room-sprites";
var storeRoomSprites = function () { return __awaiter(void 0, void 0, void 0, function () {
    var dbRoomSpritesIds, localRoomSpritesIds, deleteIds;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, DB.roomSprites.getIds()];
            case 1:
                dbRoomSpritesIds = _a.sent();
                localRoomSpritesIds = Object.keys(RoomSprites);
                deleteIds = dbRoomSpritesIds.filter(function (id) { return !localRoomSpritesIds.includes(id); });
                return [4 /*yield*/, Promise.all(__spreadArrays(deleteIds.map(function (id) {
                        return DB.roomSprites.document(id).delete();
                    }), Object.entries(RoomSprites).map(function (_a) {
                        var id = _a[0], data = _a[1];
                        return DB.roomSprites.document(id).set(data);
                    }))).then(function () { return console.log("Stored Room Sprites - SUCCESS"); }).catch(function () { return console.log("Storing Room Sprites - FAIL"); })];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export default storeRoomSprites;
//# sourceMappingURL=storeRoomSprites.js.map