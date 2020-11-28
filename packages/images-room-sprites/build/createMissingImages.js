"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_room_sprites_1 = require("@code-of-everand/data-room-sprites");
const handleImage_1 = require("./lib/handleImage");
(async () => {
    await Promise.all(Object.entries(data_room_sprites_1.default).map(([id, roomSprite]) => {
        return handleImage_1.default(id, roomSprite.depth, roomSprite.height);
    }));
})();
//# sourceMappingURL=createMissingImages.js.map