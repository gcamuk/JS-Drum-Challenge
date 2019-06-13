// Play drum by keyboard press

// Play music by mouse click

let boom = new Audio("assets/sounds/boom.wav")
let clap = new Audio("assets/sounds/clap.wav")
let hihat = new Audio("assets/sounds/hihat.wav")
let kick = new Audio("assets/sounds/kick.wav")
let openhat = new Audio("assets/sounds/openhat.wav")
let ride = new Audio("assets/sounds/ride.wav")
let snare = new Audio("assets/sounds/snare.wav")
let tink = new Audio("assets/sounds/tink.wav")
let tom = new Audio("assets/sounds/tom.wav")

document.addEventListener('keypress', e => {
    let keyCode = e.keyCode;
    if (keyCode == 65 || keyCode == 97) {
        boom.play()
    }``
    if (keyCode == 83 || keyCode == 115) {
        clap.play()
    }
    if (keyCode == 68 || keyCode == 100) {
        hihat.play()
    }
    if (keyCode == 70 || keyCode == 102) {
        kick.play()
    }
    if (keyCode == 71 || keyCode == 103) {
        openhat.play()
    }
    if (keyCode == 72 || keyCode == 104) {
        ride.play()
    }
    if (keyCode == 74 || keyCode == 106) {
        snare.play()
    }
    if (keyCode == 75 || keyCode == 107) {
        tink.play()
    }
    if (keyCode == 76 || keyCode == 108)
        clap.play()
})

document.getElementById("A").addEventListener("touch", () => {
    boom.load(), boom.play()
}) 