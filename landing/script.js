// ██████╗  █████╗ ████████╗ █████╗ 
// ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗
// ██║  ██║███████║   ██║   ███████║
// ██║  ██║██╔══██║   ██║   ██╔══██║
// ██████╔╝██║  ██║   ██║   ██║  ██║
// ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝
const d = {
    aShowDivHidden: document.querySelector(".a-show-div-hidden"), 
    mainScroll: document.querySelector(".main-scroll"),
    selectTeam: document.querySelector(".select-team"),
    btnRego: document.querySelector(".btn-rego"),
    popupRego: document.querySelector(".popup-rego"),
    spanClocks: document.querySelectorAll(".span-clock"),
    btnClosePopup: document.querySelector(".btn-close-popup")
} 

// ██╗      ██████╗  ██████╗ ██╗ ██████╗
// ██║     ██╔═══██╗██╔════╝ ██║██╔════╝
// ██║     ██║   ██║██║  ███╗██║██║     
// ██║     ██║   ██║██║   ██║██║██║     
// ███████╗╚██████╔╝╚██████╔╝██║╚██████╗
// ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝ ╚═════╝
window.onload = function() {
    d.popupRego.hidden = true;
    d.mainScroll.hidden = true;
}
setInterval(time, 1000);
window.addEventListener('keyup', listenForKeyup);
enableBtnRegoSound();
d.btnRego.onclick = showPopupRego;
d.aShowDivHidden.onclick = showDivHidden;
d.btnClosePopup.onclick = hidePopup;
// TODO: populate selectTeam with registered Team names
let teamNames = ["TEAM A", "TEAM B", "TEAM C"];
for (let i = 0; i < teamNames.length; i++) {
    const teamnameOption = document.createElement("option");
    teamnameOption.textContent = teamNames[i];
    teamnameOption.value = teamNames[i];
    d.selectTeam.appendChild(teamnameOption);
}

// ███████╗██╗   ██╗███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
// ██╔════╝██║   ██║████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
// █████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
// ██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
// ██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
// ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
function time() {
    let spanclocks = d.spanClocks;
    var date = new Date();
    var s = date.getSeconds();
    var m = date.getMinutes();
    var h = date.getHours();
    for (let i = 0; i < spanclocks.length; i++) {
        spanclocks[i].textContent = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
    }
}
function listenForKeyup(e) {
    if (e.keyCode === 27 && d.popupRego.hidden == false) {
        hidePopup();
    } else if (e.keyCode === 13) {
        showPopupRego();
    }
}
function enableBtnRegoSound() {
    d.btnRego.addEventListener("mouseenter", playOn2);
    d.btnRego.addEventListener("mouseleave", resetBtnRego);
}
function disableBtnRegoSound() {
    d.btnRego.removeEventListener("mouseenter", playOn2);
    d.btnRego.removeEventListener("mouseleave", resetBtnRego);
}
function hidePopup() {
    d.popupRego.hidden = true;
    enableBtnRegoSound();
}
function showPopupRego() {
    disableBtnRegoSound();
    d.popupRego.hidden = false;
    playAC();
}
function showDivHidden() {
    d.mainScroll.hidden = false;
}
function resetBtnRego() {
    playAC();
}
// SOUNDS
function playShiftUp() {
        const audio = document.querySelector(`audio[name="shiftup"]`);
        audio.currentTime = 0; // rewind to the start
        audio.playbackRate = 0.8;
        audio.play();
}
function playShiftDn() {
        const audio = document.querySelector(`audio[name="shiftdn"]`);
        audio.currentTime = 0; // rewind to the start
        audio.playbackRate = 0.7;
        audio.play();
}
function playAlpha() {
    const audio = document.querySelector(`audio[name="alpha"]`);
    if(!audio) return;
    audio.currentTime = 0; // rewind to the start
    audio.play();
}
function playReplay() {
    const audio = document.querySelector(`audio[name="replay"]`);
    if(!audio) return;
    audio.currentTime = 0; // rewind to the start
    audio.play();
}
function playMode() {
    const audio = document.querySelector(`audio[name="mode"]`);
    if(!audio) return;
    audio.currentTime = 0; // rewind to the start
    audio.play();
}
function playPower() {
    if (!powerOn) {
        const audio = document.querySelector(`audio[name="on"]`);
        audio.currentTime = 0; // rewind to the start
        audio.play();
    } else {
        const audio = document.querySelector(`audio[name="off2"]`);
        audio.currentTime = 0; // rewind to the start
        audio.playbackRate = 1;
        audio.play();
    }
}
function playWord() {
    if (calcUpright) {
        const audio = document.querySelector(`audio[name="spiral"]`);
        if(!audio) return;
        audio.currentTime = 0; // rewind to the start
        audio.play();
    } else {
        const audio = document.querySelector(`audio[name="chime"]`);
        if(!audio) return;
        audio.currentTime = 0; // rewind to the start
        audio.playbackRate = 1;
        audio.play();
    }
    calcUpright = false;
}
function playNum() {
    const audio = document.querySelector(`audio[name="num"]`);
    if(!audio) return;
    audio.currentTime = 0; // rewind to the start
    audio.play();
}
function playOp(e) {
    if (e.target.value == "=" && storage.length == 0) {
        playError();
        return;
    }
    const audio = document.querySelector(`audio[name="op"]`);
    if(!audio) return;
    audio.currentTime = 0; // rewind to the start
    audio.play();
}
function playDEL() {
    let audio;
        audio = document.querySelector(`audio[name="DEL"]`);
        // audio = document.querySelector(`audio[name="error"]`);
    if(!audio) return;
    audio.currentTime = 0; // rewind to the start
    audio.play();
}
function playAC() {
    const audio = document.querySelector(`audio[name="AC"]`);
    if(!audio) return;
    audio.currentTime = 0; // rewind to the start
    audio.play();
}
function playOn2() {
    const audio = document.querySelector(`audio[name="on2"]`);
    if(!audio) return;
    audio.currentTime = 0; // rewind to the start
    audio.play();
}
function playError() {
    const audio = document.querySelector(`audio[name="error"]`);
    if(!audio) return;
    audio.currentTime = 0; // rewind to the start
    audio.play();
}