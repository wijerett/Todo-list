import { loadOpen } from "./open.js";

export function openNotes() {
  const backBox = document.createElement('div')
  backBox.classList.add('backBox');


  const back = document.createElement('button');
  back.classList.add('back');
  back.innerHTML = "Go Back";

  back.addEventListener('click', () => {
    content.innerHTML = "";
    tiles.innerHTML = "";
    loadOpen();
  });

  backBox.appendChild(back);
  content.appendChild(backBox);

};