"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCicrle = new Circle_1.Circle(5, 10, 20);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
//declare an array of shapes
var theShapes = [];
theShapes.push(myCicrle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tmpShape = theShapes_1[_i];
    console.log(tmpShape.getInfo());
    console.log(tmpShape.calculateArea());
    console.log();
}
