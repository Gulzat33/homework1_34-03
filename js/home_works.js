//workhome1

//Gmail checker

const gmailInput=document.querySelector("#gmail_input")
const gmailButton=document.querySelector("#gmail_button")
const gmailResult=document.querySelector("#gmail_result")

const regExp = /^[a-zA-Z0-9._%+-]+@gmail.com$/;


gmailButton.addEventListener('click',()=> {
    const inputText = gmailInput.value
    if (regExp.test(inputText)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML='NOT OK'
        gmailResult.style.color='red'
    }
})










// часть 2
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