let menu = document.querySelector(".menu");
document.querySelector(".other").addEventListener("click",function () {
    menu.classList.toggle("show");
})

let random = document.querySelector(".top-videos .list .name i")
random.addEventListener("click",function () {
    random.classList.toggle("active");
})