var menuBtn = document.getElementById('menuBtn')
var sideNav = document.getElementById('sideNav')
var menu = document.getElementById('menu')

sideNav.style.right = "-250px";
menuBtn.onclick = function() {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.classList = "bi bi-x"
    } else{
        sideNav.style.right = "-250px";
        menu.classList = "bi bi-list"
    }
}
