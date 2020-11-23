import { Room } from "@code-of-everand/types-map";
import { DB } from "@code-of-everand/firebase";

export const getRoom = async (roomId: string): Promise<Room> => {
  const roomSnap = await DB.rooms.document(roomId).get();
  if (!roomSnap.exists)
    throw "No room with specified id";

  const roomData: Room|undefined = roomSnap.data();

  if (roomData != undefined)
    return roomData;
  else
    throw "No room with specified id";
}