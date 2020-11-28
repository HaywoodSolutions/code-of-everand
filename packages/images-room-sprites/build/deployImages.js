"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_room_sprites_1 = require("@code-of-everand/data-room-sprites");
const handleScaledImage_1 = require("./lib/handleScaledImage");
const firebase_1 = require("@code-of-everand/firebase");
const widths = [100, 75, 50, 25];
(async () => {
    await Promise.all(Object.entries(data_room_sprites_1.default).map(([id, roomSprite]) => {
        return handleScaledImage_1.default(id, widths);
    }));
    await Promise.all(Object.entries(data_room_sprites_1.default).map(([id, roomSprite]) => {
        return Promise.all(widths.map(width => {
            return firebase_1.bucket.upload(`./scaledImages/${id}.${width}.png`, {
                destination: `images/roomSprites/${id}/${width}.png`,
                contentType: 'media'
            });
        })).then(() => {
            console.log(`Uploaded image ${id}`);
        });
    }));
})();
//# sourceMappingURL=deployImages.js.map