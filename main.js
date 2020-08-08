const targetImg = document.querySelector(".target_img");
const log = document.querySelector("#log");

function resultFunction(e) {
    let positionLeft = e.clientX;
    let positionTop = e.clientY;

    console.log(positionTop);
    console.log(positionLeft);

    targetImg.style.left = positionLeft + "px";
    targetImg.style.top = positionTop + "px";

    log.innerText = `${e.clientX}, ${e.clientY}`;
}

document.addEventListener("mousemove", resultFunction);
