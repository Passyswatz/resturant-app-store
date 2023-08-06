

   // Get references to the menu icon and the menus
   const menuIcon = document.getElementById('menu-button');
   const menus = document.querySelector('.menus-mobile');
 
   
   // Function to toggle the visibility of the menus
   function toggleMenus() {
     menus.classList.toggle('hidden');
 }
 
   // Add a click event listener to the menu icon
   menuIcon.addEventListener('click', toggleMenus);