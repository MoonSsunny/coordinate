const targetImg = document.querySelector(".target_img");
const log = document.querySelector("#log");
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");

function resultFunction(e) {
    let positionLeft = e.clientX;
    let positionTop = e.clientY;

    targetImg.style.left = positionLeft + "px";
    targetImg.style.top = positionTop + "px";
    vertical.style.left = positionLeft + "px";
    horizontal.style.top = positionTop + "px";

    log.innerText = `${e.clientX}px, ${e.clientY}px`;
}

document.addEventListener("mousemove", resultFunction);
