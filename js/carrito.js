// carrito.js - Simplificado
let carrito = [];

function agregarAlCarrito(id, nombre, precio, comentario) {
    if (!comentario.trim()) comentario = "Sin comentario";
    carrito.push({ id, nombre, precio, comentario });
    actualizarInterfazCarrito();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarInterfazCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarInterfazCarrito();
}

function obtenerTotal() {
    return carrito.reduce((sum, item) => sum + item.precio, 0);
}

function actualizarInterfazCarrito() {
    const cartItemsDiv = document.getElementById('cartItems');
    const cartTotalSpan = document.getElementById('cartTotal');
    const cartCountSpan = document.getElementById('cartCount');
    
    if (!cartItemsDiv) return;
    
    if (carrito.length === 0) {
        cartItemsDiv.innerHTML = '<p class="empty-cart-msg">Aún no has agregado nada</p>';
        if (cartTotalSpan) cartTotalSpan.innerText = '$0';
        if (cartCountSpan) cartCountSpan.innerText = '0';
        return;
    }
    
    let html = '';
    carrito.forEach((item, idx) => {
        html += `
            <div class="cart-item">
                <div class="cart-item-name">${item.nombre}</div>
                <div class="cart-item-comment">${item.comentario}</div>
                <div class="cart-item-price">   $${item.precio.toLocaleString('es-CL')}</div>
                <button class="btn-remove-item" data-index="${idx}">Eliminar</button>
            </div>
        `;
    });
    cartItemsDiv.innerHTML = html;
    if (cartTotalSpan) cartTotalSpan.innerText = `$${obtenerTotal().toLocaleString('es-CL')}`;
    if (cartCountSpan) cartCountSpan.innerText = carrito.length;
    
    document.querySelectorAll('.btn-remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
            eliminarDelCarrito(parseInt(btn.dataset.index));
        });
    });
}