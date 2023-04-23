/*
    * Encapsulation:
    * Refers to bundling data with the mechanisms or methods that operate on data.
    * Also refer to limiting of direct access to some of that data.
    * Encapsulation is like having a toy box with a lid on it. You can put all your,
    * toys in the box and close the lid, so nobody can see what toys you have inside or
    * touch them without your permission
*/

// lets say we have a toy car in our toy box
const toyBox = {
    toyCar: 'red'
}

// we can use a getter to get the color of the toy car
console.log(toyBox.toyCar)

// but we can't change the color of the toy car directly, we have to use setter
toyBox.toyCar = 'blue'
console.log(toyBox.toyCar)

/*
    * Why do we need Encapsulation?
    * In programming, we use encapsulation to protect important information and
    * keep it sage from other parts of the code that don't need to see it.
    *
    * Like our favourite toy that we don't want anyone else to touch.
    * We can put it in a special box and keep it hidden away so nobody else can play with it.
*/
