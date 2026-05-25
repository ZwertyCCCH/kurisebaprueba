// main.js - Versión corregida con agrupación por categorías
(function() {
    'use strict';
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', iniciarApp);
    } else {
        iniciarApp();
    }
    
    function iniciarApp() {
        console.log('App iniciada');
        configurarTabs();
        renderizarCategorias();
        configurarEventosCarrito();
        configurarModal();
    }
    
    // Configurar tabs de navegación (SIN mantener active)
    function configurarTabs() {
        const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Obtener categoría
                const category = this.dataset.category;
                
                // Scroll a la categoría
                const section = document.getElementById(`category-${category}`);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                
                // NOTA: NO se agrega la clase 'active' a ningún botón
                // Los botones mantienen su estilo normal
            });
        });
    }
    
    // Renderizar todas las categorías agrupadas
    function renderizarCategorias() {
        const grid = document.getElementById('productsGrid');
        if (!grid) {
            console.error('No se encuentra productsGrid');
            return;
        }
        
        if (typeof productos === 'undefined') {
            grid.innerHTML = '<p style="color: #FF6B35; text-align: center;">Error: No se cargaron los productos</p>';
            return;
        }
        
        grid.innerHTML = '';
        
        // Definir el orden de las categorías
        const categoriasOrden = ['promociones', 'individuales', 'aperitivos', 'peruano', 'extras', 'bebestibles'];
        const titulosCategorias = {
            promociones: '🍣 Promociones',
            individuales: '🥢 Gohan y Sushi Burguers',
            aperitivos: '🍱 Aperitivos',
            peruano: '🇵🇪 Tradicional Peruano',
            extras: '➕ Salsas Adicionales',
            bebestibles: '🥤 Bebestibles'
        };
        
        // Recorrer cada categoría en orden
        categoriasOrden.forEach(cat => {
            // Verificar si la categoría existe y tiene productos
            if (productos[cat] && productos[cat].length > 0) {
                // Crear sección para esta categoría
                const section = document.createElement('div');
                section.className = 'category-section';
                section.id = `category-${cat}`;
                
                // Título de la categoría
                const title = document.createElement('h2');
                title.className = 'category-title';
                title.textContent = titulosCategorias[cat];
                section.appendChild(title);
                
                // Contenedor de productos para esta categoría
                const productsContainer = document.createElement('div');
                productsContainer.className = 'products-container';
                // Agregar cada producto de esta categoría
                productos[cat].forEach(prod => {
                    const card = crearTarjetaProducto(prod);
                    productsContainer.appendChild(card);
                });
                
                section.appendChild(productsContainer);
                grid.appendChild(section);
            }
        });
        
        // Si no hay productos en ninguna categoría
        if (grid.children.length === 0) {
            grid.innerHTML = '<p style="color: #FF6B35; text-align: center;">No hay productos disponibles</p>';
        }
    }
    
    // Crear tarjeta de producto individual
    function crearTarjetaProducto(prod) {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // Manejo de imagen con fallback
        const imgSrc = prod.img && prod.img !== '' ? prod.img : 'assets/img/logo.jpg';
        
        // Construir descripción formateada
        let descripcionHtml = '';
        
        if (Array.isArray(prod.descripcion)) {
            // Si la descripción es un array (nuevo formato)
            prod.descripcion.forEach(linea => {
                descripcionHtml += `
                    <div class="desc-line">
                        <span class="desc-tipo">${escapeHtml(linea.tipo)}</span>
                        <span class="desc-contenido"> ${escapeHtml(linea.contenido)}</span>
                    </div>
                `;
            });
        } else {
            // Si es string (formato antiguo, por compatibilidad)
            descripcionHtml = `<div class="desc-contenido">${escapeHtml(prod.descripcion)}</div>`;
        }
        
        // Construir HTML de la tarjeta
        card.innerHTML = `
            <img src="${imgSrc}" alt="${escapeHtml(prod.nombre)}" class="product-img" onerror="this.src='assets/img/logo.jpg'">
            <div class="product-info">
                <div class="product-title">${escapeHtml(prod.nombre)}</div>
                <div class="product-desc">
                    ${descripcionHtml}
                </div>
                <div class="product-price">$${prod.precio.toLocaleString('es-CL')}</div>
                ${prod.incluye ? `<div class="product-incluye">🎁 ${escapeHtml(prod.incluye)}</div>` : ''}
                <textarea class="comment-input" rows="2" placeholder="✏️ Comentario (ej: sin cebollín, más picante...)"></textarea>
                <button class="btn-add" data-id="${prod.id}" data-nombre="${prod.nombre}" data-precio="${prod.precio}">➕ Agregar</button>
            </div>
        `;
        
        // Evento del botón agregar
        const btn = card.querySelector('.btn-add');
        const textarea = card.querySelector('.comment-input');
        
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(btn.dataset.id);
            const nombre = btn.dataset.nombre;
            const precio = parseInt(btn.dataset.precio);
            const comentario = textarea.value;
            
            if (typeof agregarAlCarrito !== 'undefined') {
                agregarAlCarrito(id, nombre, precio, comentario);
                textarea.value = '';
                mostrarNotificacion(nombre);
            }
        });
        
        return card;
    }
    
    // Configurar eventos del carrito
    function configurarEventosCarrito() {
        const cartFloatBtn = document.getElementById('cartFloatBtn');
        const cartSidebar = document.getElementById('cartSidebar');
        const closeCartBtn = document.getElementById('closeCartBtn');
        const cartOverlay = document.getElementById('cartOverlay');
        
        if (cartFloatBtn) {
            cartFloatBtn.addEventListener('click', () => {
                cartSidebar.classList.add('open');
                cartOverlay.classList.add('show');
            });
        }
        
        if (closeCartBtn) {
            closeCartBtn.addEventListener('click', () => {
                cartSidebar.classList.remove('open');
                cartOverlay.classList.remove('show');
            });
        }
        
        if (cartOverlay) {
            cartOverlay.addEventListener('click', () => {
                cartSidebar.classList.remove('open');
                cartOverlay.classList.remove('show');
            });
        }
    }
    
    // Configurar modal de delivery/retiro
    function configurarModal() {
        const checkoutBtn = document.getElementById('checkoutBtn');
        const deliveryModal = document.getElementById('deliveryModal');
        const modalClose = document.querySelector('.modal-close');
        const cancelarModal = document.getElementById('cancelarModal');
        const confirmarPedido = document.getElementById('confirmarPedido');
        const radioOptions = document.querySelectorAll('input[name="tipoPedido"]');
        const direccionFields = document.getElementById('direccionFields');
        const comunaInput = document.getElementById('comunaInput');
        const direccionInput = document.getElementById('direccionInput');
        
        if (!checkoutBtn) return;
        
        function openModal() {
            if (typeof carrito !== 'undefined' && carrito.length === 0) {
                alert("⚠️ Agrega productos al carrito primero");
                return;
            }
            if (deliveryModal) deliveryModal.classList.add('show');
        }
        
        function closeModal() {
            if (deliveryModal) deliveryModal.classList.remove('show');
            if (radioOptions.length) {
                document.querySelector('input[value="retiro"]').checked = true;
            }
            if (direccionFields) direccionFields.style.display = 'none';
            if (comunaInput) comunaInput.value = '';
            if (direccionInput) direccionInput.value = '';
        }
        
        if (radioOptions.length) {
            radioOptions.forEach(radio => {
                radio.addEventListener('change', (e) => {
                    if (direccionFields) {
                        direccionFields.style.display = e.target.value === 'delivery' ? 'block' : 'none';
                    }
                });
            });
        }
        
        if (confirmarPedido) {
            confirmarPedido.addEventListener('click', () => {
                const tipoSeleccionado = document.querySelector('input[name="tipoPedido"]:checked').value;
                
                if (tipoSeleccionado === 'delivery') {
                    const comuna = comunaInput ? comunaInput.value.trim() : '';
                    const direccion = direccionInput ? direccionInput.value.trim() : '';
                    
                    if (!comuna) {
                        alert("⚠️ Ingresa la comuna");
                        return;
                    }
                    if (!direccion) {
                        alert("⚠️ Ingresa la dirección");
                        return;
                    }
                    
                    if (typeof enviarPedidoWhatsApp !== 'undefined') {
                        enviarPedidoWhatsApp('delivery', comuna, direccion);
                        if (typeof vaciarCarrito !== 'undefined') vaciarCarrito();
                    }
                } else {
                    if (typeof enviarPedidoWhatsApp !== 'undefined') {
                        enviarPedidoWhatsApp('retiro', '', '');
                        if (typeof vaciarCarrito !== 'undefined') vaciarCarrito();
                    }
                }
                
                closeModal();
                if (cartSidebar) cartSidebar.classList.remove('open');
                if (cartOverlay) cartOverlay.classList.remove('show');
            });
        }
        
        checkoutBtn.addEventListener('click', openModal);
        
        if (modalClose) modalClose.addEventListener('click', closeModal);
        if (cancelarModal) cancelarModal.addEventListener('click', closeModal);
        
        if (deliveryModal) {
            deliveryModal.addEventListener('click', (e) => {
                if (e.target === deliveryModal) closeModal();
            });
        }
    }
    
    // Notificación flotante
    function mostrarNotificacion(nombreProducto) {
        const notificacion = document.createElement('div');
        notificacion.className = 'notificacion-agregado';
        notificacion.innerHTML = `
            <span class="icono">🍣</span>
            <span class="texto">Agregado</span>
            <span class="producto-nombre">${escapeHtml(nombreProducto)}</span>
            <span class="icono">🥢</span>
        `;
        
        document.body.appendChild(notificacion);
        notificacion.offsetHeight;
        notificacion.classList.add('animar');
        
        setTimeout(() => {
            if (notificacion && notificacion.remove) {
                notificacion.remove();
            }
        }, 1800);
    }
    
    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }
})();