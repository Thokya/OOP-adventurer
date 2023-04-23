/*
    * Abstraction:
    * The process of only showing the necessary details to the user and hiding
    * the other details in the background
    *
    * Consider using a remote control to turn on your TV without having to know
    * exactly how the TV works inside.
    *
    * In programming, abstraction means hiding some details and only showing the
    * most importance parts of a program. We can use abstraction to make our code
    * easier to understand and use.
*/

class Player {
    constructor(name) {
        this.name = name
        this.score = 0
    }

    increaseScore() {
        this.score++
    }
}

const player1 = new Player('Bob')

console.log(player1.name)
console.log(player1.score)

player1.increaseScore()

console.log(player1.score)
