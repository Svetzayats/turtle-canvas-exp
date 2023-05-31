import TurtleParser from "./TurtleParser.js";
import TurtlePainter from "./TurtlePainter.js";
import { COMMANDS } from "./Commands.js";

export default class Turtle {
  parser = new TurtleParser();
  
  constructor(canvas, size, errorContainer) {
    this.painter = new TurtlePainter(canvas, size.width, size.height);
    this.errorContainer = errorContainer;
  }

  execute(input) {
    const {commands, errors } = this.parser.parse(input); 
    this.#executeCommands(commands); 
    this.#showErrors(errors); 
  }

  #executeCommands(commands) {
    commands.forEach(arr => {
      const [command, arg] = arr;
      const paintCommand = COMMANDS[command]; 
      this.painter[paintCommand](arg); 
    }); 
  }

  #showErrors(errors) {
    this.#clearErrors();

    errors.forEach(error => this.#addError(error)); 
  }

  #addError(error) {
    const errorDiv = this.#createErrorDiv(error); 
    this.errorContainer.append(errorDiv); 
  }

  #createErrorDiv(error) {
    const div = document.createElement('div');
    const content = document.createTextNode(error); 
    div.appendChild(content); 
    return div; 
  }

  #clearErrors() {
    while (this.errorContainer.firstChild) {
      this.errorContainer.removeChild(this.errorContainer.firstChild); 
    }
  }

  clear() {
    this.painter.clear();
  }
}