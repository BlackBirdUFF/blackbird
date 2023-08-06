var larguraTela = window.innerWidth;
var menuHambBarras = document.getElementById("menu-barras");
var menuHambX = document.getElementById("menu-x");
var janelaMenu = document.getElementById("janela-menu");

function toggleMenu(){
    if (window.getComputedStyle(menuHambX).display == 'none'){
        menuHambBarras.style.display = 'none';
        menuHambX.style.display = 'block';
        janelaMenu.style.display = 'flex';
    }else{
        menuHambBarras.style.display = 'block';
        menuHambX.style.display = 'none';
        janelaMenu.style.display = 'none';
    }
}

console.log("========INICIO========================")


window.addEventListener("resize", resetarMenu);

function resetarMenu(){
    larguraTela = window.innerWidth;
    if (larguraTela > 850) {
        hideMenu1();
        hideMenu2();
        hideMenu3();
        hideMenu4();
        hideMenu5();
        hideMenu6();
    } else {
        showMenu1();
        showMenu2();
        showMenu3();
        showMenu4();
        showMenu5();
        showMenu6();
        
    }
}




function showMenu1() {
    // larguraTela = window.innerWidth;
    // if (larguraTela > 850){
    var expandedMenu = document.getElementById("menu-susp1");
    expandedMenu.style.display = "inherit";
    // }
}

function hideMenu1() {
    larguraTela = window.innerWidth;
    if (larguraTela > 850){
        var expandedMenu = document.getElementById("menu-susp1");
        expandedMenu.style.display = "none";
    }
}

function showMenu2() {
    // larguraTela = window.innerWidth;
    // if (larguraTela > 850){
    var expandedMenu = document.getElementById("menu-susp2");
    expandedMenu.style.display = "inherit";
    // }
}

function hideMenu2() {
    larguraTela = window.innerWidth;
    if (larguraTela > 850){
        var expandedMenu = document.getElementById("menu-susp2");
        expandedMenu.style.display = "none";
    }
}

function showMenu3() {
    var expandedMenu = document.getElementById("menu-susp3");
    expandedMenu.style.display = "inherit";
}

function hideMenu3() {
    larguraTela = window.innerWidth;
    if (larguraTela > 850){
        var expandedMenu = document.getElementById("menu-susp3");
        expandedMenu.style.display = "none";
    }
}

function showMenu4() {
    var expandedMenu = document.getElementById("menu-susp4");
    expandedMenu.style.display = "inherit";
}

function hideMenu4() {
    larguraTela = window.innerWidth;
    if (larguraTela > 850){
        var expandedMenu = document.getElementById("menu-susp4");
        expandedMenu.style.display = "none";
    }
}


function showMenu5() {
    var expandedMenu = document.getElementById("menu-susp5");
    expandedMenu.style.display = "inherit";
}

function hideMenu5() {
    larguraTela = window.innerWidth;
    if (larguraTela > 850){
        var expandedMenu = document.getElementById("menu-susp5");
        expandedMenu.style.display = "none";
    }
}

function showMenu6() {
    var expandedMenu = document.getElementById("menu-susp6");
    expandedMenu.style.display = "inherit";
}

function hideMenu6() {
    larguraTela = window.innerWidth;
    if (larguraTela > 850){
        var expandedMenu = document.getElementById("menu-susp6");
        expandedMenu.style.display = "none";
    }
}

