// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.





document.addEventListener("DOMContentLoaded", function () {
    //

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

    //


    //Initializing swiper carousel (library)
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        effect: 'coverflow',
        centeredSlides: true,
        grabCursor: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 0.9,
            slideShadows: true,
        },
        // pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChange: function (){
                const activeIndex = this.activeIndex; //getting the actual index

                const activeSlide = this.slides[activeIndex]; //select the slide of this index
                const activeImg = activeSlide.querySelector('img'); //In this slide, getting the image

                const memberRole = document.querySelector('.aboutMember h2');
                const memberDescription = document.querySelector('.aboutMember p')
                const memberLink = document.querySelector('.aboutMember a')
                
                if (activeImg.id === 'felipe') {
                    memberRole.textContent = 'VOCALISTA';
                    memberDescription.textContent = '“Felipe Takashi”: vocalista, fundador da ópio, homossexual publicamente assumido, grunge e fodido financeiramente, é o antecessor de bla, lorem ipsum lorem, bla bla bla bla bla, lorem ipsum lorembla bla bla bla bla, lorem ipsum lorem"'
                    memberLink.href = 'https://www.instagram.com/felipe.takashii/'
                }
                else if (activeImg.id === 'enzo') {
                    memberRole.textContent = 'BATEIRISTA';
                    memberDescription.textContent = '“Batuca mucho"'
                    memberLink.href = 'https://www.instagram.com/enzoispunk/'
                }
                else if (activeImg.id === 'ygor') {
                    memberRole.textContent = 'GUITARRISTA';
                    memberDescription.textContent = '“Toca mucha guitarita"'
                    memberLink.href = 'https://www.instagram.com/ygorleaoo_/'
                }
                else if (activeImg.id === 'gustavo') {
                    memberRole.textContent = 'GUITARRISTA';
                    memberDescription.textContent = '“Toca mucha guitarita"'
                    memberLink.href = 'https://www.instagram.com/gushikenmusic/'
                }
                else {
                    memberRole.textContent = 'GATO';
                    memberDescription.textContent = '“Mascote oficial da banda ópio."'
                    memberLink.href = 'https://www.petz.com.br/blog/pets/gatos/perfil-de-gato/'
                }

            }
        }
    });

    

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

