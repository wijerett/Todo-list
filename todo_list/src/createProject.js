import { addToProject } from "./projects.js";
import { newTile } from "./tile.js";
import { loadOpen } from "./open.js";
import { confirmButton } from "./confirm.js";
import { newNote } from "./noteCreate.js";

export function createNewProject() {

  //Create a new note

  const content = document.getElementById('content');
  const block = document.createElement('div');
  block.classList.add('block');

  const selectBox = document.createElement('select');
  selectBox.classList.add('selectBox');
  selectBox.setAttribute("id", "selectBox");
  block.appendChild(selectBox);
  const selectLabel = document.createElement('label');
  selectLabel.setAttribute("for", "selectBox");
  selectLabel.textContent = "Select Project";
  block.appendChild(selectLabel);

  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  projects.forEach(project => {
    const option = document.createElement('option');
    option.value = project.name;
    option.textContent = project.name;
    selectBox.appendChild(option);
  });

  const notes = document.createElement('input');
  notes.classList.add('notes');
  notes.setAttribute("id", "notesTwo");
  block.appendChild(notes);
  const notesLabel = document.createElement('label');
  notesLabel.setAttribute("for", "notesTwo");
  notesLabel.textContent = "Note Description";
  block.appendChild(notesLabel);

    const confirmBtn = confirmButton();
    confirmBtn.addEventListener('click', () => {
      const noteText = document.getElementById('notesTwo').value.trim();
      const projectName = document.getElementById('selectBox').value.trim();
      addToProject(projectName, null, [noteText], "");
      //newTile();
      content.innerHTML = "";
      loadOpen();
    });

  content.appendChild(block);
  content.appendChild(confirmBtn);

}