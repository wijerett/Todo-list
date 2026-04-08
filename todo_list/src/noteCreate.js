import { confirmButton } from "./confirm";
import { addToProject } from "./projects";


export function newNote() {

  
  const confirmBtn = confirmButton();
  confirmBtn.addEventListener('click', () => {
    const notesDesc = document.getElementById('notesTwo').value.trim();
    const selectBox = document.getElementById('selectBox').value.trim();
    const noteValues = [notesDesc];
    addToProject(selectBox, noteValues);
  });
};