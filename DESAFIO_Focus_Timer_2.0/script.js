const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonAddMinutes = document.querySelector('.addMinutes');
const buttonDecrementMinutes = document.querySelector('.decrementMinutes');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const buttonForest = document.querySelector('.forest');
const buttonRain = document.querySelector('.rain');
const buttonCoffeeShop = document.querySelector('.coffeeShop');
const buttonFireHouse = document.querySelector('.fireHouse');
const cards = document.querySelector('.cards')


const buttons = document.querySelectorAll('.cards button');

function mudaCor() {
    const buttons = document.querySelectorAll('.cards button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const svg = this.querySelector('svg path:first-child');
            if (svg.getAttribute('fill') === '#E1E1E6') {
                svg.setAttribute('fill', '#02799D');
            } else {
                svg.setAttribute('fill', '#E1E1E6');
            }
        });
    });
}

let setTimeoutId

function countDown() {
    setTimeoutId = setTimeout(function() {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)

        secondsDisplay.textContent = '00'
        if (minutes <= 0 && seconds <=0) {
            timeEnd()
            return

        }
        if (seconds <= 0) {
            seconds = 60;
            minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
        }
        secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
        countDown()
    }, 1000)

}
buttonPlay.addEventListener('click', function() {
    countDown()
    pressButton()
})

buttonStop.addEventListener('click', function() {
    clearTimeout(setTimeoutId)
    pressButton()

})
buttonForest.addEventListener('click', function() {
    bgAudio.play();
    mudaCor()

})
buttonRain.addEventListener('click', function() {
    bgAudioRain.play();
    mudaCor()
})

buttonCoffeeShop.addEventListener('click', function() {
    bgAudioCoffeeShop.play()
    mudaCor()
})

buttonFireHouse.addEventListener('click', function() {
    bgAudioFireHouse.play()
    mudaCor()
})

buttonAddMinutes.addEventListener('click', function() {
    let minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes + 5).padStart(2, '0')
})

buttonDecrementMinutes.addEventListener('click', function() {
    let minutes = Number(minutesDisplay.textContent)
    let newMinutes = String(minutes - 5).padStart(2, '0');
    if (newMinutes >= 0) {
        minutesDisplay.textContent = newMinutes
    } else {
        minutesDisplay.textContent = '00'
    }
})



const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const bgAudio = new Audio("https://github.com/cleberjunio/automatic-creat-audio-forest/blob/main/Floresta%20(online-audio-converter.com).mp3?raw=true")
const bgAudioRain = new Audio("https://github.com/cleberjunio/create-audio-rain/blob/main/Chuva.mp3?raw=true")
const bgAudioCoffeeShop = new Audio("https://github.com/cleberjunio/creat-audio-coffeeShop/blob/main/Cafeteria%20(online-audio-converter.com).mp3?raw=true")
const bgAudioFireHouse = new Audio("https://github.com/cleberjunio/create-audio-fireHouse/blob/main/Lareira%20(online-audio-converter.com).mp3?raw=true")

bgAudio.loop = true
bgAudioRain.loop = true
bgAudioCoffeeShop.loop = true
bgAudioFireHouse.loop = true

function pressButton() {
    buttonPressAudio.play()
}

function timeEnd() {
    kitchenTimer.play()
}
