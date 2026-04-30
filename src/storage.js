import { getNotesArray } from "./getNotes.js";
import "./tile.js";



export function loStore() {
  const tiles = document.getElementById("tiles");
  tiles.innerHTML = "";

  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  projects.forEach((project, index) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const projectTitle = document.createElement('h1');
    projectTitle.classList.add('projectHead');
    projectTitle.textContent = project.name;
    projectTitle.style.cursor = "pointer";
    projectDiv.appendChild(projectTitle);

    const colorMap = {
      "Top Priority": "green",
      "Mid Priority": "yellow",
      "Lowest Priority": "red"
    };

    if (project.radioValue) {
      const radio = document.createElement('p');
      radio.classList.add('projectRadio');
      radio.textContent = project.radioValue;
      radio.style.color = colorMap[project.radioValue];
      projectTitle.appendChild(radio);
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete Project";
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', () => {
      projects.splice(index, 1);
      localStorage.setItem("projects", JSON.stringify(projects));
      loStore();
    });
 
    projectTitle.appendChild(deleteBtn);

    const notesContainer = document.createElement('div');
    notesContainer.classList.add('noteDiv');
    notesContainer.style.display = "none";

    if (Array.isArray(project.notes)) {
    project.notes.forEach((note, noteIndex) => {
    const postIt = document.createElement('div');
    postIt.classList.add('post');

    const p = document.createElement('p');
    p.classList.add('noteDesc');
    p.textContent = note.text;
    postIt.appendChild(p);

    const date = document.createElement('p');
    date.classList.add('noteDate');
    date.textContent = note.date;
    postIt.appendChild(date);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete Note";
    deleteBtn.classList.add('deleteNote');
    deleteBtn.addEventListener('click', () => {
      const openNotes = notesContainer.style.display === "block";
      projects[index].notes.splice(noteIndex, 1);
      localStorage.setItem("projects", JSON.stringify(projects));
      loStore();

      if (openNotes) {
        setTimeout(() => {
          const tiles = document.getElementById("tiles");
          const projectDivs = tiles.getElementsByClassName('project');
          if (projectDivs[index]) {
            const notesContainers = projectDivs[index].getElementsByTagName('div');
            if (notesContainers[0]) notesContainers[0].style.display = "block";
          }
        }, 0);
      }
    });

    postIt.appendChild(deleteBtn);
    notesContainer.appendChild(postIt);
    });
    }
    projectTitle.addEventListener('click', () => {
      notesContainer.style.display = notesContainer.style.display === "none" ? "flex" : "none";
    });
    projectDiv.appendChild(notesContainer);
    tiles.appendChild(projectDiv);
  });
};