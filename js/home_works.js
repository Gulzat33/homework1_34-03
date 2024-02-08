//Gmail checker


















//
const childBlock = document.querySelector(".child_block")

let posX = 0
let posY = 0

const moveBlock = () => {
    if (posX <= 440 && posY === 0) {
        posX += 16
        childBlock.style.left = `${posX}px`
        setTimeout(moveBlock, 25)
    }
}
moveBlock()