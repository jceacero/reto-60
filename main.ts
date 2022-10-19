input.onButtonPressed(Button.A, function () {
    jugador.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    jugador.change(LedSpriteProperty.X, 1)
})
let yCoche = 0
let jugador: game.LedSprite = null
jugador = game.createSprite(2, 4)
let coche = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    while (!(coche.isTouching(jugador))) {
        coche.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        yCoche += 1
        if (yCoche == 4 && !(coche.isTouching(jugador))) {
            coche.delete()
            yCoche = 0
            coche = game.createSprite(randint(0, 4), 0)
        }
    }
    game.gameOver()
})
