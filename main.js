
// References
var hamburgerOpen = $('.header-right a');
var hamburgerClose = $('.close');
var hamburgerMenu = $('.hamburger-menu');

// Open ze menu
hamburgerOpen.click(function () { 
    hamburgerMenu.css('display', 'block');
});


// Close ze menu
hamburgerClose.click(function () { 
    hamburgerMenu.css('display', 'none');
});
