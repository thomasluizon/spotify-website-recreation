const profileAnchor = document.querySelector(".menu__button")
const profileMenu = document.querySelector(".menu__dropdown")

 document.addEventListener("click", (event) => {
     let ignoreClick = (profileMenu == event.target)

    if(!ignoreClick) {
        if(profileMenu.className.includes("open")) {
            profileMenu.className = "menu__dropdown"
        }
    } 
})

profileAnchor.addEventListener("click", (event) => {
    let ignoreClick = (profileMenu == event.target)
    if(!ignoreClick) {
        if(profileMenu.className.includes("open")) {
            profileMenu.className = "menu__dropdown"
        } else {
            setTimeout(() => {
                profileMenu.className += " open"
            }, 1)
        }
    }
})