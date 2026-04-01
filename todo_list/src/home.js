import "./confirm.js";
import { confirmButton } from "./confirm.js";
import { loadOpen } from "./open.js";
import { newTile } from "./tile.js";
import "./getNotes.js";
import { addToProject } from "./projects.js";

export function newBlock() {

  const noteCreate = document.createElement('h3');
  noteCreate.classList.add('noteCreate');
  noteCreate.innerHTML = ("Create a new project name or use an existing project name to add a new note to that project");
  

  const content = document.getElementById('content');
  const block = document.createElement('div');
  block.classList.add('block');

  const titleBox = document.createElement('input');
  titleBox.setAttribute("id", "titlebox");
  titleBox.classList.add('titlebox');
  block.appendChild(titleBox);
  const titleLabel = document.createElement('label');
  titleLabel.setAttribute("for", "titlebox");
  titleLabel.textContent = "Project Title";
  block.appendChild(titleLabel);
  


  const desc = document.createElement('input');
  desc.classList.add('desc');
  desc.setAttribute("id", "desc");
  block.appendChild(desc);
  const descLabel = document.createElement('label');
  descLabel.setAttribute("for", "desc");
  descLabel.textContent = "Note Description";
  block.appendChild(descLabel);


  const notes = document.createElement('input');
  notes.classList.add('notes');
  notes.setAttribute("id", "notes");
  block.appendChild(notes);
  const notesLabel = document.createElement('label');
  notesLabel.setAttribute("for", "notes");
  notesLabel.textContent = "Additional Notes";
  block.appendChild(notesLabel);



  const priorityRad = document.createElement('div');
  priorityRad.classList.add('radioBox');


  const priorityOne = document.createElement('input');
  priorityOne.type = 'radio';
  priorityOne.name = 'radio';
  priorityOne.classList.add('radio');
  priorityOne.setAttribute("id", "priorityOne");
  priorityRad.appendChild(priorityOne);
  const radOne = document.createElement('label');
  radOne.classList.add("radLabel");
  radOne.setAttribute("for", "priorityOne");
  radOne.textContent = "Top Priority";
  priorityRad.appendChild(radOne);
  
  const priorityTwo = document.createElement('input');
  priorityTwo.type = 'radio';
  priorityTwo.name = 'radio';
  priorityTwo.classList.add('radio');
  priorityTwo.setAttribute("id", "priorityTwo");
  priorityRad.appendChild(priorityTwo);
  const radTwo = document.createElement('label');
  radTwo.classList.add("radLabel");
  radTwo.setAttribute("for", "priorityTwo");
  radTwo.textContent = "Second Priority";
  priorityRad.appendChild(radTwo);

  const priorityThree = document.createElement('input');
  priorityThree.type = 'radio';
  priorityThree.name = 'radio';
  priorityThree.classList.add('radio');
  priorityThree.setAttribute("id", "priorityThree");
  priorityRad.appendChild(priorityThree);
  const radThree = document.createElement('label');
  radThree.classList.add("radLabel");
  radThree.setAttribute("for", "priorityThree");
  radThree.textContent = "Third Priority";
  priorityRad.appendChild(radThree);

  const confirmBtn = confirmButton();
  confirmBtn.addEventListener('click', () => {
    addToProject();
    newTile();
    content.innerHTML = "";
    loadOpen();
  });
  
  content.appendChild(noteCreate);
  content.appendChild(block);
  content.appendChild(priorityRad);
  content.appendChild(confirmBtn);

  return { newBlock };
};

