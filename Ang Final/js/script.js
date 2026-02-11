function toggleNavbar() {
    var navbarMenu = document.getElementById("navbarMenu");
    if (navbarMenu.classList.contains("show")) {
        navbarMenu.classList.remove("show");
    } else {
        navbarMenu.classList.add("show");
    }

    var open = document.getElementById("open");
    if (open.classList.contains("phone-nav")) {
        open.classList.remove("phone-nav");
        open.classList.add("hidden");
    } else {
        open.classList.remove("hidden");
        open.classList.add("phone-nav");
    }

    var close = document.getElementById("close");
    if (open.classList.contains("hidden")) {
        close.classList.remove("hidden");
        close.classList.add("close");
    } else {
        close.classList.remove("close");
        close.classList.add("hidden");
    }
}

function toggleGuide() {
    var main = document.getElementById("main");
    if (main.classList.contains("main")) {
        main.classList.remove("main");
        main.classList.add("hidden");
    } else {
        main.classList.remove("hidden");
        main.classList.add("main");
    }

    var guide = document.getElementById("guide");
    if (guide.classList.contains("hidden")) {
        guide.classList.remove("hidden");
        guide.classList.add("nav-guide");
    } else {
        guide.classList.remove("nav-guide");
        guide.classList.add("hidden");
    }
}