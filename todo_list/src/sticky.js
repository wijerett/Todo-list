import cropsticky from "./cropsticky.jpg";
import note from "./notebook.jpg";

export function stickyPicture() {
  const tiles = document.getElementById('tiles');
  const mySticky = new Image();
  mySticky.classList.add('sticky');
  mySticky.src = cropsticky;
  tiles.appendChild(mySticky);
};

export function notebookPicture() {
  const tiles = document.getElementById('tiles');
  const myNote = new Image();
  myNote.classList.add('notebook');
  myNote.src = note;
  tiles.appendChild(myNote);
}