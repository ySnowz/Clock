const timeText = document.getElementById('msg')
let hourElement = document.getElementById('hours')
let minutesElement = document.getElementById('minutes')
let videoBackground = document.getElementById('video')

let onLoadSite = ()=>{
    let currentTime = new Date()
    let currentHours = currentTime.getHours()
    let currentMinutes = currentTime.getMinutes()

    hourElement.innerText = currentHours
    minutesElement.innerText = currentMinutes

    if (currentHours < 12) {
        timeText.innerText = "Good morning"
        videoBackground.src = "./videos/sunrise.mp4"
    }
    else if (currentHours >= 12 && currentHours < 18) {
        timeText.innerText = "Good afternoon"
        videoBackground.src = "./videos/sunset.mp4"
    }
    else if (currentHours >= 18 || currentHours < 5) {
        timeText.innerText = "Good night"
        videoBackground.src = "./videos/night.mp4"
    }
}


let updateTime = setInterval(() => {
    let currentTime = new Date()
    let currentHours = currentTime.getHours()
    let currentMinutes = currentTime.getMinutes()

    hourElement.innerText = currentHours
    minutesElement.innerText = currentMinutes

    if (currentHours < 12) {
        timeText.innerText = "Good morning"
        videoBackground.src = "./videos/sunrise.mp4"
    }
    else if (currentHours >= 12 && currentHours < 18) {
        timeText.innerText = "Good afternoon"
        videoBackground.src = "./videos/sunset.mp4"
    }
    else if (currentHours >= 18 || currentHours < 5) {
        timeText.innerText = "Good night"
        videoBackground.src = "./videos/night.mp4"
    }
}, 60000)

onLoadSite()
updateTime()