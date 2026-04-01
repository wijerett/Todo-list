import { getNotesArray } from "./getNotes.js";
import "./tile.js";






export function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export function loStore() {
  const tiles = document.getElementById("tiles");
  tiles.innerHTML = "";

  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const projectTitle = document.createElement('h2');
    projectTitle.classList.add('projectHead');
    projectTitle.textContent = project.name;
    projectTitle.style.cursor = "pointer";
    projectDiv.appendChild(projectTitle);


    const notesContainer = document.createElement('div');
    notesContainer.style.display = "none";

    if (Array.isArray(project.notes)) {
      project.notes.forEach(noteValues => {
        if (!Array.isArray(noteValues)) return;
        const postIt = document.createElement('div');
        postIt.classList.add('post');
        noteValues.forEach(val => {
          const p = document.createElement('p');
          p.textContent = val;
          postIt.appendChild(p);
      });
      notesContainer.appendChild(postIt);
      });
    }
    projectTitle.addEventListener('click', () => {
      notesContainer.style.display = notesContainer.style.display === "none" ? "block" : "none";
    });
    projectDiv.appendChild(notesContainer);
    tiles.appendChild(projectDiv);
  });
};