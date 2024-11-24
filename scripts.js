// Función para abrir el modal con la información del producto
function openModal(product) {
    const modal = document.getElementById('product-modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');
    const grainDetails = document.getElementById('modal-grain-details');
    const roast = document.getElementById('modal-roast');
    const rating = document.getElementById('modal-rating');
    const image = document.getElementById('modal-image');

    // Cambiar contenido según el producto
    if (product === 'product1') {
        title.innerText = 'Café Brasil 250g';
        description.innerText = 'Café de tueste medio con notas de cacao y nuez.';
        grainDetails.innerText = 'Grano: Arábica';
        roast.innerText = 'Tueste: Medio';
        rating.innerText = 'Puntaje: ★★★★☆';
        image.src = 'cafe prueba.svg';
    } else if (product === 'product2') {
        title.innerText = 'Café Brasil 500g';
        description.innerText = 'Café 100% orgánico, ideal para los paladares más exigentes.';
        grainDetails.innerText = 'Grano: Arábica';
        roast.innerText = 'Tueste: Oscuro';
        rating.innerText = 'Puntaje: ★★★★★';
        image.src = 'cafe prueba.svg';
    }

    // Mostrar el modal
    modal.style.display = 'flex';
    setTimeout(() => modal.style.opacity = 1, 10); // Retardo para que la animación se vea bien
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.opacity = 0;
    setTimeout(() => modal.style.display = 'none', 300); // Desaparece después de la animación
}

// Función para filtros en la tienda
document.getElementById('country-filter').addEventListener('change', filterProducts);
document.getElementById('roast-filter').addEventListener('change', filterProducts);

function filterProducts() {
    const country = document.getElementById('country-filter').value;
    const roast = document.getElementById('roast-filter').value;
    const products = document.querySelectorAll('.shop-products .product-item');
    products.forEach(product => {
        const productCountry = product.getAttribute('data-country');
        const productRoast = product.getAttribute('data-roast');
        if ((country === 'all' || country === productCountry) &&
            (roast === 'all' || roast === productRoast)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Renderizar productos en la tienda
function renderShopProducts() {
    const shopProducts = [
        { id: 'shop1', title: 'Café Colombia 250g', country: 'Colombia', roast: 'medio', price: '€6.99', image: 'cafe_colombia.svg' },
        { id: 'shop2', title: 'Café Etiopía 500g', country: 'Etiopía', roast: 'ligero', price: '€12.50', image: 'cafe_etiopia.svg' }
    ];
    const shopProductsContainer = document.querySelector('.shop-products');
    shopProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.setAttribute('data-country', product.country);
        productElement.setAttribute('data-roast', product.roast);
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="price">${product.price}</p>
        `;
        shopProductsContainer.appendChild(productElement);
    });
}
renderShopProducts();
