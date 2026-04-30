import { newBlock } from "./home.js";
import { loStore } from "./storage.js";
import { openNotes } from "./gotonotes.js";
import { stickyPicture, notebookPicture } from "./sticky.js";
import { createNewProject } from "./createProject.js";
import { notebook } from "./notebook.jpg";


export function loadOpen() {

  //background photo by Little Visuals
  //notebook Anastasiya Badun
  //other notebook Manuel Cortés

  const openHead = document.createElement('h2');
  openHead.classList.add('openHead');
  openHead.innerHTML = "Tackl List";
  

  const openContent = document.createElement('div');
  openContent.classList.add("openContent");

  const content = document.getElementById('content');
  const tiles = document.getElementById('tiles');

  const boxOne = document.createElement('div');
  const oneBtn = document.createElement('button');
  oneBtn.classList.add('oneBtn');
  oneBtn.textContent = ("Create a new project");
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
    openNotes();
    createNewProject();
  });
  twoBtn.classList.add('twoBtn');
  twoBtn.textContent = ("Create a new note");
  boxTwo.classList.add('boxTwo');
  boxTwo.appendChild(twoBtn);
  
  const boxThree = document.createElement('div');
  const threeBtn = document.createElement('button');
  threeBtn.addEventListener('click', () => {
    tiles.innerHTML = "";
    content.innerHTML = "";
    loStore();
    openNotes();
  });
  threeBtn.classList.add('threeBtn');
  threeBtn.textContent = ("Go to Project List");
  boxThree.classList.add('boxThree');
  boxThree.appendChild(threeBtn);

  const footer = document.createElement('p');
  footer.classList.add('openFoot');
  footer.textContent = "Created by Jeremy Winnett";




  const openBox = document.createElement('div');
  openBox.classList.add('openBox');
  openBox.appendChild(boxOne);
  openBox.appendChild(boxTwo);
  openBox.appendChild(boxThree);
  
  openContent.appendChild(openHead);
  openContent.appendChild(openBox);
  content.appendChild(openContent);


  notebookPicture();
  //stickyPicture();
  tiles.appendChild(footer);


};