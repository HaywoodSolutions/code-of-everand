import RoomData from "@code-of-everand/data-rooms";
import { DB } from "@code-of-everand/firebase";

const storeRooms = async () => {
  const dbRoomIds = await DB.rooms.getIds();
  const localRoomIds = Object.keys(RoomData);

  const deleteIds = dbRoomIds.filter(id => !localRoomIds.includes(id));

  return await Promise.all([
    ...deleteIds.map(id => 
      DB.rooms.document(id).delete()
    ),
    ...Object.entries(RoomData).map(([roomId, roomData]) =>
      DB.rooms.document(roomId).set(roomData)
    )
  ]).then(() => console.log("Stored Room Data - SUCCESS")).catch(() => console.log("Storing Room Data - FAIL"));
};


export default storeRooms;