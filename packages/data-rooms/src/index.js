import { RoomConnectionType } from '@code-of-everand/types-map';
import { BaseRooms, BaseRoomConnections } from './data';
import DefaultFloorPlan from './DefaultFloorPlan';
var GetConnectionsForRoom = function (roomCord, roomConnections) {
    var cordId = JSON.stringify(roomCord);
    return roomConnections.filter(function (connection) { return connection.roomIds.map(function (v) { return JSON.stringify(v); }).includes(cordId); }).reduce(function (obj, c) {
        if (JSON.stringify(c.roomIds[0]) == cordId)
            obj[c.roomIds[1][0] + "," + c.roomIds[1][1]] = {
                cord: c.type == RoomConnectionType.NS ? ([c.position, 0]) : ([0, c.position])
            };
        else if (JSON.stringify(c.roomIds[1]) == cordId)
            obj[c.roomIds[0][0] + "," + c.roomIds[0][1]] = {
                cord: c.type == RoomConnectionType.NS ? ([c.position, 100]) : ([100, c.position])
            };
        return obj;
    }, {});
};
var Rooms = BaseRooms.reduce(function (obj, room) {
    obj[room.cordOnMap[0] + "," + room.cordOnMap[1]] = {
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
//# sourceMappingURL=index.js.map