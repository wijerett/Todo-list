import "./home.js";
import "./createProject.js";

export function addToProject(projectName, radioValue, date, noteValues) {

  const checkedRadio = document.querySelector('input[type="radio"]:checked');
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  let project = projects.find(p => p.name === projectName);

  if (noteValues !== null) {
    if (!noteValues || noteValues.length === 0 || noteValues[0].trim() === "") {
      alert("Please enter a note description before confirming");
      return false;
    }
  }

  if (!project) {
    if (!checkedRadio) {
      alert('Please check a priority before confirming');
      return false;
    }
    const priorityMap = {
      "priorityOne": "Top Priority",
      "priorityTwo": "Mid Priority",
      "priorityThree": "Lowest Priority"
    };
    radioValue = priorityMap[checkedRadio.id];
    checkedRadio.checked = false;
    project = { name: projectName, notes: [], radioValue };
    projects.push(project);
  }

  if (noteValues !== null) {
    project.notes.push(...noteValues.map(n => ({ text: n, date })));
  }


  localStorage.setItem("projects", JSON.stringify(projects));
  return true;
}