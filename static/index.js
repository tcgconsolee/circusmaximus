
let clicked = false;
document.querySelectorAll(".menu").forEach(menu => {
    menu.addEventListener('click', () => {
        if (clicked) {
            document.querySelector(".menuitem").style.animation = "scaledown 500ms forwards"
            clicked = false;
        } else {
            document.querySelector(".menuitem").style.animation = "scaleup 500ms forwards"
            clicked = true;
        }
    })
})