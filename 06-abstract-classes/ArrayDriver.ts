import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle"


let myCicrle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3, 7);

//declare an array of shapes
let theShapes: Shape[] = [];

theShapes.push(myCicrle);
theShapes.push(myRectangle);

for(let tmpShape of theShapes){
    console.log(tmpShape.getInfo());
    console.log(tmpShape.calculateArea());
    console.log();
}
