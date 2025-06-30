document.addEventListener('DOMContentLoaded', function() {
  const burgerButton = document.getElementById('burger');
  

  if (burgerButton) {
    burgerButton.addEventListener('click', function() {
        this.classList.toggle('active');
        const menu = document.getElementById('menu');
        if (menu) 
            menu.classList.toggle('menu_mobile');
        
    });
  }
});