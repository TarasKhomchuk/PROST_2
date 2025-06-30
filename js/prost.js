document.addEventListener('DOMContentLoaded', function() {
  const burgerButton = document.getElementById('burger');
  if (burgerButton) {
    burgerButton.addEventListener('click', function() {
        
      console.log('Клік по бургер-меню!'); 
    });
  }
});