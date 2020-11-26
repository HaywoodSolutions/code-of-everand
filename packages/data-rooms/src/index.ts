import { Room, RoomConnection, RoomConnectionPoints, RoomConnectionType } from '@code-of-everand/types-map';
import { BaseRooms, BaseRoomConnections } from './data';
import DefaultFloorPlan from './DefaultFloorPlan';

const GetConnectionsForRoom = (roomCord: [number, number], roomConnections: RoomConnection[]): RoomConnectionPoints => {
  let cordId = JSON.stringify(roomCord);
  return roomConnections.filter(connection => connection.roomIds.map(v => JSON.stringify(v)).includes(cordId)).reduce((obj: RoomConnectionPoints, c) => {
    if (c.type == RoomConnectionType.NS) {
      if (JSON.stringify(c.roomIds[0]) == cordId)
        obj[`${c.roomIds[1][0]},${c.roomIds[1][1]}`] = {
          cord: [c.position, 28]
        };
      else {
        obj[`${c.roomIds[1][0]},${c.roomIds[1][1]}`] = {
          cord: [c.position, 0]
        };
      }
    } else if (c.type == RoomConnectionType.WE) {
      if (JSON.stringify(c.roomIds[0]) == cordId)
        obj[`${c.roomIds[1][0]},${c.roomIds[1][1]}`] = {
          cord: [12, c.position * 2]
        };
      else {
        obj[`${c.roomIds[1][0]},${c.roomIds[1][1]}`] = {
          cord: [0, c.position * 2]
        };
      }
    }
    return obj;
  }, {});
}

const Rooms: Record<string, Room> = BaseRooms.reduce((obj: Record<string, Room>, room) => {
  obj[`${room.cordOnMap[0]},${room.cordOnMap[1]}`] = {
    channels: room.channels,
    cordOnMap: room.cordOnMap,
    region: room.region,
    walkable: DefaultFloorPlan,
    connections: GetConnectionsForRoom(room.cordOnMap, BaseRoomConnections),
    roomSprites: room.roomSprites
  };

  return obj;
}, {});

export default Rooms;