const navbarDiv = document.getElementById("nav-placeholder");
const footerDiv = document.getElementById("footer-placeholder");

async function loadTemplate(url, element) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
    const html = await res.text();
    element.innerHTML = html;
    console.log(`Loaded: ${url}`); // Debug log
    return 0;
  } catch (error) {
    console.error(error);
    // Fallback: Show error message in the placeholder
    element.innerHTML = `<p style="color: red;">Error loading ${url.split('/').pop()}</p>`;
    return 1;
  }
}

// Main function to load templates and dispatch event
async function main() {
  const navResult = await loadTemplate("../templates/navbar.html", navbarDiv);
  if (navResult === 0) {
    document.dispatchEvent(new Event("navbarLoaded"));
  }
  await loadTemplate("../templates/footer.html", footerDiv);
}

main();


