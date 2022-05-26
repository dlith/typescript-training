import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle"


let myShape = new Shape(10, 15);
let myCicrle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3, 7);

//declare an array of shapes
let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCicrle);
theShapes.push(myRectangle);

for(let tmpShape of theShapes){
    console.log(tmpShape.getInfo());
}
