const videoList = document.querySelectorAll('ytd-playlist-video-renderer')
const parent = videoList[0].parentElement
parent.innerHTML = ''

const videos = Array.from(videoList).reverse()

videos.forEach((video, index) => {
  console.log(video)
  const numElement = video.getElementsByTagName('yt-formatted-string')[0]
  numElement.textContent = index + 1
  parent.appendChild(video)
})
