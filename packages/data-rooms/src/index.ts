import { Room, RoomConnection, RoomConnectionPoints, RoomConnectionType } from '@code-of-everand/types-map';
import { BaseRooms, BaseRoomConnections } from './data';
import DefaultFloorPlan from './DefaultFloorPlan';

const GetConnectionsForRoom = (roomCord: [number, number], roomConnections: RoomConnection[]): RoomConnectionPoints => {
  let cordId = JSON.stringify(roomCord);
  return roomConnections.filter(connection => connection.roomIds.map(v => JSON.stringify(v)).includes(cordId)).reduce((obj: RoomConnectionPoints, c) => {

    if (JSON.stringify(c.roomIds[0]) == cordId)
      obj[`${c.roomIds[1][0]},${c.roomIds[1][1]}`] = {
        cord: c.type == RoomConnectionType.NS ? (
          [c.position, 0]
        ) : (
          [0, c.position]
        )
      };
    else if (JSON.stringify(c.roomIds[1]) == cordId)
      obj[`${c.roomIds[0][0]},${c.roomIds[0][1]}`] = {
        cord: c.type == RoomConnectionType.NS ? (
          [c.position, 100]
        ) : (
          [100, c.position]
        )
      };
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