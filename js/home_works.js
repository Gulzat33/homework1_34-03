//workhome1

//Gmail checker

// const gmailInput=document.querySelector("#gmail_input")
// const gmailButton=document.querySelector("#gmail_button")
// const gmailResult=document.querySelector("#gmail_result")
//
// const regExp = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
//
//
// gmailButton.addEventListener('click',()=> {
//     const inputText = gmailInput.value
//     if (regExp.test(inputText)) {
//         gmailResult.innerHTML = 'OK'
//         gmailResult.style.color = 'green'
//     } else {
//         gmailResult.innerHTML='NOT OK'
//         gmailResult.style.color='red'
//     }
// })









//
// // часть 2
const childBlock = document.querySelector(".child_block")

let posX = 0
let posY = 0

const moveBlock = () => {
    if (posX <= 440 && posY === 0) {
        posX += 16
        childBlock.style.left = `${posX}px`
        setTimeout(moveBlock, 25)
    } else if (posX >= 444 && posY <= 440) {
        posY += 16
        childBlock.style.top = `${posY}px`
        setTimeout(moveBlock, 25)
    } else if (posX > 0 && posY >=440) {
        posX -= 16
        childBlock.style.left = `${posX}px`
        setTimeout(moveBlock, 25)
    }
    else {
        posY -= 16
        childBlock.style.top = `${posY}px`
        setTimeout(moveBlock, 25)
    }
}
moveBlock()


//homework2 // time

const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')


let newValue = 0;
let interval;
let isRunning = false;


startBtn.addEventListener('click', ()=>{
    if (!isRunning) {
        toIncrease();
        document.querySelector('.interval').style.color = 'orange'
        isRunning = true
    }
})
stopBtn.addEventListener('click', ()=>{
    toStop();
})
resetBtn.addEventListener('click', ()=>{
    toReset()
    document.querySelector('.interval').style.color = 'yellow'
})
const toIncrease = () =>{
    toStop()
    interval = setInterval(function (){
        newValue++
        document.querySelector('.interval').innerHTML = newValue;
    }, 1000)
}
const toStop = ()=>{
    clearInterval(interval)
    isRunning = false
}
const toReset = () =>{
    clearInterval(interval)
    newValue = 0;
    document.querySelector('.interval').innerHTML = newValue;
}

//homework 4 slider


// document.addEventListener("DOMContentLoaded", function() {
//     let slides = document.querySelectorAll(".slide");
//     let currentSlide = 0;
//
//     function nextSlide() {
//         slides[currentSlide].classList.remove("active");
//         currentSlide = (currentSlide + 1) % slides.length;
//         slides[currentSlide].classList.add("active");
//     }
//
//     setInterval(nextSlide, 3000);
// });
//
//
