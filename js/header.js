const menuIcon = document.getElementById("menuIcon")
const menuNavbar = document.getElementById("menuNavbar")

menuIcon.addEventListener("click", () => {
    if (getComputedStyle(menuNavbar, null).display === "none") {
        menuNavbar.style.display = "block"
    } else {
        menuNavbar.style.display = "none"
    }
})
