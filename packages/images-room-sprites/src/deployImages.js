import { __awaiter, __generator } from "tslib";
import RoomSprites from '@code-of-everand/data-room-sprites';
import handleScaledImage from './lib/handleScaledImage';
import * as admin from 'firebase-admin';
import * as firebaseAccountCredentials from "./serviceAccountKey.json";
var serviceAccount = firebaseAccountCredentials;
var cred = admin.credential.cert(serviceAccount);
admin.initializeApp({
    credential: cred,
    storageBucket: "code-of-everand-game.appspot.com"
});
var widths = [100, 75, 50, 25];
var bucket = admin.storage().bucket();
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.all(Object.entries(RoomSprites).map(function (_a) {
                    var id = _a[0], roomSprite = _a[1];
                    return handleScaledImage(id, widths);
                }))];
            case 1:
                _a.sent();
                return [4 /*yield*/, Promise.all(Object.entries(RoomSprites).map(function (_a) {
                        var id = _a[0], roomSprite = _a[1];
                        return Promise.all(widths.map(function (width) {
                            return bucket.upload("./scaledImages/" + id + "." + width + ".png", {
                                destination: "images/roomSprites/" + id + "/" + width + ".png",
                                contentType: 'media'
                            });
                        })).then(function () {
                            console.log("Uploaded image " + id);
                        });
                    }))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=deployImages.js.map