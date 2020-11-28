"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RoomSpritesBase = [
    {
        name: "Medium Tree 1",
        depth: [2, 2],
        height: 4,
        walkable: [
            [0]
        ]
    },
    {
        name: "Medium Tree No Leaves",
        depth: [2, 2],
        height: 4,
        walkable: [
            [0]
        ]
    },
    {
        name: "Small Tree 1",
        depth: [2, 2],
        height: 4,
        walkable: [
            [0]
        ]
    },
    {
        name: "Small Tree No Leaves",
        depth: [2, 2],
        height: 4,
        walkable: [
            [0]
        ]
    },
    {
        name: "Barrel",
        depth: [1, 1],
        height: 2,
        walkable: [
            [0]
        ]
    },
    {
        name: "Sign 1",
        depth: [1, 1],
        height: 2,
        walkable: [
            [0]
        ]
    },
    {
        name: "Sign 2",
        depth: [1, 1],
        height: 3,
        walkable: [
            [0]
        ]
    },
    {
        name: "Tall Stone 1",
        depth: [1, 1],
        height: 2,
        walkable: [
            [0]
        ]
    },
    {
        name: "Tall Stone 2",
        depth: [1, 1],
        height: 2,
        walkable: [
            [0]
        ]
    },
    {
        name: "Tall Stone 3",
        depth: [1, 1],
        height: 2,
        walkable: [
            [0]
        ]
    },
    {
        name: "Ballon Platform Empty 1",
        depth: [8, 8],
        height: 8,
        walkable: [
            [1],
            [0, 1],
            [0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 0],
            [0, 0, 0],
            [0, 0],
            [0]
        ]
    },
    {
        name: "Ballon Platform Empty 2",
        depth: [8, 8],
        height: 8,
        walkable: [
            [1],
            [1, 0],
            [1, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0],
            [0, 0],
            [0]
        ]
    }
];
const RoomSprites = RoomSpritesBase.reduce((obj, ms) => {
    const id = "ROOMSPRITE_" + ms.name.toUpperCase().replace(/ /g, "_");
    obj[id] = {
        id,
        name: ms.name,
        depth: ms.depth,
        height: ms.height,
        walkable: ms.walkable.reduce((obj, x, i) => {
            obj[i] = x;
            return obj;
        }, {})
    };
    return obj;
}, {});
exports.default = RoomSprites;
//# sourceMappingURL=index.js.map