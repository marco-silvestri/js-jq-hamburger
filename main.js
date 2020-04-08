
var hamburgerOpen = $('.header-right a');
var hamburgerClose = $('.close');
var hamburgerMenu = $('.hamburger-menu');

hamburgerOpen.click(function () { 
    hamburgerMenu.css('display', 'block');
});

hamburgerClose.click(function () { 
    hamburgerMenu.css('display', 'none');
});
