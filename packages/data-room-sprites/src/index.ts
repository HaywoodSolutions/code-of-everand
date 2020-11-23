import { RoomSprite } from '@code-of-everand/types-map';

const RoomSpritesBase: Omit<RoomSprite, "id">[] = [
  {
    name: "Medium Tree 1",
    depth: [2, 2],
    height: 4,
    walkable: []
  },
  {
    name: "Medium Tree No Leaves",
    depth: [2, 2],
    height: 4,
    walkable: []
  },
  {
    name: "Small Tree 1",
    depth: [2, 2],
    height: 4,
    walkable: []
  },
  {
    name: "Small Tree No Leaves",
    depth: [2, 2],
    height: 4,
    walkable: []
  },
  {
    name: "Barrel",
    depth: [1, 1],
    height: 2,
    walkable: []
  },
  {
    name: "Sign 1",
    depth: [1, 1],
    height: 2,
    walkable: []
  },
  {
    name: "Sign 2",
    depth: [1, 1],
    height: 3,
    walkable: []
  },
  {
    name: "Tall Stone 1",
    depth: [1, 1],
    height: 2,
    walkable: []
  },
  {
    name: "Tall Stone 2",
    depth: [1, 1],
    height: 2,
    walkable: []
  },
  {
    name: "Tall Stone 3",
    depth: [1, 1],
    height: 2,
    walkable: []
  },
  {
    name: "Ballon Platform Empty 1",
    depth: [8, 8],
    height: 8,
    walkable: []
  },
  {
    name: "Ballon Platform Empty 2",
    depth: [8, 8],
    height: 8,
    walkable: []
  }
];

const RoomSprites: Record<string, RoomSprite> = RoomSpritesBase.reduce((obj: Record<string, RoomSprite>, ms) => {
  const id: string = "ROOMSPRITE_" + ms.name.toUpperCase().replace(/ /g, "_");
  obj[id] = {
    id,
    name: ms.name,
    depth: ms.depth,
    height: ms.height,
    walkable: []
  };
  return obj;
}, {})

export default RoomSprites;