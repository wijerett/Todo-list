import { newBlock } from "./home.js";

export function confirmButton() {
  const confirmBtn = document.createElement('button');
  confirmBtn.textContent = ("Confirm");
  confirmBtn.classList.add('confirmBtn');
  return confirmBtn;
  
}

