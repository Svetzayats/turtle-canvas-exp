import Turtle from "./Turtle.js";

const canvas = document.getElementById('canvas'); 
const ctx = canvas.getContext('2d'); 

const textareaCommands = document.getElementById('textarea-commands');
const errorContainer = document.getElementById('container-errors'); 

const buttonGo = document.getElementById('button-go'); 
const buttonClear = document.getElementById('button-clear');

const turtle = new Turtle(ctx, {width: 500, height: 300}, errorContainer); 

buttonGo.addEventListener('click', () => {
  if (textareaCommands) {
    const commands = textareaCommands.value; 
    turtle.execute(commands);  
  }
}); 
buttonClear.addEventListener('click', () => {
  turtle.clear();
}); 

/**
 * Instructions popover fallback 
 */

const popoverSupported = HTMLElement.prototype.hasOwnProperty("popover");
if (!popoverSupported) {
  // subscribe on click events 
  // change styles 
  const buttonShowInstractions = document.getElementById('button-instructions'); 
  const popover = document.getElementById('instruction-popover');
  buttonShowInstractions.addEventListener('click', () => {
    popover.classList.toggle('popover-show');
  })
}



