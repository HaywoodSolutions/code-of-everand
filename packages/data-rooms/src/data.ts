import { Room, Region, RoomConnection, RoomConnectionType } from '@code-of-everand/types-map';

export const BaseRooms: Omit<Room, "walkable"|"connections">[] = [
  {
    channels: [],
    cordOnMap: [0, 1],
    region: Region.theAcademy
  },
  {
    channels: [],
    cordOnMap: [1, 0],
    region: Region.theAcademy
  },
  {
    channels: [],
    cordOnMap: [1, 1],
    region: Region.theAcademy
  },
  {
    channels: [],
    cordOnMap: [1, 2],
    region: Region.theAcademy
  },
  {
    channels: [],
    cordOnMap: [2, 0],
    region: Region.theAcademy
  },
  {
    channels: [],
    cordOnMap: [2, 1],
    region: Region.theAcademy
  },
  {
    channels: [],
    cordOnMap: [2, 2],
    region: Region.theAcademy
  },
  {
    channels: [],
    cordOnMap: [3, 0],
    region: Region.theAcademy
  },
  {
    channels: [],
    cordOnMap: [3, 1],
    region: Region.theAcademy
  },
  {
    channels: [],
    cordOnMap: [3, 2],
    region: Region.theAcademy
  },
]

export const BaseRoomConnections: RoomConnection[] = [
  {
    type: RoomConnectionType.NS,
    roomIds: [[0,0], [0,0]],
    position: 0
  }
]