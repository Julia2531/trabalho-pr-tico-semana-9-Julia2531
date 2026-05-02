const data = {
    produtos: [
        { id: 1, nome: "iPhone 15", preco: 3099, categoria: "Celulares", imagem: "data:image/jpeg;base64,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", descricao: "O mais novo smartphone da Apple.", emEstoque: true },
        { id: 2, nome: "MacBook Air M2", preco: 6569, categoria: "Notebooks", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HNmTD7-1JS1_dRPfLphRkdUNZ1CBKRU6Bg&s", descricao: "Leve, potente e elegante.", emEstoque: true },
        { id: 3, nome: "Mouse Gamer RGB", preco: 150, categoria: "Acessórios", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZKLPL7iNzlZrkvMh_wtakmI5UZ-2_yc4lA&s", descricao: "Precisão absoluta nos seus jogos.", emEstoque: false },
        { id: 4, nome: "Monitor 144Hz", preco: 1200, categoria: "Games", imagem: "data:image/jpeg;base64,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", descricao: "Fluidez máxima para gameplay.", emEstoque: true },
        { id: 5, nome: "Teclado Mecânico", preco: 350, categoria: "Acessórios", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYauv92FlsoUWCpbaBjm49TILBEE2_p_tNaQ&s", descricao: "Switches azuis de alta durabilidade.", emEstoque: true },
        { id: 6, nome: "Galaxy S23", preco: 4200, categoria: "Celulares", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrHhSBZU1lgS2DM6rRXRjoUZaUIp5KHpqow&s", descricao: "A melhor câmera em um Android.", emEstoque: true },
        { id: 7, nome: "PlayStation 5", preco: 4500, categoria: "Games", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScLLG4Lu1jTvX4-63N6SCujPH2zcqKZHm8OA&s", descricao: "O futuro dos videogames.", emEstoque: true },
        { id: 8, nome: "Headset Pro", preco: 600, categoria: "Acessórios", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwpN9rnGTcMxYwOiCTig5S6GDYkKmNAWZJRg&s", descricao: "Som surround de alta fidelidade.", emEstoque: true }
    ]
};

const productList = document.getElementById("product-list");
const productDetails = document.getElementById("product-details");
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const btnRender = document.getElementById("btnRender");

function formatPrice(preco) {
    return `R$ ${preco.toFixed(2)}`;
}

function createProductCard(produto) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", produto.id);
    card.style.border = "1px solid #ddd";
    card.style.padding = "15px";

    card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3 class="card-title">${produto.nome}</h3>
        <p>${formatPrice(produto.preco)}</p>
        <span class="badge">${produto.categoria}</span>
        <div class="actions">
            <button class="btn-details">Ver detalhes</button>
            <button class="btn-highlight">Destacar</button>
        </div>
    `;

    card.querySelector(".btn-details").addEventListener("click", () => showProductDetails(produto));
    card.querySelector(".btn-highlight").addEventListener("click", () => card.classList.toggle("highlight"));

    return card;
}

function renderProducts(produtosFiltrados) {
    if (!productList) return;
    productList.innerHTML = "";
    produtosFiltrados.forEach(p => {
        productList.appendChild(createProductCard(p));
    });

    const allCards = document.querySelectorAll(".card");
    allCards.forEach(card => console.log("ID Renderizado:", card.getAttribute("data-id")));
}

function renderCategories() {
    const categorias = ["Todas", ...new Set(data.produtos.map(p => p.categoria))];
    categorySelect.innerHTML = "";
    categorias.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat;
        opt.innerText = cat;
        categorySelect.appendChild(opt);
    });
}

function showProductDetails(produto) {
    productDetails.innerHTML = `
        <div class="details-box">
            <h3>${produto.nome}</h3>
            <img src="${produto.imagem}" style="width: 100px">
            <p><strong>Preço:</strong> ${formatPrice(produto.preco)}</p>
            <p><strong>Estoque:</strong> ${produto.emEstoque ? "✅ Sim" : "❌ Não"}</p>
            <p><strong>Descrição:</strong> ${produto.descricao}</p>
        </div>
    `;
}

function filterProducts() {
    const termo = searchInput.value.toLowerCase();
    const categoria = categorySelect.value;
    const filtrados = data.produtos.filter(p => {
        const bateNome = p.nome.toLowerCase().includes(termo);
        const bateCategoria = categoria === "Todas" || p.categoria === categoria;
        return bateNome && bateCategoria;
    });
    renderProducts(filtrados);
}

searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);
btnRender.addEventListener("click", () => renderProducts(data.produtos));

renderCategories();
renderProducts(data.produtos);