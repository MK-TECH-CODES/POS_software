function loadPage(page) {
  fetch(`Pages/${page}.html`)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;
    })
    .catch((err) => {
      console.error(`Error loading ${page}:`, err);
      document.getElementById("content").innerHTML = "<h2>Page not found.</h2>";
    });
}

// Load default page
window.onload = () => loadPage("home");
