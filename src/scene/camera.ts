export class Camera {
  x = 0;
  y = 0;

  targetX = 0;
  targetY = 0;

  update(delta: number) {
    this.x += (this.targetX - this.x) * delta * 6;
    this.y += (this.targetY - this.y) * delta * 6;
  }
}