// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener("DOMContentLoaded", function () {


    function darkNavbar() {

        var navbar = document.querySelector('.navbarCustom');

        // Function to add or remove navbarScrolled class
        function checkScroll() {
            if (window.scrollY > 400) {
                navbar.classList.add('navbarScrolled');
            } else {
                navbar.classList.remove('navbarScrolled');
            }
        }

        // 
        checkScroll();

        // 
        window.addEventListener('scroll', checkScroll);
    }
    darkNavbar();


});


    function blurMenuDrop() { //turn on or off the blur filter.

        //Div to "blur" effect.
        var blurState = document.querySelector('.overlay');
        var computedStyle = window.getComputedStyle(blurState)
        //Div to "shadow" effect behind.
        var shadowState = document.querySelector('.shadowOverlay')


        if (computedStyle.filter === "blur(3px)") { //remove effects
            blurState.style.filter = "none";
            shadowState.style.opacity = "0";
            
        }
        else {
            blurState.style.filter = "blur(3px)"; //add effects
            shadowState.style.opacity = "1.0";
        }


    }

