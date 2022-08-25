export default class Winner {
    constructor(game) {
        this.position = {
            x: 0,
            y: 0
        }
        this.width = game.gameWidth
        this.height = game.gameHeight
    }

    draw(ctx) {
        
            ctx.rect(0, 0, this.width, this.height)
            ctx.fillStyle = 'rgba(0, 100, 0, 1)'
            ctx.fill()

            ctx.font = '50px Cursive'
            ctx.fillStyle = 'white'
            ctx.textAlign = 'center'
            ctx.fillText('YOU WIN!!!', this.width / 2, this.height / 2)
        

        /*ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        ctx.fillStyle = 'green'
        ctx.fill()

        ctx.font = '50px Cursive'
        ctx.fillStyle = 'white'
        ctx.textAlign = 'center'
        ctx.fillText('YOU WIN!!!', this.width / 2, this.height / 2)*/
    }
}