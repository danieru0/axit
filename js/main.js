const btn = document.getElementById('nav-hamburger'),
      menu = document.getElementById('menu');

btn.addEventListener('click', function() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
});