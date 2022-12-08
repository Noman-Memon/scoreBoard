let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")
console.log(homeEl)
let homecount = 0
let guestCount = 0
function homeOne() {
    homecount = homecount + 1
    homeEl.innerText = homecount

}
function homeTwo() {
    homecount = homecount + 2
    homeEl.innerText = homecount

}
function homeThree() {
    homecount = homecount + 3
    homeEl.innerText = homecount

}
function guestOne() {
    guestCount = guestCount + 1
    guestEl.innerText = guestCount

}
function guestTwo() {
    guestCount = guestCount + 2
    guestEl.innerText = guestCount

}
function guestThree() {
    guestCount = guestCount + 3
    guestEl.innerText = guestCount

}
function reset() {
    homecount = 0
    guestCount = 0
    homeEl.innerText = homecount
    guestEl.innerText = guestCount
}