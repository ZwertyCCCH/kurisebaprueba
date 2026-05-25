KURISEBA SUSHI - WEB

ESTRUCTURA:
- index.html         → vista con carrito (delivery/takeaway)
- menu-salon.html    → vista solo carta (para QR en mesas)
- css/style.css      → estilos (diseño claro + japonés)
- js/productos.js    → AQUÍ EDITAS LOS 20 PRODUCTOS (nombre, precio, descripción, imagen)
- js/carrito.js      → lógica carrito
- js/wsp.js          → envío a WhatsApp +56974798490
- js/main.js         → controlador principal
- js/salon.js        → solo para menu-salon

CÓMO ACTUALIZAR PRODUCTOS:
1. Abre js/productos.js
2. Modifica los campos: nombre, descripcion, precio, img
3. Sube las fotos a assets/img/ (ej: combo1.jpg)
4. Guarda y sube todo por FTP a Hostgator

CÓMO SUBIR A HOSTGATOR:
1. Entra a cPanel de Hostgator
2. Ve a "Administrador de archivos" o usa FTP
3. Sube toda la carpeta a public_html/kuriseba.cl/
4. Asegura que index.html sea la página principal

NÚMERO WHATSAPP:
Está fijo en +56974798490 (cámbialo en js/wsp.js si es necesario)

PRUEBAS:
- Abre index.html desde el celular (modo vista móvil)
- Agrega productos con comentario
- Revisa que el mensaje de WhatsApp llegue con el formato correcto

CONSEJO:
Genera un QR que apunte a https://kuriseba.cl/menu-salon.html para las mesas.