

// All needed columns.
const channelVideos = document.getElementById('channel-videos');
const instagramVideos = document.getElementById('instagram-videos');
const favoriteVideos = document.getElementById('favorite-videos');

// Setting youtube to main column (disable all others).
instagramVideos.style.display = 'none' 
favoriteVideos.style.display = 'none'
function youtubeArea() {

    const videoLinks = [
        { id: "bCJxa1vUZQc" },
        { id: "HxE0hruaurk" },
        { id: "CNgEvouas1s" },
        { id: "GpqRIeHYAeo" },
        { id: "OHB0LEyMTzI" },
        { id: "oAFH2oAM-Ac" },
        { id: "XV8kx4WnpqQ" },
        { id: "OcnSxdEz2S4" },
        { id: "1JyGDLvZ6cw" },
        { id: "pIDS7UeXdzo" },
        { id: "IKsw-0GWM0g" },
        { id: "PZOabn4tIGE" },
        { id: "yVKopdVJsLw" },
        { id: "zGtp1Td0lzA" },
        { id: "_gxvcqSMlsw" },
        { id: "N7MIbDHf2qk" },
        { id: "DnwnPhzAYO0" },
        { id: "h-ue0eemaEI" },
        { id: "0uFPYwjpqio" },
        { id: "FsIfLmFORHE" },
        { id: "q1q7r4HxTVw" }
    ] // Id videos instagram

    // Function to configure IntersectionObserver
    function setupIntersectionObserver() {
        return new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = entry.target.querySelector('iframe')
                    const videoId = iframe.dataset.videoId
                    iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1`
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.1 })
    }

    // Create videos
    const createVideoElement = (videoId) => {
        const videoElement = document.createElement('div')
        videoElement.className = 'videoDiv'
        videoElement.innerHTML = `<iframe data-video-id="${videoId}" loading="lazy" allowfullscreen></iframe>`
        return videoElement
    }

    // Function to load videos
    function loadVideosFromObject(videoLinks) {
        const loadObserver = setupIntersectionObserver() // IntersectionObserver to load videos
        const pauseObserver = setupPauseObserver() // IntersectionObserver to pause videos
        const videoListElement = document.getElementById('channel-videos')
        const fragment = document.createDocumentFragment()

        videoLinks.forEach(video => {
            const videoElement = createVideoElement(video.id)
            fragment.appendChild(videoElement)
            loadObserver.observe(videoElement)
            pauseObserver.observe(videoElement)
        })

        videoListElement.appendChild(fragment)
    }

    // IntersectionObserver function to pause videos
    function setupPauseObserver() {
        return new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const iframe = entry.target.querySelector('iframe')

                if (iframe && !entry.isIntersecting) {
                    // Send the message to pause the video
                    iframe.contentWindow.postMessage(
                        JSON.stringify({
                            event: 'command',
                            func: 'pauseVideo',
                            args: ''
                        }),
                        '*'
                    )
                }
            })
        }, { threshold: 0.1 })
    }

    // Initialize video loading on page load
    document.addEventListener('DOMContentLoaded', () => {
        loadVideosFromObject(videoLinks)
    })
} //Main function to create/load YOUTUBE videos.

// Call the main function youtube.
youtubeArea()



function instagramArea() {
    const videoData = [
        { url: "https://www.instagram.com/reel/C9qRDaBJHT9/", id: "video1" },
        { url: "https://www.instagram.com/p/C7kl1MipMp_/", id: "video2" },
        { url: "https://www.instagram.com/p/C7VQHAiJnzK/", id: "video3" },
        { url: "https://www.instagram.com/p/C7SkKjKvFPb/", id: "video4" },
        { url: "https://www.instagram.com/p/C7Id1Q8tj-t/", id: "video5" },
        { url: "https://www.instagram.com/p/C7DLY8NpJZ8/", id: "video6" },
    ];

    // Create Instagram embed element
    const createInstagramEmbed = (url, id) => {
        const videoElement = document.createElement('div');
        videoElement.className = 'instagram-video';
        videoElement.id = id;
        videoElement.innerHTML = `
            <blockquote class="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="${url}?utm_source=ig_embed&amp;utm_campaign=loading" 
                data-instgrm-version="14" 
                style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
                <div style="padding:16px;">
                    <a href="${url}?utm_source=ig_embed&amp;utm_campaign=loading" 
                       style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" 
                       target="_blank">
                        <!-- Conteúdo do bloco de incorporação -->
                    </a>
                </div>
            </blockquote>
            <script async src="//www.instagram.com/embed.js"></script>
        `;
        return videoElement;
    };

    // Load videos on demand
    function loadVideosOnDemand() {
        const container = document.getElementById('instagram-videos');
        const loadObserver = setupLoadObserver();

        videoData.forEach(video => {
            const videoElement = createInstagramEmbed(video.url, video.id);
            container.appendChild(videoElement);
            loadObserver.observe(videoElement);
        });
    }

    // IntersectionObserver to load videos
    function setupLoadObserver() {
        return new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const script = document.createElement('script');
                    script.src = "//www.instagram.com/embed.js";
                    script.async = true;
                    entry.target.appendChild(script);

                    if (window.instgrm) {
                        instgrm.Embeds.process();
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
    }

    // Initialize video loading on page load
    document.addEventListener('DOMContentLoaded', () => {
        loadVideosOnDemand();
    });
}

instagramArea()


function favoriteArea() {
    function setupIntersectionObserver() {
        return new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target.querySelector('video')
                    const videoSrc = video.dataset.videoSrc
                    video.src = videoSrc
                    video.load()
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 })
    }

    // Função para criar o elemento de vídeo
    function createVideoElement(videoSrc) {
        const videoElement = document.createElement('div')
        videoElement.className = 'videoDivl'
        videoElement.innerHTML = `
        <video data-video-src="${videoSrc}" controls preload="none" style="width: 100%; height: auto;">
            <!-- Erro ao carregar o vídeo. -->
            Seu navegador não suporta o elemento de vídeo.
        </video>
    `
        return videoElement
    }

    // Função para carregar vídeos
    function loadVideosFromObject(videoLinks) {
        const loadObserver = setupIntersectionObserver()
        const videoListElement = document.getElementById('favorite-videos');
        const fragment = document.createDocumentFragment()

        videoLinks.forEach(video => {
            const videoElement = createVideoElement(video.src)
            fragment.appendChild(videoElement)
            loadObserver.observe(videoElement)
        });

        videoListElement.appendChild(fragment)
    }

    // Exemplo de uso
    document.addEventListener('DOMContentLoaded', () => {
        const videoLinks = [
            { src: '/video/pinkMoneyTrack.mp4' },
            { src: '/video/masquepoha.mp4' },
            { src: '/video/masquepoha2.mp4' },
            { src: '/video/apertadinhos.com.br.mp4' },
            { src: '/video/felipeuberfodase.mp4' },
            { src: '/video/cachedoshow.mp4' },
            // Adicione mais vídeos aqui
        ]
        loadVideosFromObject(videoLinks)
    });

}
favoriteArea()


//Change filter (youtube,instagram,etc)
let currentTimeouts = []; // Array to keep track of active timeouts

function toggleFilterFunction(event) {
    const iconClicked = event.currentTarget; // Current button clicked.

    // Remove all activatedFilter classes from icons
    document.querySelectorAll('button i').forEach(icon => {
        icon.classList.remove('activatedFilter');
    });

    // Add the class to the currently clicked icon.
    iconClicked.classList.add('activatedFilter');

    // Determine which section to show based on the clicked icon
    if (iconClicked.classList.contains('fa-youtube')) {
        // Show YouTube Div
        showSection(channelVideos, instagramVideos, favoriteVideos);
    } else if (iconClicked.classList.contains('fa-instagram')) {
        // Show Instagram Div
        showSection(instagramVideos, channelVideos, favoriteVideos);
    } else {
        // Show All Videos
        showSection(favoriteVideos, channelVideos, instagramVideos);
    }
}

// Function to show the specified section and hide others
function showSection(showElement, hideElement1, hideElement2) {
    // Clear any existing timeouts
    currentTimeouts.forEach(timeout => clearTimeout(timeout));
    currentTimeouts = [];

    // Immediately set display of the element to be shown
    showElement.style.display = 'flex';
    setTimeout(() => {
        showElement.classList.remove('notVisible');
    }, 10);

    // Hide other elements after a short delay
    hideElement1.classList.add('notVisible');
    hideElement2.classList.add('notVisible');

    // Set timeouts to change the display property after the transition
    currentTimeouts.push(setTimeout(() => {
        hideElement1.style.display = 'none';
    }, 600));

    currentTimeouts.push(setTimeout(() => {
        hideElement2.style.display = 'none';
    }, 600));
}

