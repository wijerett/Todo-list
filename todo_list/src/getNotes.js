import "./tile.js";

export function getNotesArray() {
  const data = localStorage.getItem("note");
  if (!data) return [];
  const arr = JSON.parse(data);
  if (Array.isArray(arr)) {
    return arr;
  }
  return [];
};