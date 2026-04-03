import "./styles.css";
import { newBlock } from "./home.js";
import { getInput } from "./input.js";
import { newTile } from "./tile.js";
import { loadOpen } from "./open.js";
import { confirmButton } from "./confirm.js";
import { loStore } from "./storage.js";






//loStore();

window.addEventListener("DOMContentLoaded", () => {
  loadOpen();
});

