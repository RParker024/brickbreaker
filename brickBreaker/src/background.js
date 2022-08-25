export default class Background {
    constructor(game) {
        this.posistion = {
            x: 0,
            y: 0
        }
        this.width = game.gameWidth
        this.height = game.gameHeight
        this.radius = 50
    }

    draw(ctx) {
        ctx.fillStyle = 'lightskyblue'
        ctx.fillRect(this.posistion.x, this.posistion.y, this.width, this.height)
        ctx.beginPath();
        ctx.fillStyle = 'white';  
        ctx.arc(10, 100, this.radius, 0, 2 * Math.PI, false);
        ctx.arc(60, 110, this.radius - 10, 0, 2 * Math.PI, false)
        //ctx.arc(50, 115, this.radius - 10, 0, 2 * Math.PI, false)
        ctx.fill();
       
        ctx.beginPath()
        ctx.arc(200, 170, this.radius, 0, 2 * Math.PI, false);
        ctx.arc(250, 180, this.radius - 10, 0, 2 * Math.PI, false)
        ctx.arc(150, 175, this.radius - 10, 0, 2 * Math.PI, false)
        ctx.fill()
        
        ctx.beginPath()
        ctx.arc(400, 70, this.radius, 0, 2 * Math.PI, false);
        ctx.arc(450, 80, this.radius - 10, 0, 2 * Math.PI, false)
        ctx.arc(350, 75, this.radius - 10, 0, 2 * Math.PI, false)
        ctx.fill()

        ctx.beginPath()
        ctx.arc(550, 200, this.radius, 0, 2 * Math.PI, false);
        ctx.arc(600, 210, this.radius - 10, 0, 2 * Math.PI, false)
        ctx.arc(500, 205, this.radius - 10, 0, 2 * Math.PI, false)
        ctx.fill()

        ctx.beginPath()
        ctx.arc(780, 50, this.radius, 0, 2 * Math.PI, false);
        //ctx.arc(600, 210, this.radius - 10, 0, 2 * Math.PI, false)
        ctx.arc(730, 55, this.radius - 10, 0, 2 * Math.PI, false)
        ctx.fill()

        ctx.fillStyle = "green"
        ctx.fillRect(0, 590, this.width, 50)
    }
}