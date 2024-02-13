//PHONE  CHECKER
 const phoneInput = document.querySelector("input")
 const phoneButton = document.querySelector("button")
 const phoneResult = document.querySelector("result")

const regExp =/^\+966[2579]\d {2}\d{2}-\d{2}$/

phoneButton.addEventListener('click',() =>{
 if (regExp.test(phoneInput)){
  phoneResult.innerHTML="OK"
  phoneResult.style.color="green"
 } else {
  phoneResult.innerHTML="NO OK"
  phoneResult.style.color="red"
 }
})





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



Event Loopффф
//Соартголдтьортпрпои
