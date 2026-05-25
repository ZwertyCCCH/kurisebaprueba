// wsp.js - Simplificado
function enviarPedidoWhatsApp(tipoPedido, comuna, direccion) {
    if (carrito.length === 0) {
        alert("⚠️ No hay productos");
        return false;
    }
    
    let mensaje = "🍣 *PEDIDO KURISEBA* 🍣\n\n";
    
    carrito.forEach(item => {
        mensaje += `• ${item.nombre} - $${item.precio}\n`;
        mensaje += `  Comentario: ${item.comentario}\n\n`;
    });
    
    mensaje += `TOTAL: $${obtenerTotal()}\n\n`;
    
    if (tipoPedido === 'delivery') {
        mensaje += `DELIVERY\nComuna: ${comuna}\nDirección: ${direccion}\n`;
    } else {
        mensaje += `RETIRO EN LOCAL\n`;
    }
    
    const numero = "56974798490";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    return true;
}