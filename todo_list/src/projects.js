

export function addToProject(projectName, noteValues) {

  let projects = JSON.parse(localStorage.getItem("projects")) || [];

  let project = projects.find(p => p.name === projectName);

  if (!project) {
    project = { name: projectName, notes: [] };
    projects.push(project);
  }

  if (Array.isArray(noteValues)) {
    project.notes.push(noteValues);
    localStorage.setItem("projects", JSON.stringify(projects));
  };
  
}