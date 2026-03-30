import cropsticky from "./cropsticky.jpg";

export function stickyPicture() {
  const tiles = document.getElementById('tiles');
  const mySticky = new Image();
  mySticky.classList.add('sticky');
  mySticky.src = cropsticky;
  tiles.appendChild(mySticky);
};