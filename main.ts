let counter = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        counter += 1
    }
})
