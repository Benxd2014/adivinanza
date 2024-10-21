input.onButtonPressed(Button.A, function () {
    basic.showString("Aro")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # . .
        # . # . .
        # # . . .
        # . # . .
        # # # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Pelota")
})
