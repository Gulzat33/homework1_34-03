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

const tabContents= document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')


const hideTabContents = () => {
    tabContents.forEach((item)=> {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContents = (index = 0) => {
    tabContents[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                hideTabContents()
                showTabContents(tabIndex)
            }
        })
    }
}
const autoTabContentsSlide = (i = 0) =>{
    setInterval(() =>{
        i++
        if (i>tabContents.length -1) {
            i = 0
        }
        hideTabContents()
        showTabContents(i)
    }, 3000)
}
autoTabContentsSlide()
hideTabContents()
showTabContents()



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

//Homework6
//CARD SWITCHER


const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const cardBlock = document.querySelector(".card");

let count = 0;

btnNext.onclick = () => {
    count = (count % 200) + 1;
    fetchData(count);
}

btnPrev.onclick = () => {
    count = (count - 2 + 200) % 200 + 1;
    fetchData(count);
}

function fetchData(count) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            cardBlock.style.borderColor = data.completed ? 'green' : 'red';
            cardBlock.innerHTML = `<p>${data.title}</p>`;
            cardBlock.innerHTML += `<p style="color:${data.completed ? 'green' : 'red'}">${data.completed}</p>`;
            cardBlock.innerHTML += `<span>${data.id}</span>`;
        })
        .catch(error => console.error('Error:', error));
}

//  HW6.2
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Ошибка при выполнении запроса:', error));
//





//WEATHER

// const cityInput:Element = document.querySelector('.cityName')
// const citySpan:Element = document.querySelector('.city')
// const tempSpan:Element = document.querySelector('.temp')
// const searchButton:Element = document.querySelector('#search')
//
// const BAESE_URL='http://api.openweathermap.org'
// const API_KEY= 'e417df62e04d3d111abeab19cea714'


//query params- параметры запроса(API)
// const searchCity =()=>{
//     SearchButton.onclick() => {
//         fetch(`${BAESE_URL}data/2.5/weather?q=${cityInput.value()}&appid=${API_KEY}`)
//             .then (response: Response => reaponse.json())
//         .then(data => {
//             citySpan.innerHTML = data. name? data.name:'город не найден!'
//             tempSpan.innerHTML=Math.round(data.main.temp -273)+'&deg;C':'...'
//         })
//     }
// }
//
//
//
//
//
// searchCity()
//
//
// //optional chaining - орциональная цепочка  -?.
//
// const user:{name: string}={name: 'Nurdin'}
// console.log(user.address?.street)
//
// }