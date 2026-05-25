// salon.js
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productsGridSalon');
    if (!grid) return;
    
    productos.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${prod.img}" alt="${prod.nombre}" class="product-img">
            <div class="product-info">
                <div class="product-title">${prod.nombre}</div>
                <div class="product-desc">${prod.descripcion}</div>
                <div class="product-price">$${prod.precio.toLocaleString('es-CL')}</div>
            </div>
        `;
        grid.appendChild(card);
    });
});