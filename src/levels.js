import Brick from './brick.js'

export function buildLevel(game, level) {
    let bricks = []
    

    Array.from(level).forEach((row, rowIndex) => {
        
        Array.from(row).forEach((brick, brickIndex) => {
            if (brick === 1) {
                let position = {
                    x: 80 * brickIndex,
                    y: 75 + 30 * rowIndex
                }
                bricks.push(new Brick(game, position))
            }
        })
    });

    return bricks
}

export const level1 = [
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    //[0,0,0,0,0,0,0,1,0,0]    
]

export const level2 = [
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1]  
    //[0,0,0,0,0,0,0,1,0,0]   
]

export const level3 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //[0,0,0,0,0,0,0,1,0,0] 
]

export const level4 = [
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
]