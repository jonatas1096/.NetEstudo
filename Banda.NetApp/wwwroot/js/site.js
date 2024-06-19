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
            slideChange: function () {

                //To membersCarousel
                const membersData = {
                    felipe: {
                        role: 'VOCALISTA',
                        description: '“Felipe Takashi” vocalista, fundador da ópio, homossexual publicamente assumido, grunge e fodido financeiramente, é o antecessor de bla, lorem ipsum lorem, bla bla bla bla bla, lorem ipsum lorembla bla bla bla bla, lorem ipsum lorem"',
                        link: 'https://www.instagram.com/felipe.takashii/',
                        neonColor: 'neonGlow-felipe',
                        color: 'rgba(255, 0, 255, 0.6)'
                    },
                    enzo: {
                        role: 'BATEIRISTA',
                        description: '“Batuca mucho"',
                        link: 'https://www.instagram.com/enzoispunk/',
                        neonColor: 'neonGlow-enzo',
                        color: 'rgba(255, 20, 147, 0.6)'
                    },
                    ygor: {
                        role: 'GUITARRISTA',
                        description: '“Toca mucha guitarita"',
                        link: 'https://www.instagram.com/ygorleaoo_/',
                        neonColor: 'neonGlow-ygor',
                        color: ' rgba(194, 0, 255, 0.6)'
                    },
                    gustavo: {
                        role: 'GUITARRISTA',
                        description: '“Toca mucha guitarita"',
                        link: 'https://www.instagram.com/gushikenmusic/',
                        neonColor: 'neonGlow-gustavo',
                        color: 'rgba(255, 69, 0, 0.6)'
                    },
                    gato: {
                        role: 'GATO',
                        description: '“Mascote oficial da banda ópio."',
                        link: 'https://www.petz.com.br/blog/pets/gatos/perfil-de-gato/',
                        neonColor: 'neonGlow-gato',
                        color: 'rgba(0,185,165,255)'

                    }
                };


                //Section of card glow color (individual).
                const activeIndex = this.activeIndex; //getting the actual index
                const activeSlide = this.slides[activeIndex]; //select the slide of this index
                const activeImg = activeSlide.querySelector('img'); //In this slide, getting the image

                const memberId = activeImg.id
                const data = membersData[memberId]

                neonColor = data.neonColor
                activeImg.style.animation = `${neonColor} 2.5s ease-in-out infinite alternate`;


                //Section of member's description.

                const memberRole = document.querySelector('.aboutMember h2');
                const memberDescription = document.querySelector('.aboutMember p')
                const memberLink = document.querySelector('.aboutMember a')

                memberRole.classList.remove('activated')
                memberDescription.classList.remove('activated')
                memberLink.classList.remove('activated')


                //To get "root" in css and change the var "--color-team-description" value.
                const root = document.documentElement;

                root.style.setProperty('--color-team-description', `${data.color}`);

                setTimeout(() => {

                    memberRole.classList.add('activated')
                    memberDescription.classList.add('activated')
                    memberLink.classList.add('activated')

                    memberRole.textContent = data.role
                    memberDescription.textContent = data.description
                    memberLink.href = data.link

                }, 400)
                
                

            }
        }
    });

    

});




    function blurMenuDrop() { //turn on or off the blur filter.

        //Div to "blur" effect.
        var blurState = document.querySelector('.overlay');
        var shadowState = document.querySelector('.shadowOverlay');
        var computedStyle = window.getComputedStyle(blurState)
      

        if (computedStyle.filter.includes("blur(3px)")) { //remove effects
            blurState.style.filter = "none";
            shadowState.style.opacity = "0";
        }
        else {
            blurState.style.filter = "blur(3px)"; //add effects
            shadowState.style.opacity = "1";
        }


    }

