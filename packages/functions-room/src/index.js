import { __awaiter, __generator } from "tslib";
import { DB } from "@code-of-everand/firebase";
export var getRoom = function (roomId) { return __awaiter(void 0, void 0, void 0, function () {
    var roomSnap, roomData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, DB.rooms.document(roomId).get()];
            case 1:
                roomSnap = _a.sent();
                if (!roomSnap.exists)
                    throw "No room with specified id";
                roomData = roomSnap.data();
                if (roomData != undefined)
                    return [2 /*return*/, roomData];
                else
                    throw "No room with specified id";
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=index.js.map