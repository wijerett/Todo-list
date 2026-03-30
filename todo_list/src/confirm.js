import { newBlock } from "./home.js";

export function confirmButton() {
  const confirmBtn = document.createElement('button');
  confirmBtn.textContent = ("Add Note");
  confirmBtn.classList.add('confirmBtn');
  return confirmBtn;
  
}

