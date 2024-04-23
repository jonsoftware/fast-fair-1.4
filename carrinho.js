let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'LARANJA ',
        image: 'laranja.jpg',
        price: 5.23
    },
    {
        id: 2,
        name: 'BANANA',
        image: 'banana.jpg',
        price: 4.78
    },
    {
        id: 3,
        name: 'MELANCIA',
        image: 'melancia.jpg',
        price: 5.21
    },
    {
        id: 4,
        name: 'MANGA',
        image: 'manga.jpeg',
        price: 7.78
    },
    {
        id: 5,
        name: 'UVA',
        image: 'uva.jpg',
        price: 17.87
    },
    {
        id: 6,
        name: 'MACA',
        image: 'maca.jpeg',
        price: 15.34
    },
    {
        id: 7,
        name: 'FRUTAS VERMELHAS',
        image: 'frutas vermelhas.jpg',
        price: 17.34
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="imagens/${value.image}">

            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">adicionar ao carrinho</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="imagens/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}





// função pesquisar produto








function searchItems() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm.length >= 3) {
        const searchResults = document.getElementById("searchResults");
        searchResults.innerHTML = ""; // Limpa os resultados anteriores

        products.forEach(function (product) {
            const productName = product.name.toLowerCase(); // Obtém o nome do produto em letras minúsculas

            if (productName.includes(searchTerm)) { // Verifica se o termo de pesquisa está incluído no nome do produto
                const listItem = document.createElement("li");
                const productLink = document.createElement("a");
                productLink.textContent = productName;
                productLink.href = "#"; // Defina o href como "#" para não recarregar a página ao clicar
                productLink.dataset.productId = product.id; // Armazena o ID do produto como um atributo de dados
                listItem.appendChild(productLink);
                searchResults.appendChild(listItem);
            }
        });

        // Adiciona um evento de clique aos links de produto na lista de resultados de pesquisa
        const productLinks = document.querySelectorAll("#searchResults a");
        productLinks.forEach(function(link) {
            link.addEventListener("click", function(event) {
                event.preventDefault(); // Impede o comportamento padrão do link
                const productId = parseInt(link.dataset.productId);
                const productElement = document.getElementById("produto-" + productId);
                if (productElement) {
                    productElement.scrollIntoView({ behavior: 'smooth' }); // Rola até o elemento suavemente
                }
            });
        });
    } else {
        const searchResults = document.getElementById("searchResults");
        searchResults.innerHTML = ""; // Limpa os resultados se o termo de pesquisa for menor que três caracteres
    }
}

// Adiciona um evento keyup ao campo de pesquisa
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", searchItems);


function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        // Adicione um ID único para cada produto usando o ID do produto
        newDiv.id = `produto-${value.id}`;
        newDiv.innerHTML = `
        <img src="imagens/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">adicionar ao carrinho</button>`;
        list.appendChild(newDiv);
    })
}





 // Função para rolar ao topo da página


 // Função para rolar ao topo da página
 function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Adiciona um observador de eventos de rolagem para mostrar ou ocultar o botão "voltar ao topo"
window.addEventListener('scroll', function() {
    var btnTopo = document.getElementById('btnTopo');
    if (window.pageYOffset > 100) { // Exibe o botão quando a página é rolada para baixo
        btnTopo.classList.add('mostrar-btn');
    } else { // Oculta o botão quando a página é rolada para o topo
        btnTopo.classList.remove('mostrar-btn');
    }
});