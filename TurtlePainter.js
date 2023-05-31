export default class TurtlePainter {
  color = 'black';
  mode = 'up'; 
  x = 0; 
  y = 0; 

  constructor(ctx, width, height) {
    this.ctx = ctx; 
    this.width = width; 
    this.height = height;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.x = 0; 
    this.y = 0;
    this.mode = 'up'; 
    this.color= 'black';
  }

  pick(color) {
    this.color = color; 
  }

  down() {
    this.mode = 'down';
  }

  up() {
    this.mode = 'up'; 
  }

  west(cm) {
    this.move(cm * -1, 0);
  }

  north(cm) {
    this.move(0, cm * -1); 
  }

  south(cm) {
    this.move(0, cm); 
  }

  east(cm) {
    this.move(cm, 0); 
  }

  move(x, y) {
    if (this.mode === 'up') {
      this.#updateCoords(x, y); 
    }

    if (this.mode === 'down') {

      this.ctx.beginPath();
      this.ctx.strokeStyle = this.color;
      this.ctx.moveTo(this.x, this.y); 

      this.#updateCoords(x, y);

      this.ctx.lineTo(this.x, this.y); 
      this.ctx.stroke();
    }
  }

  #updateCoords(x, y) {
    this.x += x;
    this.y += y; 
    this.#checkCoords();
  }

  #checkCoords() {
    this.#checkX();
    this.#checkY();
  }

  #checkX() {
    if (this.x < 0) this.x = 0; 
    if (this.x > this.width) this.x = this.width; 
  }

  #checkY() {
    if (this.y < 0) this.y = 0; 
    if (this.y > this.height) this.y = this.height;
  }
  
}