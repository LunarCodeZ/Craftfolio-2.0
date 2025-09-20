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


// === Animations for aboutpage ===

// Skin
function animatedSkin() {
    document.getElementsByClassName("hide-skin").style.display = "None";
}

function unanimatedSkin() {
    document.getElementById("hide-skin1").style.display = "";
}


// Favorite Item
function animatedFavItem() {
    document.getElementById("favitemicon").style.width = "140px";
    document.getElementById("favitemicon").style.animation = "myfavitem 4s infinite";
}

function unanimatedFavItem() {
    document.getElementById("favitemicon").style.width = "100px";
    document.getElementById("favitemicon").style.animation = "";
}


/* Animation for skillpage */
function skillhover(skillParam) {
    skillImage = "skill-img" + skillParam;
    skillTitle = "skill-title" + skillParam;
    skillDescription = "skill-description" + skillParam;
    document.getElementById(skillImage).style.width = "120px";
    document.getElementById(skillImage).style.opacity = "100%";
    document.getElementById(skillTitle).style.fontSize = "30px";
    document.getElementById(skillDescription).style.fontSize = "18px";
}

function skillunhover(skillparam) {
    document.getElementById(skillImage).style.width = "80px";
    document.getElementById(skillImage).style.opacity = "45%";
    document.getElementById(skillTitle).style.fontSize = "25px";
    document.getElementById(skillDescription).style.fontSize = "16px";
}