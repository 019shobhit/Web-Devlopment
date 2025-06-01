let x = document.getElementById("sho");

x.addEventListener("click", function () {
    x.innerHTML = "Kacchu"
    x.style.backgroundColor = "yellow"
})

let y = document.getElementById("vanshi");
y.addEventListener("mouseenter", function () {
    y.innerHTML = "Moti"
    y.style.backgroundColor = "green"
})
y.addEventListener("mouseleave", function () {
    y.innerHTML = "Vanshika"
    y.style.backgroundColor = "white"
})

