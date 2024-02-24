// //PHONE  CHECKER
//  const phoneInput = document.querySelector("input")
//  const phoneButton = document.querySelector("button")
//  const phoneResult = document.querySelector("result")
//
// const regExp =/^\+966[2579]\d {2}\d{2}-\d{2}$/
//
// phoneButton.addEventListener('click',() =>{
//  if (regExp.test(phoneInput)){
//   phoneResult.innerHTML="OK"
//   phoneResult.style.color="green"
//  } else {
//   phoneResult.innerHTML="NO OK"
//   phoneResult.style.color="red"
//  }
// })





//Основы осинхронности

//Синхронный код
// console.log(1)
// console.log(2)
// console.log(3)
//
// //асинхронный код
// setTimeout(()=>{
//  console.log(1)
// },1000)
//
// console.log(2)


// const logger =(messege) => {
//   console.log(messege)
// }
//
// console.log('loading...')
// setTimeout(() =>{
//   logger(messegeFromPrompt)
// },2500)
//
//
// setTimeout(()=>{
//  console.log('Hi')
// })
//
//
// const interval =setInterval(() =>{
//   console.log('Hello')
// },1000)
// setTimeout(() =>{
//  clearInterval(interval)
// },5000)
// const secondsBlock=document.querySelector('p')
// const button=document.querySelector('button')
// let seconds=0
// const interval= (()=>{
//  seconds++
//  // console,logger(seconds)
//  document.write(interval)
// },1000)
//
// button.addEventListener('clik',()=>{
//  clearInterval(interval)
// })



// EventLoop
//

//classList

// const buttons =document.querySelector('button')
// //buttonbutton(0).classList.add('red','green')
// //button(0).classList.add('red','green')
// const buttons = document.querySelector('button')
//
// const buttons = document.querySelector('btnblok')
//
//
//
//
//
//
//
// //делигирование событий
// const buttons = document.querySelector('btn-bloск')
// const buttons = document.querySelector('button')
//
//
//
// buttonsParent.onclick =('event') =>{
//  if (event.target.tegName)
// }


 // Tsb Silver

// const tabContents= document.querySelectorAll('.tab_content_block')
// const tabs = document.querySelectorAll('.tab_content_item')
// const tabsParent = document.querySelector('.tab_content_items')
//
//
// const hideTabContents = () => {
//     tabContents.forEach((item)=> {
//         item.style.display = 'none'
//     })
//     tabs.forEach((item) => {
//         item.classList.remove('tab_content_item_active')
//     })
// }

// const showTabContents = (index = 0) => {
//     tabContents[index].style.display = 'block'
//     tabs[index].classList.add('tab_content_item_active')
// }
//
// tabsParent.onclick = (event) => {
//     if (event.target.classList.contains('tab_content_item')) {
//         tabs.forEach((tabItem, tabIndex) => {
//             if (event.target === tabItem) {
//                 hideTabContents()
//                 showTabContents(tabIndex)
//             }
//         })
//     }
// }
// const autoTabContentsSlide = (i = 0) =>{
//     setInterval(() =>{
//         i++
//         if (i>tabContents.length -1) {
//             i = 0
//         }
//         hideTabContents()
//         showTabContents(i)
//     }, 3000)
// }
// autoTabContentsSlide()
// hideTabContents()
// showTabContents()



// HomeWork5
// convertor


const somInput= document.querySelector('#som')
const usdInput= document.querySelector('#usd')
const eurInput= document.querySelector('#eur')

const convertor =(element, targetElement, current)=>{
    element.oninput=()=>{
        const request = new XMLHttpRequest()
        request.open("GET", "../data/convertor.json")
        request.setRequestHeader("Content-Type", "application/json")
        request.send()

        request.onload=()=>{
            if (request.status === 200) {
                const response = JSON.parse(request.responseText)
                if (current === 'som') {
                    targetElement.value = (element.value / response.usd).toFixed(2)
                    eurInput.value = (element.value / response.eur).toFixed(2)
                } else if (current === 'usd') {
                    targetElement.value = (element.value * response.usd).toFixed(2)
                    eurInput.value = (element.value * response.usd / response.eur).toFixed(2)
                } else if (current === 'eur') {
                    targetElement.value = (element.value * response.eur).toFixed(2)
                    usdInput.value = (element.value * response.eur / response.usd).toFixed(2)
                }
                if (element.value === ''|| targetElement.value === '0') {
                    eurInput.value = '';
                    usdInput.value = '';
                }
            }

        }
    }
}

convertor(somInput,usdInput,"som")
convertor(usdInput,somInput,"usd")
convertor(eurInput,somInput,"eur")