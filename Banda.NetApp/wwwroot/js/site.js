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
        autoplay: {
            delay: 9000, 
            disableOnInteraction: false,
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
                        description: '“Felipe Takashi” vocalista, fundador da øpio, homossexual publicamente assumido, grunge e fodido financeiramente, possui a habilidade de se tornar invisível – mas apenas quando ninguém está olhando.',
                        link: 'https://www.instagram.com/felipe.takashii/',
                        neonColor: 'neonGlow-felipe',
                        color: 'rgba(255, 0, 255, 0.7)'
                    },
                    enzo: {
                        role: 'BATEIRISTA',
                        description: '“Enzo" bateirista e letrista, tem o incrível poder mágico de correr 10cm acima do solo – mas sempre que corre fica pelado. Sua criatividade nas composições da banda ressoam com temas de liberdade e identidade.',
                        link: 'https://www.instagram.com/enzoispunk/',
                        neonColor: 'neonGlow-enzo',
                        color: 'rgba(255, 20, 147, 0.7)'
                    },
                    ygor: {
                        role: 'GUITARRISTA',
                        description: '“Ygor" o guitarrista, possui a habilidade de saber exatamente quando alguém vai espirrar – mas sem conseguir avisar a tempo. Ele é a alma dos solos da banda, criando melodias hipnotizantes que fazem o público vibrar.',
                        link: 'https://www.instagram.com/ygorleaoo_/',
                        neonColor: 'neonGlow-ygor',
                        color: 'rgba(0, 255, 255, 0.8)'
                    },
                    gustavo: {
                        role: 'GUITARRISTA',
                        description: '“Gustavo" o guitarrista, tem o poder de ter seus pensamentos narrados por Morgan Freeman – mas somente ele pode ouvir. Gustavo é frequentemente associado pelas fãs de todas as idades como o asiático mais bonito da banda.',
                        link: 'https://www.instagram.com/gushikenmusic/',
                        neonColor: 'neonGlow-gustavo',
                        color: 'rgba(255, 69, 0, 0.8)'
                    },
                    gato: {
                        role: 'GATO',
                        description: '“O gato é simplesmente o gato de terno."',
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
                //root.style.setProperty('--color-team-description', `rgba(232,48,109,255)`);
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


    //


    function pokeFingerAnimation() {
        const pokeFinger = document.querySelector('.imgFinger');
        const button = document.getElementById('buttonLeiaMais');
        button.style.animation = 'neonGlow-Button ease-in-out 7s infinite';

        // Function to reset pokeFinger animation
        function resetPokeFingerAnimation() {
            pokeFinger.style.animation = 'none';
            setTimeout(() => {
                pokeFinger.style.animation = 'pokeFinger 2s ease-in-out';
            }, 50);
        }

        // Initial pokeFinger animation
        resetPokeFingerAnimation();

        // Set interval to reset pokeFinger animation every 6 seconds
        setInterval(resetPokeFingerAnimation, 7200);
    }

    pokeFingerAnimation(); // Start the animation loop



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

