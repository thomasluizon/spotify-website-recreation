const drawerAnchor = document.querySelector(".burger")
const drawer = document.querySelector(".drawer")
const body = document.querySelector("body")
const backgroundOverlay = document.querySelector(".overlay")
const drawerItems = document.querySelectorAll(".slide-binder")

function bindDrawerSlide() {
    drawerItems.forEach(e => {
        e.className += " slide-left"
    })
}

function unbindDrawerSlide() {
    drawerItems.forEach(e => {
        e.className = e.className.replace(" slide-left", "")
    })
}

function closeDrawer() {
    drawerAnchor.className = "burger"
    drawer.className= "drawer"
    document.body.className = ""
    backgroundOverlay.style.display = "none"
    unbindDrawerSlide()
}

function openDrawer() {
    drawerAnchor.className += " x"
    drawer.className += " flex"
    document.body.className += " scroll-disable"
    backgroundOverlay.style.display = "block"
    bindDrawerSlide()
}

function hideDrawer() {
    drawer.className += " hidden"
    document.body.className = ""
    backgroundOverlay.style.display = "none"
    unbindDrawerSlide()
}

function unhideDrawer() {
    drawer.className = drawer.className.replace("hidden","")
    document.body.className += " scroll-disable"
    backgroundOverlay.style.display = "block"
    bindDrawerSlide()
}

document.addEventListener("click", (e) => {
    let halfSize = window.innerWidth - 447;

    if(e.pageX <= halfSize && !drawer.className.includes("hidden"))  {
            closeDrawer()
    }
})

drawerAnchor.addEventListener("click", () => {
    if(drawerAnchor.className.includes("x")) {
        closeDrawer()
    } else {
        openDrawer()
    }
})

const closeDrawerMedia = window.matchMedia("(min-width: 992px)")

window.addEventListener("resize", () => {
    if(drawerAnchor.className.includes("x") && closeDrawerMedia.matches){
        if(!drawer.className.includes("hidden")){
            hideDrawer()
        }
    } else {
        if(drawer.className.includes("hidden")){
            unhideDrawer()
        }
    }
})