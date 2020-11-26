import { Room, Region, RoomConnection, RoomConnectionType } from '@code-of-everand/types-map';

export const BaseRooms: Omit<Room, "walkable"|"connections">[] = [
  {
    channels: [],
    cordOnMap: [0, 1],
    region: Region.theAcademy,
    roomSprites: [
      {
        cord: [9, 3],
        sprite: "ROOMSPRITE_SMALL_TREE_1"
      },
      {
        cord: [10, 5],
        sprite: "ROOMSPRITE_SMALL_TREE_1"
      },
      {
        cord: [11, 7],
        sprite: "ROOMSPRITE_SMALL_TREE_1"
      },
      {
        cord: [11, 17],
        sprite: "ROOMSPRITE_SMALL_TREE_1"
      },
      {
        cord: [13, 19],
        sprite: "ROOMSPRITE_SMALL_TREE_1"
      },
      {
        cord: [10, 25],
        sprite: "ROOMSPRITE_SMALL_TREE_1"
      },
      {
        cord: [8, 24],
        sprite: "ROOMSPRITE_SMALL_TREE_1"
      },
      {
        cord: [0, 24],
        sprite: "ROOMSPRITE_SMALL_TREE_1"
      },
      {
        cord: [4, 6],
        sprite: "ROOMSPRITE_SMALL_TREE_1"
      },
    ]
  },
  {
    channels: [],
    cordOnMap: [1, 0],
    region: Region.theAcademy,
    roomSprites: []
  },
  {
    channels: [],
    cordOnMap: [1, 1],
    region: Region.theAcademy,
    roomSprites: []
  },
  {
    channels: [],
    cordOnMap: [1, 2],
    region: Region.theAcademy,
    roomSprites: []
  },
  {
    channels: [],
    cordOnMap: [2, 0],
    region: Region.theAcademy,
    roomSprites: []
  },
  {
    channels: [],
    cordOnMap: [2, 1],
    region: Region.theAcademy,
    roomSprites: []
  },
  {
    channels: [],
    cordOnMap: [2, 2],
    region: Region.theAcademy,
    roomSprites: []
  },
  {
    channels: [],
    cordOnMap: [3, 0],
    region: Region.theAcademy,
    roomSprites: []
  },
  {
    channels: [],
    cordOnMap: [3, 1],
    region: Region.theAcademy,
    roomSprites: []
  },
  {
    channels: [],
    cordOnMap: [3, 2],
    region: Region.theAcademy,
    roomSprites: []
  },
]

export const BaseRoomConnections: RoomConnection[] = [
  {
    type: RoomConnectionType.NS,
    roomIds: [[0,0], [0,0]],
    position: 0
  }
]