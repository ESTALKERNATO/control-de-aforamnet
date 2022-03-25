input.onButtonPressed(Button.A, function () {
    persones += 1
    basic.showNumber(persones)
})
input.onGesture(Gesture.Shake, function () {
    persones = 0
    basic.showNumber(persones)
})
input.onButtonPressed(Button.B, function () {
    if (persones > 0) {
        persones += -1
        basic.showNumber(persones)
    }
})
let persones = 0
persones = 0
basic.forever(function () {
    if (persones > 5) {
        basic.showString("aforament complet")
    } else {
        basic.showNumber(persones)
    }
})
