import storeRooms from "./utils/storeRooms";
import storeRoomSprites from "./utils/storeRoomSprites";

(async function() {
  await storeRooms();
  await storeRoomSprites();
})();