basic.forever(function () {
    if (input.temperature() >= 19) {
        basic.showString("" + (input.temperature()))
    } else {
        for (let index = 0; index < 20; index++) {
            basic.showString("" + (input.temperature()))
            basic.showIcon(IconNames.Sword)
            basic.pause(500)
            basic.clearScreen()
        }
    }
    basic.pause(5000)
})
