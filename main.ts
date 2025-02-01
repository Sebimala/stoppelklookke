let start = 0
let elapsed = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(elapsed)
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    basic.showIcon(IconNames.No)
    basic.pause(100)
    basic.clearScreen()
})
