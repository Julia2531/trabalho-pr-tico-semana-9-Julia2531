// B.1. Base de dados (JSON)
const data = {
    produtos: [
        { id: 1, nome: "iPhone 15", preco: 6500, categoria: "Celulares", imagem: "https://picsum.photos/200?random=1", descricao: "O mais novo smartphone da Apple.", emEstoque: true },
        { id: 2, nome: "MacBook Air M2", preco: 9800, categoria: "Notebooks", imagem: "https://picsum.photos/200?random=2", descricao: "Leve, potente e elegante.", emEstoque: true },
        { id: 3, nome: "Mouse Gamer RGB", preco: 150, categoria: "Acessórios", imagem: "https://picsum.photos/200?random=3", descricao: "Precisão absoluta nos seus jogos.", emEstoque: false },
        { id: 4, nome: "Monitor 144Hz", preco: 1200, categoria: "Games", imagem: "https://picsum.photos/200?random=4", descricao: "Fluidez máxima para gameplay.", emEstoque: true },
        { id: 5, nome: "Teclado Mecânico", preco: 350, categoria: "Acessórios", imagem: "https://picsum.photos/200?random=5", descricao: "Switches azuis de alta durabilidade.", emEstoque: true },
        { id: 6, nome: "Galaxy S23", preco: 4200, categoria: "Celulares", imagem: "https://picsum.photos/200?random=6", descricao: "A melhor câmera em um Android.", emEstoque: true },
        { id: 7, nome: "PlayStation 5", preco: 4500, categoria: "Games", imagem: "https://picsum.photos/200?random=7", descricao: "O futuro dos videogames.", emEstoque: true },
        { id: 8, nome: "Headset Pro", preco: 600, categoria: "Acessórios", imagem: "https://picsum.photos/200?random=8", descricao: "Som surround de alta fidelidade.", emEstoque: true }
    ]
};

// B.2. Seleção de elementos (DOM)
const productList = document.getElementById("product-list");
const productDetails = document.getElementById("product-details");
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const btnRender = document.getElementById("btnRender");

// B.3. Funções obrigatórias
function formatPrice(preco) {
    return `R$ ${preco.toFixed(2)}`;
}

function createProductCard(produto) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", produto.id);

    // Ajuste visual via style (B.3)
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

    // B.4. Eventos nos botões do card
    card.querySelector(".btn-details").addEventListener("click", () => showProductDetails(produto));
    card.querySelector(".btn-highlight").addEventListener("click", () => card.classList.toggle("highlight"));

    return card;
}

function renderProducts(produtosFiltrados) {
    productList.innerHTML = "";
    produtosFiltrados.forEach(p => {
        const card = createProductCard(p);
        productList.appendChild(card);
    });

    // B.5. Uso de querySelectorAll
    const allCards = document.querySelectorAll(".card");
    allCards.forEach(card => {
        console.log("ID Renderizado:", card.getAttribute("data-id"));
    });
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
            <p><strong>Categoria:</strong> ${produto.categoria}</p>
            <p><strong>Estoque:</strong> ${produto.emEstoque ? "✅ Disponível" : "❌ Indisponível"}</p>
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

// B.4. Eventos Principais
searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);
btnRender.addEventListener("click", () => renderProducts(data.produtos));

// Inicialização
renderCategories();
renderProducts(data.produtos);