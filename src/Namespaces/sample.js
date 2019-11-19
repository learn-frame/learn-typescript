var Area;
(function (Area) {
    var PI = Math.PI;
    Area.circleArea = function (radiu) { return PI * Math.pow(radiu, 2); };
})(Area || (Area = {}));
var Area;
(function (Area) {
    Area.squareArea = function (side) { return Math.pow(side, 2); };
})(Area || (Area = {}));
/// <reference path="A.ts" />
/// <reference path="B.ts" />
console.log(Area.squareArea(10));
console.log(Area.circleArea(10));
