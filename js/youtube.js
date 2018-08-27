const videoList = document.querySelectorAll('ytd-playlist-video-renderer')
let parent = videoList[0].parentElement
parent.innerHTML = ''

const videos = Array.from(videoList).reverse()

videos.forEach(video => {
  parent.appendChild(video)
})
