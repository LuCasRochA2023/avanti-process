function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(`Erro ao carregar ${file}:`, error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "src/components/header/html/header.html");
    loadComponent("banner", "src/components/banner/html/banner.html");
    loadComponent("cards", "src/components/cards/html/cards.html");
    loadComponent("cards-2", "src/components/cards/html/cards.html");
    loadComponent("mugFirist", "src/components/mugFirist/html/mugFirist.html");
    loadComponent("mugFirist-2", "src/components/mugFirist/html/mugFirist.html");
    loadComponent("mugSecond", "src/components/mugSecond/html/mugSecond.html");
    loadComponent("mugSecond-2", "src/components/mugSecond/html/mugSecond.html");
    loadComponent("second-banner", "src/components/secondBanner/html/secondBanner.html");
    loadComponent("newsletter", "src/components/newsletter/html/newsletter.html");
    loadComponent("footer", "src/components/footer/html/footer.html");

    
});
