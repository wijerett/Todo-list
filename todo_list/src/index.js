import "./styles.css";
import { newBlock } from "./home.js";
import { getInput } from "./input.js";
import { newTile } from "./tile.js";
import { loadOpen } from "./open.js";
import { confirmButton } from "./confirm.js";
import { loStore, storageAvailable } from "./storage.js";





if (storageAvailable("localStorage")) {
  console.log("Yippee! we can use local storage");
} else {
  console.log("no local storage available");
}

//loStore();

window.addEventListener("DOMContentLoaded", () => {
  loadOpen();
});

