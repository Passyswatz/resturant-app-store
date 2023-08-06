  // Get references to the menu icon and the menus
  const menuIcon = document.getElementById('menu-button');
  const navbarLinks = document.querySelector('.navbar-menus');

  // Function to toggle the visibility of the menus
  function toggleMenus() {
      navbarLinks.classList.toggle('active');
  }

  // Add a click event listener to the menu icon
  menuIcon.addEventListener('click', toggleMenus);