import "./input.js";
import "./home.js";
import "./storage.js";
import { confirmButton } from "./confirm.js";
import { getCurrentDate } from "./date.js";



var radioValue = "";

let noteStorage = [];


export function newTile() {

  //create tile element and load independently of other html elements

  const title = document.getElementById('titlebox');
  const description = document.getElementById('desc');


  const date = getCurrentDate();


  const notes = document.getElementById('notes');
  const tiles = document.getElementById('tiles');
  const radioOne = document.getElementById('priorityOne');
  const radioTwo = document.getElementById('priorityTwo');
  const radioThree = document.getElementById('priorityThree');
  const tileBox = document.getElementById('tiles');



  const noteTitle = title.value;
  const desc = description.value;
  const creationDate = date;
  const addNote = notes.value;



  if ((radioOne).checked) {
    radioValue = "Top Priority";
    radioOne.checked = false;
  } else if ((radioTwo).checked) {
    radioValue = "Mid Priority";
    radioTwo.checked = false;
  } else if ((radioThree).checked) {
    radioValue = "Lowest Priority";
    radioThree.checked = false;
  } else if ((radioOne).checked === false && (radioTwo).checked === false && (radioThree).checked === false) {
    alert('Please check a priority before confirming');
    return;
  }
  
  const postIt = document.createElement('div');
  postIt.classList.add('post');

  const noteValues = [noteTitle, desc, addNote,creationDate, radioValue];

  
  noteValues.forEach(val => {
    const p = document.createElement('p');
    p.textContent = val;
    postIt.appendChild(p);
  });
  if (title.value.trim() &&
    description.value.trim() &&
    //date.value.trim() &&
    notes.value.trim()
  ) {
    title.value = "";
    description.value = "";
    //date.value = "";
    notes.value = "";
    //tiles.appendChild(postIt);
  } else {
    alert('Please fill in all fields before confirming');
  };


  let noteStorage = JSON.parse(localStorage.getItem("note"));


  noteStorage.push(noteValues);




  localStorage.setItem("note", JSON.stringify(noteStorage));

 

  console.log(noteStorage);
  console.log(noteValues);
  return { noteStorage };
};
