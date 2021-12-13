let display = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
basic.forever(function () {
    display.show(grove.measureInCentimeters(DigitalPin.P0))
    basic.pause(100)
})
