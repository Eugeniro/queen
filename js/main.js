/*Video*/
const video = document.querySelector(".Video");
const videosPlay = document.querySelector(".Video_play");
videosPlay.addEventListener("click", () => {
    video.style.cssText = `background-image:none;
    padding:0`
    video.innerHTML = `<iframe src="https://www.youtube.com/embed/31Yg0lUMzAI?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})
/*Rew Sliderc*/
const RewTrain = document.querySelector(".reviews_body_slider_train")
const Rewitem = document.querySelector(".reviews_body_slider_train_item")
const RewLeftButton = document.querySelector(".reviews_body_prev")
const RewRightButton = document.querySelector(".reviews_body_next")
const RewButtons = document.querySelectorAll(".reviews_switch_button");
let SizeMove = parseInt(getComputedStyle(Rewitem).minWidth) + parseInt(getComputedStyle(Rewitem).marginRight);
let canIswap = true;
let countSlideView = (() => {
    if (window.screen.width > 1023) return 4;
    if (window.screen.width <= 1023 && window.screen.width > 790) return 3;
    if (window.screen.width <= 790 && window.screen.width > 499) return 2;
    if (window.screen.width <= 499) return 1;
})();
RewLeftButton.addEventListener("click", () => {
    if (canIswap) {
        if (parseInt(getComputedStyle(RewTrain).left) < 0) {
            RewTrain.style.left = `${parseInt(getComputedStyle(RewTrain).left) + SizeMove}px`
            canIswap = false;
            setTimeout(() => {
                canIswap = true;
            }, 500)
        }
        if (parseInt(getComputedStyle(RewTrain).left) + SizeMove === 0) {
            if (!RewButtons[0].classList.contains("active")) RewButtons[0].classList.add("active")
            if (RewButtons[1].classList.contains("active")) RewButtons[1].classList.remove("active")
        }
    }
})
RewRightButton.addEventListener("click", () => {
    if (canIswap) {
        if ((parseInt(getComputedStyle(RewTrain).left) * -1) + countSlideView * SizeMove < parseInt(getComputedStyle(RewTrain).width)) {
            RewTrain.style.left = `${parseInt(getComputedStyle(RewTrain).left) - SizeMove}px`
            canIswap = false;
            setTimeout(() => {
                canIswap = true;
            }, 500)
        }
        if ((parseInt(getComputedStyle(RewTrain).left) - SizeMove === -(parseInt(getComputedStyle(RewTrain).width) - countSlideView * SizeMove))) {
            if (!RewButtons[1].classList.contains("active")) RewButtons[1].classList.add("active")
            if (RewButtons[0].classList.contains("active")) RewButtons[0].classList.remove("active")
        }
    }
})
RewButtons.forEach((elem, index) => {
    elem.addEventListener("click", () => {
        if (index === 0) {
            RewTrain.style.left = `0px`
            if (!RewButtons[0].classList.contains("active")) RewButtons[0].classList.add("active")
            if (RewButtons[1].classList.contains("active")) RewButtons[1].classList.remove("active")

        } else {
            RewTrain.style.left = -(parseInt(getComputedStyle(RewTrain).width) - countSlideView * SizeMove) + "px";
            if (!RewButtons[1].classList.contains("active")) RewButtons[1].classList.add("active")
            if (RewButtons[0].classList.contains("active")) RewButtons[0].classList.remove("active")
        }

    })
})
function SetSizeSpace() {
    if (window.screen.width > 1023) {
        if (countSlideView !== 4) countSlideView = 4;
        SizeMove = parseInt(getComputedStyle(Rewitem).minWidth) + parseInt(getComputedStyle(Rewitem).marginRight);
   RewTrain.style.left=0; 
    }
    if (window.screen.width <= 1023 && window.screen.width > 790) {
        if (countSlideView !== 3) countSlideView = 3;
        SizeMove = parseInt(getComputedStyle(Rewitem).minWidth) + parseInt(getComputedStyle(Rewitem).marginRight);
   RewTrain.style.left=0; 
    }
    if (window.screen.width <= 790 && window.screen.width > 499) {
        if (countSlideView !== 4) countSlideView = 2;
        SizeMove = parseInt(getComputedStyle(Rewitem).minWidth) + parseInt(getComputedStyle(Rewitem).marginRight);
     RewTrain.style.left=0;
    }
    if (window.screen.width <= 499) {
        if (countSlideView !== 1) countSlideView = 1;
        SizeMove = parseInt(getComputedStyle(Rewitem).minWidth) + parseInt(getComputedStyle(Rewitem).marginRight);
     RewTrain.style.left=0;
    }

}
window.addEventListener("resize", () => {
    SetSizeSpace()
})