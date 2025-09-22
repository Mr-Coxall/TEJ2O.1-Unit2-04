/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr Coxall
 * Created on: Sep 2025
 * This program simulates a 6 sided dice
*/

// our variable for a random number
let randomNumber: number
const someName: string = "Mr Coxall"

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// shows sad face
input.onButtonPressed(Button.A, function() {
    randomNumber = randint(1, 6)
    basic.showNumber(randomNumber)
})
