const videoList = document.querySelectorAll('ytd-playlist-video-renderer')
const videos = Array.from(videoList).reverse()
let largeThumbnail = document.getElementById('playlist-thumbnails')
let thumbnailImg = largeThumbnail.getElementsByTagName('img')[0]
const parent = videoList[0].parentElement
parent.innerHTML = ''

videos.forEach((video, index) => {
  const numElement = video.getElementsByTagName('yt-formatted-string')[0]
  numElement.textContent = index + 1
  parent.appendChild(video)
})
