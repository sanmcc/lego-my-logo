const { Circle, Triangle, Square } = require('./shapes');

describe('Triangle', () => {
  test('should render a triangle', () => {
    const shapeColor = 'purple';
    const text = 'SNM';
    const textColor = 'black';
    const expectedSVG = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="purple" points="25,150 125,0 200,150" />
        <text x="125" y="120" font-size="60" text-anchor="middle" fill="black">SNM</text>
      </svg>`;
    const triangle = new Triangle(shapeColor, text, textColor);
    expect(triangle.render()).toEqual(expectedSVG);
  });
});

describe('Circle', () => {
  test('should render a circle', () => {
    const shapeColor = 'purple';
    const text = 'SNM';
    const textColor = 'black';
    const expectedSVG = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="125" cy="100" r="80" fill="purple" />
        <text x="125" y="125" font-size="60" text-anchor="middle" fill="black">SNM</text>
      </svg>`;
    const circle = new Circle(shapeColor, text, textColor);
    expect(circle.render()).toEqual(expectedSVG);
  });
});

describe('Square', () => {
  test('should render a square', () => {
    const shapeColor = 'purple';
    const text = 'SNM';
    const textColor = 'black';
    const expectedSVG = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="0" width="125" height="125" fill="purple"/>
        <text x="125" y="90" font-size="60" text-anchor="middle" fill="black">SNM</text>
      </svg>`;
    const square = new Square(shapeColor, text, textColor);
    expect(square.render()).toEqual(expectedSVG);
  });
});