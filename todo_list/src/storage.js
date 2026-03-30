import "./tile.js";


const tiles = document.getElementById("tiles");



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
  const data = localStorage.getItem("note");
  if (!data) return;
  const notesArray = JSON.parse(data);
  tiles.innerHTML = "";

  notesArray.forEach(noteValues => {
    const postIt = document.createElement('div');
    postIt.classList.add('post');
    noteValues.forEach(val => {
      const p = document.createElement('p');
      p.textContent = val;
      postIt.appendChild(p);
    });
    tiles.appendChild(postIt);
  });
};