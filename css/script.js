var menuAbierto = false;

function toggleMenu(event) {
    var menuContainer = document.getElementById("menu-container");
    menuAbierto = !menuAbierto; // Invierte el estado del menú
    menuContainer.style.right = menuAbierto ? "0" : "-300px"; // Abre o cierra el menú
}
  
function closeMenu(event) {
    var menuContainer = document.getElementById("menu-container");
    var isOpen = menuContainer.style.right > "0px";
    if (isOpen && event.target.closest('.menu-container') === null) {
        menuContainer.style.right = "-300px"; // Oculta el menú solo si está abierto y se hace clic fuera de él
    }
}