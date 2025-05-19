document.addEventListener("navbarLoaded", () => {
    const hamburgerMenuBtn = document.getElementById("hamburger");
    const mobileNavBar = document.getElementById("navbar-links");
    const mobilBg = document.getElementById("navbar-bg");
    hamburgerMenuBtn.addEventListener("click", () => {
        mobileNavBar.classList.toggle("hidden");
        mobilBg.classList.toggle("hidden");
    });
    if(window.matchMedia("(max-width: 900px)").matches){
        mobileNavBar.classList.toggle("hidden");        
        
    }
});


