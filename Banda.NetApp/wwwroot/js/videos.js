const API_KEY = 'AIzaSyCV_QclEZ7HdeER9406q7e9xlJFtyQ0dtw';  // Substitua com sua chave da API
const CHANNEL_ID = 'UCmJPCo41eDqznRxReaU-z5A'; // ID do canal
const ITEMS_PER_PAGE = 5; // Número de vídeos para carregar por vez

let nextPageToken = '';
let loading = false;
let allVideosLoaded = false;

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

async function loadChannelVideos() {
    if (loading || allVideosLoaded) return; // Evitar múltiplas requisições simultâneas

    loading = true;

    // URL para obter o ID da playlist de uploads
    const channelInfoUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`;

    try {
        const data = await fetchData(channelInfoUrl);
        if (!data.items.length) {
            throw new Error('No channel data found');
        }

        const playlistId = data.items[0].contentDetails.relatedPlaylists.uploads;

        // URL para obter vídeos da playlist com paginação
        const videosUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${API_KEY}&maxResults=${ITEMS_PER_PAGE}${nextPageToken ? `&pageToken=${nextPageToken}` : ''}`;

        const videosData = await fetchData(videosUrl);
        const videos = videosData.items;
        nextPageToken = videosData.nextPageToken;

        if (!nextPageToken) {
            allVideosLoaded = true; // Marca que todos os vídeos foram carregados
        }

        const videosHtml = videos.map(video => `
            <div>
                <h3>${video.snippet.title}</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.snippet.resourceId.videoId}" frameborder="0" allowfullscreen></iframe>
            </div>
        `).join('');

        document.getElementById('channel-videos').insertAdjacentHTML('beforeend', videosHtml);
    } catch (error) {
        console.error('Error fetching videos:', error);
        document.getElementById('channel-videos').textContent = 'Error fetching videos.';
    } finally {
        loading = false;
    }
}

function onScroll() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.offsetHeight;

    if (scrollPosition >= pageHeight - 90) { // Carregar mais vídeos quando o usuário está perto do final da página
        loadChannelVideos();
    }
}

// Adicionar event listener para rolagem da página
window.addEventListener('scroll', onScroll);

// Carregar vídeos iniciais quando a página carregar
window.onload = () => {
    loadChannelVideos(); // Carregar a primeira página de vídeos
};
