import { __awaiter, __generator, __spreadArrays } from "tslib";
import RoomData from "@code-of-everand/data-rooms";
import { DB } from "@code-of-everand/firebase";
var storeRooms = function () { return __awaiter(void 0, void 0, void 0, function () {
    var dbRoomIds, localRoomIds, deleteIds;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, DB.rooms.getIds()];
            case 1:
                dbRoomIds = _a.sent();
                localRoomIds = Object.keys(RoomData);
                deleteIds = dbRoomIds.filter(function (id) { return !localRoomIds.includes(id); });
                return [4 /*yield*/, Promise.all(__spreadArrays(deleteIds.map(function (id) {
                        return DB.rooms.document(id).delete();
                    }), Object.entries(RoomData).map(function (_a) {
                        var roomId = _a[0], roomData = _a[1];
                        return DB.rooms.document(roomId).set(roomData);
                    }))).then(function () { return console.log("Stored Room Data - SUCCESS"); }).catch(function () { return console.log("Storing Room Data - FAIL"); })];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export default storeRooms;
//# sourceMappingURL=storeRooms.js.map