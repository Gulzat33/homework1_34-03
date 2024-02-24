// // RANDOM COLOR GENERATOR
//
// const buttonsColor = document.querySelectorAll('.btn-color')
// const javaScript = document.querySelector('#js-color')
//
// const generateRandomColor = () => {
//     const hexCodes = '0123456789ABCDEF'
//     let color = ''
//     for (let i = 0; i < 6; i++) {
//         color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
//     }
//     return '#' + color
// }
//
// const setRandomColors = () => {
//     buttonsColor.forEach((buttonColor) => {
//         buttonColor.innerHTML = generateRandomColor()
//         buttonColor.onclick = (event) => {
//             javaScript.style.color = event.target.innerHTML
//         }
//     })
// }
//
// window.onload = () => setRandomColors()
// window.onkeydown = (event) => {
//     if (event.code.toLowerCase() === 'space') {
//         event.preventDefault()
//         setRandomColors()
//     }
// }
//
// // SLIDER BLOCK
//
// const slides = document.querySelectorAll('.slide')
// const next = document.querySelector('#next')
// const prev = document.querySelector('#prev')
// let index = 0
//
// const hideSlide = () => {
//     slides.forEach((slide) => {
//         slide.style.opacity = 0
//         slide.classList.remove('active_slide')
//     })
// }
// const showSlide = (i = 0) => {
//     slides[i].style.opacity = 1
//     slides[i].classList.add('active_slide')
// }
//
// hideSlide()
// showSlide(index)
//
//
// const autoSlider = (i = 0) => {
//     setInterval(() => {
//         i++
//         if (i > slides.length - 1) {
//             i = 0
//         }
//         hideSlide()
//         showSlide(i)
//     }, 10000)
// }
//
// next.onclick = () => {
//     index < slides.length - 1 ? index++ : index = 0
//     hideSlide()
//     showSlide(index)
// }
//
// prev.onclick = () => {
//     index > 0 ? index-- : index = slides.length - 1
//     hideSlide()
//     showSlide(index)
// }
//
// autoSlider(index)




//JSON
//
// 'name': 'Nurdin',
//     "age": 20,
//     "boolean": [false,true],
//     "none": null,
//     "inderObject": {
//     float
// }
// }





//AJAX
//XML
//XHR XTL Http Reguest
// Http HyperTextTransferProtocol
// HTTPS

// const button =document.querySelector('#btn')
// button.onclick() => {
//     const reguest:XMLHttpRequest = new XMLHttpRequest() //1.создание запроса
//     reguest.open("GET","data.json") // обявление
//     reguest.setRequestHeader("content-type","")
//     reguest.send()  //отправка запроса
//     reguest.addEventListener('Load',=>{
//         const data=JSON.parse(reguest.response)
//
//         document.querySelector('name').innerHTML=data.name
//         document.querySelector('age').innerHTML=data.age
//     })
// }


// Создаем JSON объект с данными
var jsonData = {
    "name": "John",
    "age": 30,
    "city": "New York"
};

// Преобразуем JSON объект в строку
var jsonString = JSON.stringify(jsonData);

// Создаем новый XMLHttpRequest объект
var xhr = new XMLHttpRequest();

// Указываем метод запроса и URL
xhr.open("GET", "example.json", true);

// Устанавливаем заголовок для отправки JSON данных
xhr.setRequestHeader("Content-Type", "application/json");

// Отправляем запрос
xhr.send(jsonString);

// Ожидаем ответа от сервера
xhr.onload = function() {
    if (xhr.status == 200) {
        // Парсим полученный JSON ответ
        var response = JSON.parse(xhr.responseText);
        // Выводим данные в консоль
        console.log(response);
    } else {
        console.error("Ошибка при загрузке файла:", xhr.statusText);
    }
};

// Обработка ошибок сети
xhr.onerror = function() {
    console.error("Сетевая ошибка при загрузке файла.");
};