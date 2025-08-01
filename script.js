const menu = document.getElementById("menu");
const btn = document.querySelector(".links");

menu.addEventListener("click", function () {
    btn.classList.toggle('active');

    if (menu.classList.contains('ri-menu-5-line')) {

        menu.classList.remove('ri-menu-5-line');
        menu.classList.add('ri-close-line');

    } else {

        menu.classList.remove('ri-close-line');
        menu.classList.add('ri-menu-5-line');

    }
});
