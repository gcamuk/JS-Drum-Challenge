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
        boom.play(), aKey.style.color = "red"
    }``
    if (keyCode == 83 || keyCode == 115) {
        clap.play(), sKey.style.color = "red"
    }
    if (keyCode == 68 || keyCode == 100) {
        hihat.play(), dKey.style.color = "red"
    }
    if (keyCode == 70 || keyCode == 102) {
        kick.play(), fKey.style.color = "red"
    }
    if (keyCode == 71 || keyCode == 103) {
        openhat.play(), gKey.style.color = "red"
    }
    if (keyCode == 72 || keyCode == 104) {
        ride.play(), hKey.style.color = "red"
    }
    if (keyCode == 74 || keyCode == 106) {
        snare.play(), jKey.style.color = "red"
    }
    if (keyCode == 75 || keyCode == 107) {
        tink.play(), kKey.style.color = "red"
    }
    if (keyCode == 76 || keyCode == 108)
        tom.play(), lKey.style.color = "red"
})

document.getElementById("aKey").addEventListener("click", () => {
    boom.play(), aKey.style.color = "red"
}) 

document.getElementById("sKey").addEventListener("click", () => {
    clap.play(), sKey.style.color = "red"
}) 

document.getElementById("dKey").addEventListener("click", () => {
    hihat.play(), dKey.style.color = "red"
}) 

document.getElementById("fKey").addEventListener("click", () => {
    kick.play(), fKey.style.color = "red"
}) 

document.getElementById("gKey").addEventListener("click", () => {
    openhat.play(), gKey.style.color = "red"
}) 

document.getElementById("hKey").addEventListener("click", () => {
    ride.play(), hKey.style.color = "red"
}) 

document.getElementById("jKey").addEventListener("click", () => {
   snare.play(), jKey.style.color = "red"
}) 

document.getElementById("kKey").addEventListener("click", () => {
    tink.play(), kKey.style.color = "red"
}) 

document.getElementById("lKey").addEventListener("click", () => {
    tom.play(), lKey.style.color = "red"
}) 