
class Shapes {
  constructor(shapeColor, text, textColor, shape) {
    this.shape = shape;
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
}

class Triangle extends Shapes {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }

  render() {
    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="${this.shapeColor}" points="25,150 125,0 200,150" />
        <text x="125" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
  }
}

class Circle extends Shapes {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }

  render() {
    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="125" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="125" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
  }
}

class Square extends Shapes {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }

  render() {
    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="0" width="125" height="125" fill="${this.shapeColor}"/>
        <text x="125" y="90" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
  }
}

module.exports = { Circle, Triangle, Square };