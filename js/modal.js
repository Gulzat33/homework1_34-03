//
// const footer=document.querySelector('.footer')
// const modal = document.querySelector('.modal')
// const modalTrigger = document.querySelector('#btn-get')
// const closeModalBtn = document.querySelector('.modal_close')
//
// const openModal = () => {
//     modal.style.display = 'block'
//     document.body.style.overflow = 'hidden'
// }
// const closeModal = () => {
//     modal.style.display = 'none'
//     document.body.style.overflow = ''
// }
// modalTrigger.onclick = () => openModal()
// closeModalBtn.onclick = () => closeModal()
// modal.onclick = (event) => {
//     if (event.target === modal || event.target === closeModalBtn) closeModal()
// }
//
// let modalOpened = false
// hideModal = () => {
//     openModal()
//     window.removeEventListener("scroll", footerScroll)
// }
//
// footerScroll = () => {
//     if (window.scrollY + window.innerHeight >= footer.offsetTop) {
//         autoModal()
//     }
// }
// const autoModal = () => {
//     if (!modalOpened) {
//         modalOpened = true
//         openModal()
//         window.removeEventListener("scroll", footerScroll)
//     }
// }
//
// window.addEventListener("scroll", footerScroll)
// setTimeout(autoModal, 10000)


//DOM - document object modal

// console.log(document)
// console.log(window.document)


//ES5

// const button=document.getElementById('btn3')
// const button=document.getElementsByClassName('btn')
// const button=document.getElementsByTagName('button')


//ES6

// const nutton=document.getSelection('btn')
// const nutton=document.getSelection('#btn')
// const nutton=document.getSelection('button')
// console.log(button)
// const buttons:NodeListOf<Element> =document.querySelectorAll('btn')
// const buttons:NodeListOf<Element> =document.querySelectorAll('button')


// ClassList
//
// const button:NodeListOf <HTMLButtonElement> =document.querySelectorAll('button')
// button[0].classList.add('red','green')
// button[0].classList.remove('red','green')
// console.log(button[0].classList.contains('red'))
// buttons.forEach (button : button)=> {
// button.onclic=(eventMouseEvent)=>{
//     if(event.target.classList.contains('red')){
//         event.target.classList.remove('red')
//     } else {
//         event.target.classList.add('red')
//
//     }
// }
// }
//
//
// const newButton:HTMLButtonElement=document.createElement('button')
// buttonsParent.append(newButton)


