// productos.js - Nueva estructura con categorías
const productos = {
    promociones: [
        { 
        id: 1, 
        nombre: "15 Piezas Mixtas A", 
        descripcion: [
            { tipo: "5 env en salmón:", contenido: "queso crema, camarón cocido, ciboulette" },
            { tipo: "5 env en palta:", contenido: "queso crema, salmón, ciboulette" },
            { tipo: "5 frito panko:", contenido: "queso crema, pollo furai, cebollín" }
        ],
        precio: 8000, 
        incluye: "Incluye 1 salsa de soya y 1 salsa dulce gratis",
        img: "assets/img/promo15a.jpeg" 
    },
    { 
        id: 2, 
        nombre: "15 Piezas Mixtas B", 
        descripcion: [
            { tipo: "5 env en salmón:", contenido: "camarón furai, queso crema, cebollín" },
            { tipo: "5 env en palta:", contenido: "queso crema, cebollín, camarón cocido" },
            { tipo: "5 gyosas mixtas:", contenido: "gyosas de pollo y verduras" }
        ],
        precio: 8000, 
        incluye: "Incluye 1 salsa de soya y 1 salsa dulce gratis",
        img: "assets/img/promo15b.png" 
    },
    { 
        id: 3, 
        nombre: "20 Piezas Mixtas A", 
        descripcion: [
            { tipo: "5 env en salmón:", contenido: "camarón tempura, palta, cebollín" },
            { tipo: "5 env en salmón:", contenido: "rodajas de limón, queso crema, cebollín, camarón furai" },
            { tipo: "5 env en palta:", contenido: "queso crema, cebollín, salmón" },
            { tipo: "5 env en tempura:", contenido: "kanikama furai, queso crema, cebollín" }
        ],
        precio: 10800, 
        incluye: "Incluye 1 salsa de soya y 1 salsa dulce gratis",
        img: "assets/img/promo20a.jpeg" 
    },
    { 
        id: 4, 
        nombre: "20 Piezas Mixtas B", 
        descripcion: [
            { tipo: "5 env en palta:", contenido: "queso crema, cebollín, camarón cocido" },
            { tipo: "5 env en salmón:", contenido: "camarón tempura, palta" },
            { tipo: "5 env en tempura:", contenido: "pollo furai, queso crema, cebollín" },
            { tipo: "5 env en panko:", contenido: "pollo furai, queso crema, cebollín" }
        ],
        precio: 10500, 
        incluye: "Incluye 1 salsa de soya y 1 salsa dulce gratis",
        img: "assets/img/promo20b.jpeg" 
    },
    { 
        id: 5, 
        nombre: "20 Tempura Hot", 
        descripcion: [
            { tipo: "10 env en tempura:", contenido: "pollo furai, queso crema, cebollín" },
            { tipo: "10 env en panko:", contenido: "kanikama furai, queso crema, cebollín" }
        ],
        precio: 10000, 
        incluye: "Incluye 1 salsa de soya y 1 salsa dulce gratis",
        img: "assets/img/promo20hot.jpg" 
    },
    { 
        id: 6, 
        nombre: "20 Piezas Frías", 
        descripcion: [
            { tipo: "5 env en sésamo:", contenido: "kanikama furai, queso crema, palta, cebollín" },
            { tipo: "5 env en ciboulette:", contenido: "queso crema, pollo furai, cebollín" },
            { tipo: "10 env en palta:", contenido: "queso crema, cebollín, camarón cocido" }
        ],
        precio: 10500, 
        incluye: "Incluye 1 salsa de soya y 1 salsa dulce gratis",
        img: "assets/img/promo20frias.jpeg" 
    },
    { 
        id: 7, 
        nombre: "28 Piezas Mixtas A", 
        descripcion: [
            { tipo: "XXX:", contenido: "XXX" }
        ],
        precio: 21500, 
        incluye: "Incluye 1 salsa de soya, 1 salsa dulce y una salsa acebichada gratis",
        img: "assets/img/promo28a.jpeg" 
    },
    { 
        id: 8, 
        nombre: "30 Vegui Frías", 
        descripcion: [
            { tipo: "10 env en ciboulette:", contenido: "choclito tempurisado, palta, queso crema" },
            { tipo: "10 env en queso crema:", contenido: "champiñón furai, palta, cebollín" },
            { tipo: "10 env en palta:", contenido: "palmito, pimentón, queso crema, cebollín" }
        ],
        precio: 13000, 
        incluye: "Incluye 1 salsa de soya, 1 salsa dulce y 1 salsa acebichada gratis",
        img: "assets/img/promo30veg.jpeg" 
    },
    { 
        id: 9, 
        nombre: "30 Mixtas Vegui B", 
        descripcion: [
            { tipo: "10 env en sésamo:", contenido: "champiñón tempurisado, pimentón furai, cebollín" },
            { tipo: "10 fritos:", contenido: "choclito, champiñón furai, palta" },
            { tipo: "10 env en palta:", contenido: "champiñón, choclito, queso crema" }
        ],
        precio: 13000, 
        incluye: "Incluye 1 salsa de soya, 1 salsa dulce y 1 salsa acebichada gratis",
        img: "assets/img/promo30vegb.jpg" 
    },
    { 
        id: 10, 
        nombre: "30 Piezas Mixtas A", 
        descripcion: [
            { tipo: "10 env en palta:", contenido: "salmón, queso crema, cebollín" },
            { tipo: "10 env en salmón:", contenido: "camarón furai, ciboulette, queso crema, almendras" },
            { tipo: "10 env en panko:", contenido: "pollo furai, cebollín, queso crema" }
        ],
        precio: 14500, 
        incluye: "Incluye 1 salsa de soya, 1 salsa dulce y 1 salsa acebichada gratis",
        img: "assets/img/promo30a.jpeg" 
    },
    { 
        id: 11, 
        nombre: "30 Piezas Mixtas B", 
        descripcion: [
            { tipo: "10 env en ciboulette:", contenido: "kanikama furai, queso crema, cebollín" },
            { tipo: "10 env en palta:", contenido: "camarón cocido, queso crema, cebollín" },
            { tipo: "10 env en panko:", contenido: "pollo furai, queso crema, palta" }
        ],
        precio: 14000, 
        incluye: "Incluye 1 salsa de soya, 1 salsa dulce y 1 salsa acebichada gratis",
        img: "assets/img/promo30b.jpg" 
    },
    { 
        id: 12, 
        nombre: "30 Piezas Mixtas E", 
        descripcion: [
            { tipo: "5 env en salmón:", contenido: "camarón furai, queso crema, cebollín" },
            { tipo: "5 env en palta:", contenido: "salmón, queso crema, cebollín" },
            { tipo: "5 env en tempura:", contenido: "champiñón furai, queso crema, cebollín" },
            { tipo: "5 env en panko:", contenido: "kanikama furai, queso crema, cebollín" },
            { tipo: "10 frito sin arroz:", contenido: "queso crema, palta, cebollín, almendras, camarón cocido, envuelto en pollo" }
        ],
        precio: 14500, 
        incluye: "Incluye 1 salsa de soya, 1 salsa dulce y 1 salsa acebichada gratis",
        img: "assets/img/promo30e.jpeg" 
    },
    { 
        id: 13, 
        nombre: "30 Piezas Mixtas S", 
        descripcion: [
            { tipo: "5 env en salmón:", contenido: "camarón furai, queso crema, cebollín" },
            { tipo: "5 env en palta:", contenido: "salmón, queso crema, cebollín" },
            { tipo: "5 env en tempura:", contenido: "champiñón furai, queso crema, cebollín" },
            { tipo: "5 env en panko:", contenido: "kanikama furai, queso crema, cebollín" },
            { tipo: "10 frito sin arroz:", contenido: "queso crema, palta, cebollín, almendras, camarón cocido" }
        ],
        precio: 17500, 
        incluye: "Incluye 1 salsa de soya, 1 salsa dulce y 1 salsa acebichada gratis",
        img: "assets/img/promo30s.jpeg" 
    },
    { 
        id: 14, 
        nombre: "30 Piezas Acebichada", 
        descripcion: [
            { tipo: "5 env en salmón:", contenido: "queso crema, cebollín, champiñón furai" },
            { tipo: "5 env en palta:", contenido: "queso crema, cebollín, champiñón furai" },
            { tipo: "5 env en ciboulette:", contenido: "queso crema, palta, pollo furai" },
            { tipo: "5 env en sésamo:", contenido: "kanikama furai" },
            { tipo: "10 env en panko:", contenido: "pollo furai, queso crema, cebollín" }
        ],
        precio: 18000, 
        incluye: "Incluye 1 salsa de soya, 1 salsa dulce y 1 salsa acebichada gratis",
        img: "assets/img/promo30aceb.jpeg" 
    },
    { 
        id: 15, 
        nombre: "30 Piezas Mixtas C", 
        descripcion: [
            { tipo: "5 env en salmón:", contenido: "queso crema, cebollín, camarón furai" },
            { tipo: "10 env en queso crema:", contenido: "camarón furai, palta, cebollín" },
            { tipo: "5 env en palta:", contenido: "salmón, queso crema, cebollín" },
            { tipo: "10 env en panko:", contenido: "kanikama furai, queso crema, cebollín" }
        ],
        precio: 14500, 
        incluye: "Incluye 1 salsa de soya, 1 salsa dulce y 1 salsa acebichada gratis",
        img: "assets/img/promo30c.jpg" 
    },
    { 
        id: 16, 
        nombre: "30 Tempura A", 
        descripcion: [
            { tipo: "10 env en panko:", contenido: "kanikama furai, cebollín, queso crema" },
            { tipo: "10 env en tempura:", contenido: "pollo furai, cebollín, queso crema" },
            { tipo: "10 env en panko:", contenido: "camarón furai, queso crema, palta, cebollín" }
        ],
        precio: 14000, 
        incluye: "Incluye 1 salsa de soya, 1 salsa dulce y 1 salsa acebichada gratis",
        img: "assets/img/promo30tempuraa.jpeg" 
    },
    { 
        id: 17, 
        nombre: "30 Tempura B", 
        descripcion: [
            { tipo: "10 env en tempura:", contenido: "pollo furai, cebollín, queso crema" },
            { tipo: "10 env en panko:", contenido: "salmón, queso crema, cebollín" },
            { tipo: "10 env en panko:", contenido: "camarón tempura, palta, queso crema, salmón ahumado" }
        ],
        precio: 15500, 
        incluye: "Incluye 1 salsa de soya, 1 salsa dulce y 1 salsa acebichada gratis",
        img: "assets/img/promo30tempurab.jpeg" 
    },
    { 
        id: 18, 
        nombre: "36 Piezas Mixtas Frías Nikkei", 
        descripcion: [
            { tipo: "XXX:", contenido: "XXX" }
        ],
        precio: 27500, 
        incluye: "Incluye 2 salsas de soya, 1 salsa dulce y 1 salsa acebichada gratis",
        img: "assets/img/promo36nikkei.jpeg" 
    },
    { 
        id: 19, 
        nombre: "40 Piezas Mixtas A", 
        descripcion: [
            { tipo: "10 env en panko:", contenido: "salmón, queso crema, cebollín" },
            { tipo: "10 env en tempura:", contenido: "pollo furai, queso crema, cebollín" },
            { tipo: "10 env en palta:", contenido: "camarón furai, queso crema, cebollín" },
            { tipo: "10 env en panko:", contenido: "pollo furai, cebollín, queso crema" }
        ],
        precio: 19000, 
        incluye: "Incluye 2 salsas de soya, 1 salsa dulce y 1 salsa acebichada gratis",
        img: "assets/img/promo40a.jpg" 
    },
    { 
        id: 20, 
        nombre: "40 Piezas Mixtas C", 
        descripcion: [
            { tipo: "10 env en plaqueta mixta:", contenido: "camarón furai, queso crema, cebollín" },
            { tipo: "10 env en ciboulette:", contenido: "palta, queso crema, kanikama furai" },
            { tipo: "20 env en panko:", contenido: "pollo furai, queso crema, cebollín" }
        ],
        precio: 19000, 
        incluye: "Incluye 2 salsas de soya, 1 salsa dulce y 1 salsa acebichada gratis",
        img: "assets/img/promo40c.jpeg" 
    },
    { 
        id: 21, 
        nombre: "40 Piezas Mixtas Acebichada", 
        descripcion: [
            { tipo: "5 env en palta:", contenido: "queso crema, cebollin, camarón furai con toping de ceviche" },
            { tipo: "5 env en salmón :", contenido: "queso crema, cebollin, camarón furai con toping de ceviche" },
            { tipo: "5 env en ciboulette :", contenido: "pollo furai, queso crema, palta" },
            { tipo: "5 env en sésamo :", contenido: "kanikama furai, cebollín, queso crema, palta" },
            { tipo: "5 env en palta :", contenido: "salmón furai, cebollín, queso crema " },
            { tipo: "5 env en salmón :", contenido: "camarón furai, queso crema, cebollín" },
            { tipo: "5 env en panko :", contenido: "pollo furai, cebollín, queso crema" },
            { tipo: "5 env en tempura :", contenido: "pollo furai, cebollin, queso crema" },
        ],
        precio: 0, 
        incluye: "Incluye 2 salsas de soya, 1 salsa dulce y 1 salsa acebichada gratis",
        img: "assets/img/promo40aceb.jpeg" 
    },
    { 
        id: 22, 
        nombre: "50 Mixtas A", 
        descripcion: [
            { tipo: "10 env en salmón:", contenido: "queso crema, palta, camarón furai" },
            { tipo: "10 env en palta:", contenido: "pollo teriyaki, queso crema, cebollín" },
            { tipo: "10 env en ueso crema:", contenido: "salmón a la plancha, palta" },
            { tipo: "10 env en atún:", contenido: "queso crema, cebollín, camarón tempurisado" },
            { tipo: "10 env en tempura:", contenido: "pollo furai, queso crema, cebollín" }
        ],
        precio: 23000, 
        incluye: "Incluye 2 salsas de soya, 2 salsas dulces y 1 salsa acebichada gratis",
        img: "assets/img/promo50a.jpeg" 
    },
    { 
        id: 23, 
        nombre: "50 Mixtas B", 
        descripcion: [
            { tipo: "10 env en salmón:", contenido: "queso crema, palta, camarón furai" },
            { tipo: "10 env en palta:", contenido: "pollo teriyaki, queso crema, cebollín" },
            { tipo: "10 env en queso crema:", contenido: "salmón a la plancha, palta" },
            { tipo: "10 env en atún:", contenido: "queso crema, cebollín, camarón tempurisado" },
            { tipo: "10 env en tempura:", contenido: "pollo furai, queso crema, cebollín" }
        ],
        precio: 23000, 
        incluye: "Incluye 2 salsas de soya, 2 salsas dulces y 1 salsa acebichada gratis",
        img: "assets/img/promo50b.jpg" 
    },
    { 
        id: 24, 
        nombre: "50 Piezas Frías", 
        descripcion: [
            { tipo: "10 env en sésamo:", contenido: "kanikama furai, palta, cebollín" },
            { tipo: "10 env en ciboulette:", contenido: "pollo furai, palta, queso crema" },
            { tipo: "10 env en palta:", contenido: "camarón cocido, cebollín, queso crema" },
            { tipo: "10 env en queso crema:", contenido: "camarón tempura, palta, cebollín, spicy" },
            { tipo: "10 env en salmón:", contenido: "champiñón furai, almendras, queso crema, ciboulette" }
        ],
        precio: 21500, 
        incluye: "Incluye 2 salsas de soya, 2 salsas dulces y 1 salsa acebichada gratis",
        img: "assets/img/promo50frias.jpeg" 
    },
    { 
        id: 25, 
        nombre: "70 Piezas Mixtas", 
        descripcion: [
            { tipo: "10 env en sésamo:", contenido: "kanikama furai, palta, cebollín, queso crema" },
            { tipo: "10 env en ciboulette:", contenido: "pollo furai, cebollín, queso crema" },
            { tipo: "10 env en salmón:", contenido: "camarón furai, ciboulette, queso crema" },
            { tipo: "10 env en palta:", contenido: "camarón cocido, queso crema, cebollín" },
            { tipo: "10 env en tempura:", contenido: "pollo furai, cebollín, queso crema" },
            { tipo: "10 env en panko:", contenido: "camarón furai, queso crema" },
            { tipo: "10 env en panko:", contenido: "salmón, queso crema, cebollín" }
        ],
        precio: 31000, 
        incluye: "Incluye 3 salsas de soya, 2 salsas dulces y 1 salsa acebichada gratis",
        img: "assets/img/promo70.jpg" 
    },
    { 
        id: 26, 
        nombre: "95 Piezas Mixtas", 
        descripcion: [
            { tipo: "10 env en palta:", contenido: "camarón cocido, queso crema, cebollín" },
            { tipo: "10 env en plaqueta mixta:", contenido: "camarón furai, ciboulette, queso crema" },
            { tipo: "20 env en sésamo:", contenido: "kanikama furai, palta, cebollín, queso crema" },
            { tipo: "20 env en panko:", contenido: "pollo furai, queso crema, cebollín" },
            { tipo: "10 env en queso crema:", contenido: "salmón, palta, cebollín" },
            { tipo: "10 env en salmón:", contenido: "camarón tempura, palta, cebollín, spicy" },
            { tipo: "10 env en tempura:", contenido: "pollo furai, queso crema, cebollín" },
            { tipo: "5 Camarón Furai:", contenido: "camarón furai" }
        ],
        precio: 40000, 
        incluye: "Incluye 4 salsas de soya, 4 salsas dulces y 2 salsas acebichadas gratis",
        img: "assets/img/promo95.jpeg" 
    },
    { 
        id: 27, 
        nombre: "120 Piezas Mixtas", 
        descripcion: [
            { tipo: "20 env en panko", contenido: "kanikama furai, cebollín, queso crema" },
            { tipo: "20 env en panko:", contenido: "camarón furai, ciboulette, queso crema" },
            { tipo: "20 env en tempura:", contenido: "pollo furai, queso crema, cebollín" },
            { tipo: "10 env en queso crema:", contenido: "salmón furai, palta, cebollín" },
            { tipo: "10 env en salmón:", contenido: "palta, cebollín, queso crema" },
            { tipo: "10 env en palta:", contenido: "camarón cocido, queso crema, cebollín" },
            { tipo: "10 env en ciboulette:", contenido: "salmón furai, palta, queso crema" },
            { tipo: "10 env en sésamo:", contenido: "kanikama furai, queso crema, cebollín" },
            { tipo: "10 Gyosas mixtas:", contenido: "5 gyosas de pollo y 5 gyosas de cerdo" }
        ],
        precio: 50000, 
        incluye: "Incluye 6 salsas de soya, 3 salsas dulces y 3 salsas acebichadas gratis",
        img: "assets/img/promo120.jpg" 
    }
    ],
    gohan: [
        { id: 28, nombre: "Gohan Teriyaki", descripcion: "Base de arroz con palta, queso crema, cebollín, sésamo y pollo teriyaki", precio: 6500, img: "assets/img/gohanteriyaki.jpeg" },
        { id: 29, nombre: "Gohan Acebichado", descripcion: "Base de arroz con palta, cebollín, almendras y ceviche", precio: 7500, img: "assets/img/gohanaceb.jpeg" },
        { id: 30, nombre: "Gohan Teriyaki Eby", descripcion: "Base de arroz con palta, queso crema, cebollín, sésamo, papas al hilo, pollo teriyaki y camarón cocido", precio: 8000, img: "assets/img/gohantereby.jpeg" },
        { id: 31, nombre: "Gohan Acebichado Tory", descripcion: "Base de arroz con palta, almendras, cebollín, sésamo, pollo teriyaki y ceviche", precio: 8500, img: "assets/img/gohanacebtory.jpeg" },
        { id: 32, nombre: "Gohan Sake Eby", descripcion: "Base de arroz con palta, queso crema, cebollín, salmón y camarón cocido", precio: 8000, img: "assets/img/gohansakeeby.jpeg" },
        { id: 33, nombre: "Gohan Maguro", descripcion: "Base de arroz con palta, atún, camarón cocido y kanikama furai", precio: 8000, img: "assets/img/gohanmaguro.jpeg" },
        { id: 34, nombre: "Gohan Kuriseba", descripcion: "Base de arroz con palta, queso crema, cebollín, sésamo, salmón, camarón furai y pollo furai", precio: 8500, img: "assets/img/gohankuriseba.jpeg" },
        { id: 35, nombre: "Gohan de Salmón (sake)", descripcion: "Base de arroz con palta, queso crema, cebollín, sésamo y salmón", precio: 6500, img: "assets/img/gohansalmon.jpeg" },
        { id: 36, nombre: "Gohan Vegui (Champiñon Furay)", descripcion: "Base de arroz con cilantro, cebolla morada, champiñon tempurizado y pimentón", precio: 6500, img: "assets/img/gohanveg.jpeg" },
        { id: 37, nombre: "Gohan de Camarón (Ebi)", descripcion: "Base de arroz con palta, queso crema, cebollín, sésamo y camarón furai", precio: 6500, img: "assets/img/gohancamaron.jpeg" },
    ],
    sushiburgers: [
        { id: 38, nombre: "Sushi Burguer - Pollo", descripcion: "Relleno de Pollo, cebollín, palta y queso crema, envuelto en arroz tempurizado", precio: 6500, img: "assets/img/sushiburguerpollo.png" },
        { id: 39, nombre: "Sushi Burguer - Camarón", descripcion: "Relleno de Camarón, cebollín, palta y queso crema, envuelto en arroz tempurizado", precio: 6500, img: "assets/img/sushiburguercamaron.jpeg" },
        { id: 40, nombre: "Sushi Burguer - Salmón", descripcion: "Relleno de Salmón, cebollín, palta y queso crema, envuelto en arroz tempurizado", precio: 6500, img: "assets/img/sushiburguersalmon.png" },
        { id: 41, nombre: "Sushi Burguer - Vegui", descripcion: "Relleno de Champiñon, cebollín, palta y queso crema, envuelto en arroz tempurizado", precio: 6500, img: "assets/img/sushiburguerchampiñon.png" },
    ],
    handrolls:[
        { id: 42, nombre: "Handroll - Pollo", descripcion: "XXX", precio: 3500, img: "assets/img/handroll.jpeg" },
        { id: 43, nombre: "Handroll - Kanikama", descripcion: "XXX", precio: 3500, img: "assets/img/handroll.jpeg" },
        { id: 44, nombre: "Handroll - Champiñon", descripcion: "XXX", precio: 3500, img: "assets/img/handroll.jpeg" },
        { id: 45, nombre: "Handroll - Choclito", descripcion: "XXX", precio: 3500, img: "assets/img/handroll.jpeg" },
        { id: 46, nombre: "Handroll - Camarón", descripcion: "XXX", precio: 4500, img: "assets/img/handroll.jpeg" },
        { id: 47, nombre: "Handroll - Salmón", descripcion: "XXX", precio: 4500, img: "assets/img/handroll.jpeg" },
        { id: 48, nombre: "Handroll - Pulpo", descripcion: "XXX", precio: 4500, img: "assets/img/handroll.jpeg" },
    ],
    aperitivos: [
        { id: 49, nombre: "Gyozas de Pollo (7 uds)", descripcion: "Gyozas crujientes rellenas de pollo y verduras", precio: 4500, img: "assets/img/gyosas.jpeg" },
        { id: 50, nombre: "Gyozas de Cerdo (7 uds)", descripcion: "Gyozas crujientes rellenas de cerdo y verduras", precio: 4500, img: "assets/img/gyosas.jpeg" },
        { id: 51, nombre: "Ebi Furai Americano (5 uds)", descripcion: "Camarones ecuatorianos 36/40 con queso mozarella en panko y salsa kuri", precio: 6000, img: "assets/img/ebiamericano.jpeg" },
        { id: 52, nombre: "Ebi Tempura (5 uds)", descripcion: "Camarones ecuatorianos 36/40 bañado en masa tempura y salsa kuri", precio: 5000, img: "assets/img/ebiamericano.jpeg" },
        { id: 53, nombre: "Korokke (5 uds)", descripcion: "Salmón, queso crema, cebollín, apanado en panko y salsa de maracuyá o kuri", precio: 5000, img: "assets/img/korokke.jpeg" },
        { id: 54, nombre: "Sashimi atún (6 uds)", descripcion: "6 cortes finos de atún", precio: 6500, img: "assets/img/sashimiatun.jpeg" },
        { id: 55, nombre: "Sashimi salmón (6 uds)", descripcion: "6 cortes finos de salmón", precio: 6500, img: "assets/img/sashimisalmon.jpeg" },
        { id: 56, nombre: "Sashimi pulpo (6 uds)", descripcion: "6 cortes finos de pulpo", precio: 6500, img: "assets/img/sashimipulpo.jpeg" },
        { id: 57, nombre: "Sashimi mixto (6 uds)", descripcion: "6 cortes finos mixtos de pulpo, salmón y atún", precio: 6500, img: "assets/img/sashimimixto.jpeg" },
        { id: 58, nombre: "Nigiri de pulpo", descripcion: "Sushi tradicional japonés con una porción de arroz junto a pulpo", precio: 1500, img: "assets/img/nigiripulpo.jpeg" },
        { id: 59, nombre: "Nigiri de atún", descripcion: "Sushi tradicional japonés con una porción de arroz junto a atún", precio: 1500, img: "assets/img/nigiriatun.jpeg" },
        { id: 60, nombre: "Nigiri de camarón", descripcion: "Sushi tradicional japonés con una porción de arroz junto a camarón", precio: 1500, img: "assets/img/nigiricamaron.jpeg" },
        { id: 61, nombre: "Nigiri de salmón", descripcion: "Sushi tradicional japonés con una porción de arroz junto a salmón", precio: 1500, img: "assets/img/nigirisalmon.jpeg" },
        { id: 62, nombre: "Papas fritas normales", descripcion: "Porción de papas fritas de 300 gramos", precio: 3000, img: "assets/img/papasfritas.avif" },
        { id: 63, nombre: "Papas fritas grandes", descripcion: "Porción de papas fritas de 600 gramos", precio: 5500, img: "assets/img/papasfritas.avif" },

    ],
    peruano: [
        { id: 64, nombre: "Tiritas de Pollo", descripcion: "Deliciosas tiritas de pollo apanado", precio: 5500, img: "assets/img/tiritaspollo.jpeg" },
        { id: 65, nombre: "Tiritas de Pollo, con Arroz y Papas Fritas", descripcion: "Deliciosas tiritas de pollo apanado acompañado de arroz y papas fritas", precio: 6500, img: "assets/img/tiritasapf.jpeg" },
        { id: 66, nombre: "Pollo Saltado", descripcion: "Delicioso pollo salteado con verduras, papas fritas y arroz", precio: 6000, img: "assets/img/pollosaltado.jpeg" },
        { id: 67, nombre: "Lomo Saltado", descripcion: "Delicioso lomo salteado con verduras, papas fritas y arroz", precio: 7500, img: "assets/img/pollosaltado.jpeg" },
        { id: 68, nombre: "Aeropuerto de pollo", descripcion: "Deliciosa combinación de arroz chaufa y tallarín salteado de pollo", precio: 6000, img: "assets/img/aeropuertopollo.jpeg" },
        { id: 69, nombre: "Chaufa de 3 sabores", descripcion: "Deliciosa combinación de arroz chaufa, con carne, pollo y camarón", precio: 9500, img: "assets/img/chaufa3.jpeg" },
        { id: 70, nombre: "Aeropuerto acebichado", descripcion: "Deliciosa combinación de arroz chaufa con tallarín salteado, junto con acebichado", precio: 9500, img: "assets/img/aeropuertoacebichado.jpeg" },
    ],
    extras: [
    // Salsas
    { id: 71, nombre: "Salsa de Soya", descripcion: "Clásica salsa de soja para sushi", precio: 700, img: "assets/img/salsasoya.jpg" },
    { id: 72, nombre: "Salsa Dulce", descripcion: "Salsa agridulce estilo teriyaki", precio: 700, img: "assets/img/salsadulce.png" },
    { id: 73, nombre: "Salsa Acebichada", descripcion: "Salsa cítrica estilo ceviche", precio: 700, img: "assets/img/salsaaceb.png" },
    { id: 74, nombre: "Salsa de Ajo", descripcion: "Salsa de ajo suave y aromática", precio: 700, img: "assets/img/salsaajo.jpg" },
    { id: 75, nombre: "Salsa de Olivo", descripcion: "Deliciosa salsa sabor aceitunas", precio: 700, img: "assets/img/salsaoliva.png" },
    { id: 76, nombre: "Salsa Picante", descripcion: "Salsa ligera con un toque picante", precio: 700, img: "assets/img/salsapicante.png" },
    { id: 77, nombre: "Salsa de Maracuyá", descripcion: "Exótica salsa agridulce de maracuyá", precio: 700, img: "assets/img/salsamaracuya.jpg" },
    
    // Complementos
    { id: 78, nombre: "Wasabi", descripcion: "Pasta de wasabi picante (porción)", precio: 500, img: "assets/img/wasabi.jpg" },
    { id: 79, nombre: "Jengibre Encurtido", descripcion: "Jengibre encurtido color rosa (porción)", precio: 700, img: "assets/img/jengibre.jpg" },
    
    // Utensilios
    { id: 80, nombre: "Palillos", descripcion: "Palillos de madera (1 par)", precio: 400, img: "assets/img/palillos.jpg" },
    ],
    bebestibles: [
        { id: 81, nombre: "Bebidas 1.5L", descripcion: "Bebidas gaseosas. Sabores disponibles: Coca Cola, Fanta, Sprite, Inca Kola", precio: 3000, img: "assets/img/bebidas15l.webp" },
        { id: 82, nombre: "Jugos 1.0 L", descripcion: "Jugos guayarauco. Sabores disponibles: Naranja, Piña Mango Naranja ", precio: 2800, img: "assets/img/guallarauco.jpg" },
        { id: 83, nombre: "Bebidas 500 mL", descripcion: "Bebidas gaseosas. Sabores disponibles: Coca Cola, Fanta, Sprite", precio: 1700, img: "assets/img/bebidas15l.webp" },
        { id: 84, nombre: "Jugo Del Valle 300 mL Boca Ancha", descripcion: "Jugo de frutas en botella de vidrio. Sabores disponibles: Durano, Piña, Naranja", precio: 1500, img: "assets/img/delvalle300ml.jpg" },
        { id: 85, nombre: "Bebidas 350 mL", descripcion: "Bebidas gaseosas. Sabores disponibles: Coca Cola, Fanta, Sprite", precio: 1200, img: "assets/img/latas.jpg" },
        { id: 86, nombre: "Agua embotelladas 500 mL", descripcion: "Agua con gas y sin gas", precio: 1000, img: "assets/img/agua.webp" },
    ]
};