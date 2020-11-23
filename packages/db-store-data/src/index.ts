import RoomData from "@code-of-everand/data-rooms";
import { DB } from "@code-of-everand/firebase";

const storeRoomData = async () => {
  const dbRoomIds = await DB.rooms.getIds();
  const localRoomIds = Object.keys(RoomData);

  const deleteIds = dbRoomIds.filter(id => !localRoomIds.includes(id));

  return Promise.all([
    Promise.all(deleteIds.map(id => 
      DB.rooms.document(id).delete()
    )),
    Promise.all(
      Object.entries(RoomData).map(async ([roomId, roomData]) => {
        await DB.rooms.document(roomId).set(roomData);
      })
    )
  ]);
};

storeRoomData();