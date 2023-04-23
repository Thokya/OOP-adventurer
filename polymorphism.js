/*
    * Polymorphism
    * Allows the porgram the ability to redefine methods for derived classes
    * It is like having a toy box full of different kinds of toys that all work
    * in different ways, but you can still play with them all in similar ways
    *
    * In programming, polymorphism means that we can use the smae code to work
    * with different kinds of objects that behave in different ways.
    * We can have different objects that do similar things, but in their own
    * unique ways.
*/

const car1 = {
    move: function() {
        console.log('car is moving')
    }
}
const car2 = {
    move: function() {
        console.log('car is honking and moving')
    }
}
const cars = [car1, car2]

for(let i = 0; i < cars.length; i++) {
    cars[i].move()
}

/*
    * We created two toy cars that have same method (function) called 'move',
    * but they do different things when they move. We also created an array
    * of cars that contains both car1 and car2. We used a for loop to call the
    * 'move' method on each car in the array, even though they behave in different
    * ways
    *
    * In programming, polymorphism is important because it allows to write code
    * that can work with different kinds of objects that behave in different ways,
    * but still follow the same rules.
    * This makes it easier to write code that can handle different situations without
    * having to write a lot separate code for each situation
*/
