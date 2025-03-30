function carrgaComponente(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(`Erro ao carregar ${file}:`, error));
}

document.addEventListener("DOMContentLoaded", () => {
    carrgaComponente("header", "src/components/header/html/header.html");
    carrgaComponente("banner", "src/components/banner/html/banner.html");
    carrgaComponente("cards", "src/components/cards/html/cards.html");
});
