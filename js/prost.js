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

function showPopup(elementName){
  if (elementName)
  document.getElementById(elementName).classList.toggle('popup_active');
}

function closePopup(elementName){
  if (elementName)
    document.getElementById(elementName).classList.toggle('popup_active');
}