

//TESTING:

//document.addEventListener('DOMContentLoaded', async () => {
//    const activeFilter = document.querySelector('.activatedFilter')

//    if (activeFilter.classList.contains('fa-youtube')) {

//        const API_KEY = 'AIzaSyCV_QclEZ7HdeER9406q7e9xlJFtyQ0dtw'; //My personagel API for google platform.
//        const CHANNEL_ID = 'UCmJPCo41eDqznRxReaU-z5A' //ID channel.

//        async function fetchAllVideos() { // API Function to find the youtube channel ópio videos.
//            let nextPageToken = ''
//            const allVideoIds = []
//            do {
//                try {
//                    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=relevance&maxResults=50&pageToken=${nextPageToken}`);
//                    const data = await response.json();
//                    const videoIds = data.items.map(item => item.id.videoId).filter(id => id)
//                    allVideoIds.push(...videoIds)
//                    nextPageToken = data.nextPageToken || ''
//                } catch (error) {
//                    console.error('Erro ao buscar vídeos do YouTube:', error)
//                    break;
//                }
//            } while (nextPageToken)
//            return allVideoIds
//        }

//        // IntersectionObserver (helps the lazy loading).
//        function setupIntersectionObserver() {
//            return new IntersectionObserver((entries, observer) => {
//                entries.forEach(entry => {
//                    if (entry.isIntersecting) {
//                        const iframe = entry.target.querySelector('iframe')
//                        const videoId = iframe.dataset.videoId;
//                        iframe.src = `https://www.youtube.com/embed/${videoId}`
//                        observer.unobserve(entry.target)
//                    }
//                });
//            }, { threshold: 0.1 })
//        }

//        // Main function to load videos.
//        async function loadVideos() {
//            if (activeFilter) {
//                const videoUrls = await fetchAllVideos()
//                const observer = setupIntersectionObserver()
//                const videoListElement = document.getElementById('channel-videos')

//                videoUrls.forEach((videoId) => {
//                    if (videoId) {

//                        const videoElement = document.createElement('div')
//                        videoElement.className = 'videoDiv'
//                        videoElement.innerHTML = `<iframe data-video-id="${videoId}" allowfullscreen></iframe>`

//                        videoListElement.appendChild(videoElement)

//                        observer.observe(videoElement)
//                    }
//                });
//            }
//        }
//        loadVideos()


//    }
//    else if (activeFilter.contains('fa-instagram')) {

//    }

//});



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
        { url: "https://www.instagram.com/reel/C9rXYZABC12/", id: "video2" },
        // Adicione mais vídeos conforme necessário
    ];

}

function createInstagramEmbed(url, id) {
    return `
    <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${url}?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
        <div style="padding:16px;">
            <a href="${url}?utm_source=ig_embed&amp;utm_campaign=loading" style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
                <!-- Conteúdo do bloco de incorporação -->
            </a>
        </div>
    </blockquote>
  `;
}


function loadVideo(video) {
    const container = document.getElementById(video.id);
    container.innerHTML = createInstagramEmbed(video.url, video.id);
    // Reexecute o script de incorporação do Instagram para garantir que os vídeos sejam incorporados corretamente
    if (window.instgrm) {
        instgrm.Embeds.process();
    }
}

function lazyLoadVideos(videos) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadVideo(entry.target.dataset);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.setAttribute('id', video.id);
        videoElement.setAttribute('data-url', video.url);
        videoElement.style.minHeight = '500px'; // Ajuste conforme necessário para espaço reservado
        document.body.appendChild(videoElement);
        observer.observe(videoElement);
    });
}

// Chame a função com seu array de dados
lazyLoadVideos(videoData);



//Change filter (youtube,instagram,etc)
function toggleFilterFunction(event) {
    const iconClicked = event.currentTarget; // Current button clicked.

    // All used columns
    const channelVideos = document.getElementById('channel-videos');
    const instagramVideos = document.getElementById('instagram-videos');
    const todosVideos = document.getElementById('todos-videos');

    // Removing all activatedFilter classes from icons
    document.querySelectorAll('button i').forEach(icon => {
        icon.classList.remove('activatedFilter');
    });

    // Add the class to current clicked icon.
    iconClicked.classList.add('activatedFilter');

    // Determine which section to show based on clicked icon
    if (iconClicked.classList.contains('fa-youtube')) {
        // Show YouTube Div
        showSection(channelVideos, instagramVideos, todosVideos);
    } else if (iconClicked.classList.contains('fa-instagram')) {
        // Show Instagram Div
        showSection(instagramVideos, channelVideos, todosVideos);
    } else {
        // Show All Videos
        showSection(todosVideos, channelVideos, instagramVideos);
    }
}

// Function to show the specified section and hide others
function showSection(showElement, hideElement1, hideElement2) {
    // Hide other elements
    hideElement1.classList.add('notVisible');
    hideElement2.classList.add('notVisible');

    setTimeout(() => {
        hideElement1.style.display = 'none';
        hideElement2.style.display = 'none';
    }, 400);

    // Show the selected element
    showElement.style.display = 'flex'; // Set display first to ensure it's rendered
    setTimeout(() => {
        showElement.classList.remove('notVisible');
    }, 10);
}



