import { DB } from "@code-of-everand/firebase";
import RoomSprites from "@code-of-everand/data-room-sprites";

const storeRoomSprites = async () => {
  const dbRoomSpritesIds = await DB.roomSprites.getIds();
  const localRoomSpritesIds = Object.keys(RoomSprites);

  const deleteIds = dbRoomSpritesIds.filter(id => !localRoomSpritesIds.includes(id));

  return await Promise.all([
    ...deleteIds.map(id => 
      DB.roomSprites.document(id).delete()
    ),
    ...Object.entries(RoomSprites).map(([id, data]) =>
      DB.roomSprites.document(id).set(data)
    )
  ]).then(() => console.log("Stored Room Sprites - SUCCESS")).catch(() => console.log("Storing Room Sprites - FAIL"));
};

export default storeRoomSprites;