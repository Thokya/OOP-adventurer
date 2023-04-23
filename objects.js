/*
    * Objects:
    * In js, an object is collection of key-value pairs, where the key are strings
    * Think of an object as box that can hold diff things inside.
    * The box has a name (like myBox) and has different things inside it
    * For example there could be a toy car, a book, and a ball inside the box,
    * and each of these things has its own name (like "car", "book", and "ball")
*/

/*
    * An object in JS is like a box that holds diff pieces of information indise,
    * like a person's name, age and hobbies
    * Just like you can take things out of the box and use them, you can use the
    * properties of an object in JS to get or set information.
*/
let myBox = {
    toyCar: 'red',
    book: 'The cat in the hat',
    ball: 'blue'
}
/*
    * In eg: `myBox` is an object with three properties: `toyCar`, `book`, `ball`
    * Each property holds a value, which in this case is a string representing
    * the color of a toy car, the title of the book, and the color of ball
    * We can access the values of the properties in the `myBox` object using
    * dot notations, like this
*/

console.log(myBox.toyCar)
console.log(myBox.book)
console.log(myBox.ball)

/*
    * Similarly, we can change the values of the properties in the `myBox` object like this
*/

 myBox.toyCar = 'blue'
 myBox.book = 'Green Eggs and Ham'
 myBox.ball = 'yellow'

/*
    * the vlaues of the properties have been updated to represent a blue toy car,
    * a different book, and a yellow ball
*/
