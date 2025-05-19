const navbarDiv = document.getElementById("nav-placeholder");
const footerDiv = document.getElementById("footer-placeholder");

async function loadTemplate(url, element) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
    const html = await res.text();
    element.innerHTML = html;
    console.log(`Loaded: ${url}`); // Debug log
  } catch (error) {
    console.error(error);
    // Fallback: Show error message in the placeholder
    element.innerHTML = `<p style="color: red;">Error loading ${url.split('/').pop()}</p>`;
  }
}

// Load templates
loadTemplate("../templates/navbar.html", navbarDiv);
loadTemplate("../templates/footer.html", footerDiv);