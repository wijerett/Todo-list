import "./home.js";



export function getInput() {
  
  const title = document.getElementById('titlebox');
  const description = document.getElementById('desc');
  const date = document.getElementById('create');
  const notes = document.getElementById('notes');

  const confirm = document.querySelector(".confirm");
  confirm.addEventListener("click", () => {
    var noteValues = [];
    //noteValues.classList.add('noteValues');
    const noteTitle = title.value;
    const desc = description.value;
    const creationDate = date.value;
    const addNote = notes.value;
    const radio = radio.value;



    if (noteTitle === "" && desc === "" && creationDate === "" && addNote === "") {
      return;
    } else {

    //console.log(noteTitle, desc, creationDate, addNote);

    noteValues.push(noteTitle, desc, creationDate, addNote);

    //console.log(noteValues);


    };
  
  });

};