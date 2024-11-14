const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
const paginationElement = document.querySelector("#pagination");

let slides = document.querySelectorAll(".slide");
let index = 0;

slides.forEach((slide, i) => {

    if (i == index) {
        paginationElement.innerHTML += `<div class="pag" data-id="${i}">
        <span id="dot"></span>
        </div>`
    } else {
        paginationElement.innerHTML += `<div class="pag" data-id="${i}"></div>`
    }

})

let allPag = document.querySelectorAll('.pag');

allPag.forEach(elem => {
    elem.addEventListener('click', (e) => {
        index = Number(e.target.dataset.id);

        allPag.forEach((el) => {
            el.innerHTML = ""
        })
        e.target.innerHTML = `<span id="dot"></span>`
        // console.log();

        showSlide();

    })
})

const showSlide = () => {

    slides.forEach((slide, i) => {
        if (index === i) {
            slide.style.opacity = 1;

        } else {
            slide.style.opacity = 0;
        }
    })

}

leftBtn.addEventListener('click', () => {

    if (index > 0) {
        index--;

    } else {
        index = slides.length - 1;
    }
    allPag.forEach(element => {


        if (index == element.dataset.id) {
            element.innerHTML = `<span id="dot"></span>`
        } else {
            element.innerHTML = "";
        }
    })
    showSlide();
})


rightBtn.addEventListener('click', () => {

    if (index < slides.length - 1) {
        index++;

    } else {
        index = 0;
    }


    allPag.forEach(element => {


        if (index == element.dataset.id) {
            element.innerHTML = `<span id="dot"></span>`
        } else {
            element.innerHTML = "";
        }
    })

    showSlide();



})

