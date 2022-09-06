input.onButtonPressed(Button.A, function () {
    music.playTone(988, music.beat(BeatFraction.Whole))
    basic.showNumber(input.lightLevel())
})
basic.showString("TERMOMETRO INTELIGENTE")
basic.forever(function () {
    if (input.temperature() < 25) {
        basic.showIcon(IconNames.Happy)
    } else if (input.temperature() > 25 && input.temperature() < 29) {
        basic.showNumber(input.temperature())
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
