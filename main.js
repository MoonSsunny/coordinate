const targetImg = document.querySelector(".target_img");
const log = document.querySelector("#log");
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");

addEventListener("load", () => {
    const targetRect = targetImg.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHight = targetRect.height / 2;

    function resultFunction(e) {
        let positionLeft = e.clientX;
        let positionTop = e.clientY;

        vertical.style.transform = `translateX(${positionLeft}px)`;
        horizontal.style.transform = `translateY(${positionTop}px)`;
        targetImg.style.transform = `translate(${
            positionLeft - targetHalfWidth
        }px, ${positionTop - targetHalfHight}px)`;

        log.innerText = `${e.clientX}px, ${e.clientY}px`;
    }

    document.addEventListener("mousemove", resultFunction);
});
