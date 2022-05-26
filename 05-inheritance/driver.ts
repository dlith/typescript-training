import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle"


let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCicrle = new Circle(5, 10, 20);
console.log(myCicrle.getInfo());

let myRectangle = new Rectangle(0, 0, 3, 7);
console.log(myRectangle.getInfo());

