/* Object Types

Apart from primitives, the most common sort of type you’ll encounter is an object type. This refers to any JavaScript value with properties, which is almost all of them! To define an object type, we simply list its properties and their types.

For example, here’s a function that takes a point-like object:

*/

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });


/* 
Try
Here, we annotated the parameter with a type with two properties - x and y - which are both of type number. You can use , or ; to separate the properties, and the last separator is optional either way.

The type part of each property is also optional. If you don’t specify a type, it will be assumed to be any.
*/