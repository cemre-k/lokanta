document.addEventListener("navbarLoaded", () => {
    const hamburgerMenuBtn = document.getElementById("hamburger");
    const mobileNavBar = document.getElementById("navbar-links");
    const mobilBg = document.getElementById("navbar-bg");
    const mobileQuery = window.matchMedia("(max-width: 1200px)");

    hamburgerMenuBtn.addEventListener("click", () => {
        mobileNavBar.classList.toggle("hidden");
        mobilBg.classList.toggle("hidden");
        
    });

    function updateNavVisibility() {
        if (mobileQuery.matches) {
            // On mobile: hide nav by default
            mobileNavBar.classList.add("hidden");
            mobilBg.classList.add("hidden");
        } else {
            // On desktop: always show nav
            mobileNavBar.classList.remove("hidden");
            mobilBg.classList.remove("hidden");
        }
    }
    updateNavVisibility();
    mobileQuery.addEventListener("change",updateNavVisibility);
});


