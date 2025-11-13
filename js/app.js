// =========================================
// Tienda Urbana - app.js (2025 Optimizado)
// =========================================

// ====== SLIDER ======
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  if (slides.length > 0) {
    let current = 0;
    slides[current].classList.add('active');
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 4000);
  }
});

// ====== PRODUCTOS ======
const productos = [
  { id: 1, nombre: "Nike Shox TL", precio: 185000, imagen: "img/Nike-Shox-TL.jpeg" },
  { id: 2, nombre: "Puma Roma BMW M Motorsport", precio: 170000, imagen: "img/Puma-Roma-BMW-M-Motorsport.jpeg" },
  { id: 3, nombre: "Lacoste Elite Active", precio: 180000, imagen: "img/Item-3.jpeg" },
  { id: 4, nombre: "Lacoste Elite Active", precio: 180000, imagen: "img/Item-4.jpeg" },
  { id: 5, nombre: "Running BOSS Jonah Runn Merl", precio: 170000, imagen: "img/Item-5.jpeg" },
  { id: 6, nombre: "Lacoste N48", precio: 180000, imagen: "img/Item-6.jpeg" },
  { id: 7, nombre: "PUMA Club II", precio: 170000, imagen: "img/Item-7.jpeg" },
  { id: 8, nombre: "PUMA Club II", precio: 170000, imagen: "img/Item-8.jpeg" },
  { id: 9, nombre: "BOSS Kai Runn", precio: 170000, imagen: "img/Item-9.jpeg" },
  { id: 10, nombre: "Hugo Boss", precio: 170000, imagen: "img/Item-10.jpeg" },
  { id: 11, nombre: "BOSS negras", precio: 170000, imagen: "img/Item-11.jpeg" },
  { id: 12, nombre: "Lacoste Men's Elite Active", precio: 180000, imagen: "img/Item-12.jpeg" },
  { id: 13, nombre: "Adidas Climawarm", precio: 190000, imagen: "img/Item-13.jpeg" },
  { id: 14, nombre: "Nike Air Force 1", precio: 160000, imagen: "img/Item-14.jpeg" },
  { id: 15, nombre: "Nike Air Force 1", precio: 160000, imagen: "img/Item-15.jpeg" },
  { id: 16, nombre: "Air Jordan 3 Retro", precio: 180000, imagen: "img/Item-16.jpeg" },
  { id: 17, nombre: "Nike Air Jordan 3 x A Ma Maniére", precio: 180000, imagen: "img/Item-17.jpeg" },
  { id: 18, nombre: "Air Jordan 3 Retro", precio: 180000, imagen: "img/Item-18.jpeg" },
  { id: 19, nombre: "Adidas Climawarm", precio: 190000, imagen: "img/Item-19.jpeg" },
  { id: 20, nombre: "Puma BMW M Motorsport Roma", precio: 170000, imagen: "img/Item-20.jpeg" },
  { id: 21, nombre: "Nike V2K Run", precio: 180000, imagen: "img/Item-21.jpeg" },
  { id: 22, nombre: "Fila Ray", precio: 180000, imagen: "img/Item-22.jpeg" },
  { id: 23, nombre: "Adidas Ultraboost", precio: 170000, imagen: "img/Item-23.jpeg" },
  { id: 24, nombre: "Adidas PureBOOST 5", precio: 170000, imagen: "img/Item-24.jpeg" },
  { id: 25, nombre: "Adidas Bounce", precio: 170000, imagen: "img/Item-25.jpeg" },
  { id: 26, nombre: "On Cloudsurfer", precio: 170000, imagen: "img/Item-26.jpeg" },
  { id: 27, nombre: "Air Jordan 5 Retro Light Aqua", precio: 180000, imagen: "img/Item-27.jpeg" },
  { id: 28, nombre: "New Balance 574", precio: 170000, imagen: "img/Item-28.jpeg" },
  { id: 29, nombre: "New Balance 574", precio: 170000, imagen: "img/Item-29.jpeg" },
  { id: 30, nombre: "New Balance 574", precio: 170000, imagen: "img/Item-30.jpeg" },
  { id: 31, nombre: "New Balance 530", precio: 170000, imagen: "img/Item-31.jpeg" },
  { id: 32, nombre: "New Balance 574", precio: 170000, imagen: "img/Item-32.jpeg" },
  { id: 33, nombre: "New Balance 574", precio: 170000, imagen: "img/Item-33.jpeg" },
  { id: 34, nombre: "New Balance 574", precio: 170000, imagen: "img/Item-34.jpeg" },
  { id: 35, nombre: "New Balance 574", precio: 170000, imagen: "img/Item-35.jpeg" },
  { id: 36, nombre: "Le Coq Sportif", precio: 185000, imagen: "img/Item-36.jpeg" },
  { id: 37, nombre: "Le Coq Sportif", precio: 185000, imagen: "img/Item-37.jpeg" },
  { id: 38, nombre: "Le Coq Sportif", precio: 185000, imagen: "img/Item-38.jpeg" },
  { id: 39, nombre: "Le Coq Sportif Platinium 2", precio: 185000, imagen: "img/Item-39.jpeg" },
  { id: 40, nombre: "Nike SB Dunk Low Pro ISO", precio: 175000, imagen: "img/Item-40.jpeg" },
  { id: 41, nombre: "Nike Jordan Retro 1", precio: 180000, imagen: "img/Item-41.jpeg" },
  { id: 42, nombre: "Le Coq Sportif Omega X", precio: 185000, imagen: "img/Item-42.jpeg" },
  { id: 43, nombre: "Bota Reebok Ex-O-Fit Hi", precio: 185000, imagen: "img/Item-43.jpeg" },
  { id: 44, nombre: "Bota Reebok Ex-O-Fit Hi", precio: 185000, imagen: "img/Item-44.jpeg" },
  { id: 45, nombre: "BOSS TTNM EVO", precio: 180000, imagen: "img/Item-45.jpeg" }
];

// ====== CARRITO ======
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const contenedorProductos = document.getElementById('lista-productos');
const modal = document.getElementById('modalCarrito');
const itemsCarritoEl = document.getElementById('itemsCarrito');
const totalCarritoEl = document.getElementById('totalCarrito');

function renderProductos() {
  if (!contenedorProductos) return;
  contenedorProductos.innerHTML = '';
  productos.forEach(p => {
    const div = document.createElement('article');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <div class="product-body">
        <div class="product-title">${p.nombre}</div>
        <div class="product-price">$${p.precio.toLocaleString()}</div>
        <div class="product-actions">
          <button class="btn-main" onclick="agregarAlCarrito(${p.id})">Agregar</button>
        </div>
      </div>
    `;
    contenedorProductos.appendChild(div);
  });
}

function agregarAlCarrito(id) {
  const prod = productos.find(x => x.id === id);
  if (!prod) return;
  const existe = carrito.find(i => i.id === id);
  if (existe) existe.cantidad++;
  else carrito.push({ ...prod, cantidad: 1 });
  guardarCarrito();
  actualizarContadores();
  if (modal && modal.style.display === 'flex') mostrarCarrito();
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(i => i.id !== id);
  guardarCarrito();
  actualizarContadores();
  mostrarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
  actualizarContadores();
  mostrarCarrito();
}

function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function actualizarContadores() {
  const cantidad = carrito.reduce((a,b)=>a+(b.cantidad||0),0);
  document.querySelectorAll('#cantidadCarrito, #cartCountTop, #cantidadPedido').forEach(el=>{
    if (el) el.textContent = cantidad;
  });
}

function mostrarCarrito() {
  if (!modal) return;
  itemsCarritoEl.innerHTML = '';
  if (carrito.length === 0) {
    itemsCarritoEl.innerHTML = '<p>Tu carrito está vacío 🛍️</p>';
    totalCarritoEl.textContent = 'Total: $0';
    modal.style.display = 'flex';
    return;
  }

  let total = 0;
  carrito.forEach(item=>{
    total += item.precio * item.cantidad;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.nombre}</div>
        <div class="cart-item-qty">Cantidad: ${item.cantidad} · $${(item.precio*item.cantidad).toLocaleString()}</div>
      </div>
      <div>
        <button onclick="eliminarDelCarrito(${item.id})" class="btn-danger">Eliminar</button>
      </div>
    `;
    itemsCarritoEl.appendChild(div);
  });

  totalCarritoEl.textContent = `Total: $${total.toLocaleString()}`;
  modal.style.display = 'flex';
}

// ====== EVENTOS ======
document.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});
document.addEventListener('DOMContentLoaded', ()=>{
  renderProductos();
  actualizarContadores();
  const cerrar = document.getElementById('cerrarModal');
  if (cerrar) cerrar.addEventListener('click', ()=> modal.style.display = 'none');
  const vaciar = document.getElementById('vaciarCarrito');
  if (vaciar) vaciar.addEventListener('click', ()=> { if (confirm('Vaciar carrito?')) vaciarCarrito(); });
});

window.agregarAlCarrito = agregarAlCarrito;
window.eliminarDelCarrito = eliminarDelCarrito;
window.mostrarCarrito = mostrarCarrito;
window.vaciarCarrito = vaciarCarrito;
// ===============================
// Animación: Fade-In al hacer scroll
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.2, // visible en un 20%
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fadeEl => appearOnScroll.observe(fadeEl));
});
