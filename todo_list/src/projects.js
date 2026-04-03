import "./home.js";
import "./createProject.js";


const radioOne = document.getElementById('priorityOne');
const radioTwo = document.getElementById('priorityTwo');
const radioThree = document.getElementById('priorityThree');




export function addToProject(projectName, radioValue, noteValues, description = "") {
  const checkedRadio = document.querySelector('input[type="radio"]:checked');

  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  let project = projects.find(p => p.name === projectName);

  if (!checkedRadio) {
    alert('Please check a priority before confirming!');
    return;
  };
  
  const priorityMap = {
    "priorityOne": "Top Priority",
    "priorityTwo": "Mid Priority",
    "priorityThree": "Lowest Priority"
  };
  
  radioValue = priorityMap[checkedRadio];
  checkedRadio.checked = false;

  if (!project) {
    project = { name: projectName, notes: [], radioValue: priorityMap[checkedRadio.id], description };
    projects.push(project);
  } else if (description && !project.description) {
    project.description = description;
  };

  if (Array.isArray(noteValues) && noteValues.length > 0) {
    project.notes.push(...noteValues);
    
  };

  localStorage.setItem("projects", JSON.stringify(projects));
}