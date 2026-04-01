import { newBlock } from "./home.js";
import { loStore } from "./storage.js";
import { openNotes } from "./gotonotes.js";
import { stickyPicture } from "./sticky.js";


export function loadOpen() {


  const openContent = document.createElement('div');
  openContent.classList.add("openContent");

  const content = document.getElementById('content');
  const tiles = document.getElementById('tiles');

  const boxOne = document.createElement('div');
  const oneBtn = document.createElement('button');
  oneBtn.classList.add('oneBtn');
  oneBtn.textContent = ("Add a new note");
  boxOne.classList.add('boxOne');
  boxOne.appendChild(oneBtn);
  oneBtn.addEventListener('click', () => {
    tiles.innerHTML = "";
    content.innerHTML = "";
    openNotes();
    newBlock();
  });

  const boxTwo = document.createElement('div');
  const twoBtn = document.createElement('button');
  twoBtn.addEventListener('click', () => {
    tiles.innerHTML = "";
    content.innerHTML = "";
    loStore();
    openNotes();
  
  });
  twoBtn.classList.add('twoBtn');
  twoBtn.textContent = ("Go to notes");
  boxTwo.classList.add('boxTwo');
  boxTwo.appendChild(twoBtn);
  
  const boxThree = document.createElement('div');
  const threeBtn = document.createElement('button');
  threeBtn.classList.add('threeBtn');
  threeBtn.textContent = ("Go to last note");
  boxThree.classList.add('boxThree');
  boxThree.appendChild(threeBtn);



  const openBox = document.createElement('div');
  openBox.classList.add('openBox');
  openBox.appendChild(boxOne);
  openBox.appendChild(boxTwo);
  openBox.appendChild(boxThree);

  openContent.appendChild(openBox);
  content.appendChild(openContent);


  stickyPicture();


};