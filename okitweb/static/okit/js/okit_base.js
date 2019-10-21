/*
** Add handler functionality
 */

function handleNavMenuClick(evt) {
    console.info('Navigation Menu Clicked');
    let element = document.getElementById("console-nav-menu-panel");
    element.classList.toggle("nav-menu-panel-show");
}

function hideNavMenu() {
    let element = document.getElementById("console-nav-menu-panel");
    element.classList.remove("nav-menu-panel-show");
}

$(document).ready(function() {
    document.getElementById('nav-menu-button').addEventListener('click', handleNavMenuClick, false);
});
