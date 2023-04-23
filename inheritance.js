/*
    * Inheritance:
    * Inheritance is mechanism where you can derive a class from another class
    * for a hierarchy of classes that share a set of attributes and methods.
    *
    * Inheritance is like a getting a special toy from your mom that used to
    * belong to your older sibling.
    * You get to play with the toy, and it's just like the one your sibling had,
    * but it's also a little bit different and belongs to you now.
    *
    * In programming, inheritance means that we can make a new 'toy' (an object)
    * that is based on another 'toy' (another object).
    * We can take the properties and abilites of the old toy and add new ones to make
    * new toy
*/

const car1 = {
    forwards: function() {
        console.log('car moves forward')
    },
    backwards: function() {
        console.log('car moves backwards')
    }
}

const car2 = Object.create(car1)

car2.turnLeft = function() {
    console.log('car turns left')
}
car2.turnRight = function() {
    console.log('car turns right')
}

car2.forwards() // Outputs: 'car moves forwards'
car2.turnLeft() // Outputs: 'car turns left'
