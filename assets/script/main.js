const menu = document.querySelector('.menu')
document.onscroll = function() {
    const scrollLength = window.scrollY
    if (scrollLength > 200) {
        menu.classList.add("sticky")
    }
    if (scrollLength === 0){
        menu.classList.remove("sticky")
    }
}
console.log(menu)