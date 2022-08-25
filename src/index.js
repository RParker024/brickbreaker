import Game from '/src/game.js'
import Background from './background.js'
import Winner from './winner.js'

let canvas = document.getElementById("gameScreen")
let ctx = canvas.getContext("2d")

const GAME_WIDTH = 800
const GAME_HEIGHT = 600



let game = new Game(GAME_WIDTH, GAME_HEIGHT)
let background = new Background(game)
let winner = new Winner(game)
let lastTime = 0

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime
    lastTime = timestamp

    
    background.draw(ctx)
    game.update(deltaTime)
    game.draw(ctx)
    if(game.currentLevel === 3) {
        winner.draw(ctx)}

    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)