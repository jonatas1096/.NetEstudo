﻿function picturesLoad() {
    function createPictureElement(pictureSrc, alt) {
        const pictureElement = document.createElement('div');
        pictureElement.className = 'col-4 mb-1 divPicture';

        // Envolva a imagem em um link com os atributos do Fancybox
        pictureElement.innerHTML = `
            <a href="${pictureSrc}" data-fancybox="gallery" data-caption="${alt}">
                <img src="/img/logobranca.png" data-src="${pictureSrc}" alt="${alt}" class="lazy-image" loading="lazy">
            </a>`;

        return pictureElement;
    }

    function loadPicturesFromObject(picturesLinks) {
        const pictureListElement = document.getElementById('picturesGrid');

        const fragment = document.createDocumentFragment();

        picturesLinks.forEach(picture => {
            const pictureElement = createPictureElement(picture.src, picture.alt);
            fragment.appendChild(pictureElement);
        });

        pictureListElement.appendChild(fragment);
    }

    function lazyLoadImage(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-image');
                observer.unobserve(img);
            }
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const pictures = [
            { src: '/img/bandaopio1.jpg', alt: 'foto da banda' },
            { src: '/img/bandaopio2.jpg', alt: 'foto da banda 2' },
            { src: '/img/bandaopio3.png', alt: 'foto da banda 3' },
            { src: '/img/felipe2.jpg', alt: 'felipe tocando (ou possivelmente me ameaçando)' },
            { src: '/img/dengue.jpg', alt: 'a dengue esperando você sair' },
            { src: '/img/felipedengoso.jpg', alt: 'felipe com dengue' },
            { src: '/img/manoelgomes.jpg', alt: 'manoel gomes vídeos' },
            { src: '/img/namorados.jpg', alt: 'namorados' },
            { src: '/img/felipe.jpg', alt: 'integrante felipe' },
            { src: '/img/enzo.jpg', alt: 'integrante enzo' },
            { src: '/img/ygor.jpg', alt: 'integrante ygor' },
            { src: '/img/gustavo.jpg', alt: 'integrante gustavo' },
            { src: '/img/namorados2.jpg', alt: 'namorados2' },
            { src: '/img/sonicfeio.jpg', alt: 'sonic feio' },
            { src: '/img/messi.jpg', alt: 'melhor jogador da história' },
            { src: '/img/doninha.jpg', alt: 'doninha kkkkkkkk' },
            { src: '/img/skylab.jpg', alt: 'grande poeta.' },
            { src: '/img/mcpipokinha.jpg', alt: 'grande poeta 2.' },
        ];

        loadPicturesFromObject(pictures);

        const observer = new IntersectionObserver(lazyLoadImage, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });

        document.querySelectorAll('img.lazy-image').forEach(img => observer.observe(img));

        Fancybox.bind('[data-fancybox="gallery"]', { //Starting library fancybox.
            infinite: true,


        });
    });
}

picturesLoad();
