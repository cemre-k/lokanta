const navbarDiv = document.getElementById("nav-placeholder")
const footerDiv = document.getElementById("footer-placeholder")

async function navbarLoad() {
    const res  = await fetch("../templates/navbar.html");
    const html = await res.text();
    navbarDiv.innerHTML=  html;
    document.dispatchEvent(new Event("navbarLoaded"));
}

async function footerLoad() {
    const res  = await fetch("../templates/footer.html");
    const html = await res.text();
    footerDiv.innerHTML=  html;
}



navbarLoad();
footerLoad();