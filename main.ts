input.onButtonPressed(Button.A, function () {
    crono = 0
})
input.onButtonPressed(Button.AB, function () {
    for (let tiempo of tiempos) {
        basic.showNumber(tiempo)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    tiempos.push(crono)
})
let tiempos: number[] = []
let crono = 0
crono = 0
tiempos = []
basic.forever(function () {
    basic.pause(1000)
    crono += 1
})
