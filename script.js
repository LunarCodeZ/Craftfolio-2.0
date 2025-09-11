var menuButton = 1;
var currentPage = 1;

function cycleButton() {
    menuButton += 1;

    if (menuButton === 1) {
        document.getElementById("navbar-menus").style.display = "none";
    } else {
        menuButton *= 0;
        document.getElementById("navbar-menus").style.display = "flex";
    }
}

function activePage() {
    if (currentPage === 1) {
        document.getElementById("demo").innerHTML = "Home";
    }
}

activePage();

/* Animation for aboutpage */

function animatedFavItem() {
    document.getElementById("favitemicon").style.width = "140px";
    document.getElementById("favitemicon").style.animation = "myfavitem 4s infinite";
}

function unanimatedFavItem() {
    document.getElementById("favitemicon").style.width = "100px";
    document.getElementById("favitemicon").style.animation = "";
}

/* Animation for skillpage */

var skillCounter = 0;