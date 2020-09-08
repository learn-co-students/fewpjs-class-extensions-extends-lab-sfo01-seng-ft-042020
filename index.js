// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides;
    this.count = this.sides.length;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((a, b) => a + b);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.count !== 3) return false;
    const side1 = this.sides[0];
    const side2 = this.sides[1];
    const side3 = this.sides[2];
    return (
      side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2
    );
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.count != 4) return false;
    const side1 = this.sides[0];
    for (let i = 1; i < this.count; i++) {
      if (this.sides[i] !== side1) return false;
    }
    return true;
  }

  get area() {
    if (!Array.isArray(this.sides)) return;
    if (this.count !== 4) return;
    return this.sides[0] * this.sides[0];
  }
}
