import "./home.js";
import "./createProject.js";

export function addToProject(projectName, radioValue, noteValues, description = "") {

  const checkedRadio = document.querySelector('input[type="radio"]:checked');
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  let project = projects.find(p => p.name === projectName);

  // Creating a new project
  if (!project) {
    if (!checkedRadio) {
      alert('Please check a priority before confirming');
      return;
    }

    const priorityMap = {
      "priorityOne": "Top Priority",
      "priorityTwo": "Mid Priority",
      "priorityThree": "Lowest Priority"
    };

    radioValue = priorityMap[checkedRadio.id];
    checkedRadio.checked = false;

    project = { name: projectName, notes: [], radioValue, description };
    projects.push(project);

  // Adding to existing project
  } else {
    if (description && !project.description) {
      project.description = description;
    }
  }

  // Validate and push note
  if (noteValues !== null) {
    if (!noteValues || noteValues.length === 0 || noteValues[0].trim() === "") {
      alert("Please enter a note description before confirming");
      return;
    }
    project.notes.push(...noteValues);
  }

  localStorage.setItem("projects", JSON.stringify(projects));
}