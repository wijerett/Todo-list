import "./input.js";
import "./home.js";
import "./storage.js";
import { confirmButton } from "./confirm.js";
import { getCurrentDate } from "./date.js";
import "./getNotes.js";
import { addToProject } from "./projects.js";

var radioValue = "";



export function newTile() {
  
  const title = document.getElementById('titlebox');
  //const description = document.getElementById('desc');
  const date = getCurrentDate();
  const notes = document.getElementById('notes');
  const tiles = document.getElementById('tiles');
  const radioOne = document.getElementById('priorityOne');
  const radioTwo = document.getElementById('priorityTwo');
  const radioThree = document.getElementById('priorityThree');
  const tileBox = document.getElementById('tiles');
  const projects = document.createElement('div');
  projects.classList.add('projects');

  const noteTitle = title.value;
  const desc = description.value;
  const creationDate = date;

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
  };

  
  const postIt = document.createElement('div');
  postIt.classList.add('post');

  const noteValues = ["Title:  " + noteTitle, "Date created:  " + creationDate, radioValue];

  noteValues.forEach(val => {
    const p = document.createElement('p');
    p.textContent = val;
    postIt.appendChild(p);
  });
  if (title.value.trim() &&
    description.value.trim()
  ) {
    title.value = "";
    description.value = "";
  } else {
    alert('Please fill in all fields before confirming');
  };



  const projectName = title.value;
  addToProject(projectName, noteValues, desc);
 
};
