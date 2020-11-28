"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_map_1 = require("@code-of-everand/types-map");
const data_1 = require("./data");
const DefaultFloorPlan_1 = require("./DefaultFloorPlan");
const GetConnectionsForRoom = (roomCord, roomConnections) => {
    let cordId = JSON.stringify(roomCord);
    return roomConnections.filter(connection => connection.roomIds.map(v => JSON.stringify(v)).includes(cordId)).reduce((obj, c) => {
        if (JSON.stringify(c.roomIds[0]) == cordId)
            obj[`${c.roomIds[1][0]},${c.roomIds[1][1]}`] = {
                cord: c.type == types_map_1.RoomConnectionType.NS ? ([c.position, 0]) : ([0, c.position])
            };
        else if (JSON.stringify(c.roomIds[1]) == cordId)
            obj[`${c.roomIds[0][0]},${c.roomIds[0][1]}`] = {
                cord: c.type == types_map_1.RoomConnectionType.NS ? ([c.position, 100]) : ([100, c.position])
            };
        return obj;
    }, {});
};
const Rooms = data_1.BaseRooms.reduce((obj, room) => {
    obj[`${room.cordOnMap[0]},${room.cordOnMap[1]}`] = {
        channels: room.channels,
        cordOnMap: room.cordOnMap,
        region: room.region,
        walkable: DefaultFloorPlan_1.default,
        connections: GetConnectionsForRoom(room.cordOnMap, data_1.BaseRoomConnections),
        roomSprites: room.roomSprites
    };
    return obj;
}, {});
exports.default = Rooms;
//# sourceMappingURL=index.js.map