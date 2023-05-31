import { COMMANDS, NUMBER_FOR_COLOR } from "./Commands.js";

export default class TurtleParser {
  constructor() {

  }

  parse(input) {
    const arr = input.split('\n').map(str => str.trim()).filter(Boolean);
    const commands = []; 
    const errors = []; 
    arr.forEach(str => {
      let [command, arg] = str.split(' ').map(s => s.trim().toLowerCase()); 
      arg = Number(arg); 
      const validationError = this.#isValidCommand(command, arg); 
      if (validationError) {
        errors.push(validationError);
      } else {
        if (command === 'p') {
          arg = NUMBER_FOR_COLOR[arg];
        }
        const res = this.#isCommandWithoutArg(command) ? [command] : [command, arg]; 
        commands.push(res); 
      }

    });
    return {
      commands, 
      errors,
    };
  }

  #isValidCommand(command, arg) {
    if (!COMMANDS[command]) return `There is no such command: ${command}`; 

    if (this.#isCommandWithoutArg(command)) {
      if (arg) return `Command ${command} can't be called with arg`;
    } else {
      if (arg == null) return `Command ${command} should be called with arg`;
      if (!Number.isInteger(arg)) return `Argument for command ${command} is not valid: it should be integer`;
      if (command === 'p' && !NUMBER_FOR_COLOR[arg]) return `Argument for color is not valid: ${arg}. Should be number from 1 to 8`;
    }

    return null; 
  }

  #isCommandWithoutArg(command) {
    return ['u', 'd'].includes(command);
  }
}