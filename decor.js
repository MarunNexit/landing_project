document.addEventListener("DOMContentLoaded", () => {
    const heroContainer = document.querySelector(".hero-decor-container");
    const tokenContainer = document.querySelector(".token-decor-container");

    const heroSvgElements = [
        { src: "./assets/img/bg/bg-gradient-1.svg",
            top: { default: "-25%", tablet: "-25%", mobile: "-25%" },
            left: { default: "-25%", tablet: "-35%", mobile: "-50%" },
            width: { default: "817px", tablet: "817px", mobile: "817px" },
            height: { default: "720px", tablet: "720px", mobile: "720px" },
            zIndex: -1,
        },
        { src: "./assets/img/bg/circles.svg",
            top: { default: "-10%", tablet: "20%", mobile: "20%" },
            left: { default: "-50%", tablet: "-30%", mobile: "-180%" },
            width: { default: "2400px", tablet: "2200px", mobile: "2200px" },
            opacity: "0.5",
        },
        { src: "./assets/img/bg/bg-above-the-fold.svg",
            top: { default: "0", tablet: "0", mobile: "0" },
            left: { default: "0", tablet: "-10%", mobile: "-50%" },
            width: { default: "200%", tablet: "2000px", mobile: "2000px" },
            height: { default: "909px", tablet: "909px", mobile: "909px" },
            zIndex: -2,
        },
        { src: "./assets/img/bg/bg-gradient-2.svg",
            top: { default: "250px", tablet: "280px", mobile: "370px" },
            left: { default: "90%", tablet: "90%", mobile: "65%" },
            width: { default: "603px", tablet: "439.54px", mobile: "400.43px" },
            height: { default: "689.77px", tablet: "455px", mobile: "458.05px" }
        },
        {
            src: "./assets/img/bg/bitcoin-1.png",
            top: { default: "90px", tablet: "90px", mobile: "118px" },
            left: { default: "-10%", tablet: "3%", mobile: "0%" },
            width: { default: "97px", tablet: "66px", mobile: "45px" },
            height: { default: "108px", tablet: "73px", mobile: "50px" },
            rotate: "30deg",
            zIndex: "1"
        },
        {
            src: "./assets/img/bg/etherium_1.png",
            top: { default: "517px", tablet: "414px", mobile: "820px" },
            left: { default: "50%", tablet: "50%", mobile: "70%" },
            width: { default: "150px", tablet: "100px", mobile: "65px" },
            rotate: "-10deg",
            zIndex: "1"
        },
        {
            src: "./assets/img/bg/lite-coin.png",
            top: { default: "630px", tablet: "500px", mobile: "860px" },
            left: { default: "5%", tablet: "25%", mobile: "45%" },
            width: { default: "105px", tablet: "55px", mobile: "25px" },
            rotate: "-47deg",
            zIndex: "1"
        },
    ];

    const tokenSvgElements = [
        {
            src: "./assets/img/bg/coins-bg.png",
            top: { default: "0", tablet: "0", mobile: "0" },
            left: { default: "-10%", tablet: "-10", mobile: "-10%" },
            width: { default: "228px", tablet: "100px", mobile: "100px" },
            zIndex: "1"
        },
    ];

    function updateDecorSizes() {
        const screenWidth = window.innerWidth;
        let sizeCategory = "default";

        if (screenWidth >= 744 && screenWidth <= 1439) {
            sizeCategory = "tablet";
        } else if (screenWidth <= 743) {
            sizeCategory = "mobile";
        }

        heroContainer.innerHTML = "";
        tokenContainer.innerHTML = "";

        function createDecorElement(container, elements) {
            elements.forEach(({ src, top, left, width, height, rotate, zIndex, opacity }) => {
                const decor = document.createElement("div");
                decor.classList.add("decor-svg");
                decor.style.backgroundImage = `url(${src})`;
                decor.style.zIndex = zIndex || "-2";
                decor.style.top = top[sizeCategory];
                decor.style.left = left[sizeCategory];
                decor.style.width = width[sizeCategory] === "full" ? getScreenWidth() : width[sizeCategory];
                decor.style.height = height ? height[sizeCategory] : width[sizeCategory];

                if (opacity) decor.style.opacity = `${opacity}`;
                if (rotate) decor.style.transform = `rotate(${rotate})`;

                container.appendChild(decor);
            });
        }

        createDecorElement(heroContainer, heroSvgElements);
        createDecorElement(tokenContainer, tokenSvgElements);
    }

    updateDecorSizes();
    window.addEventListener("resize", updateDecorSizes);
});

function getScreenWidth() {
    return `${window.innerWidth + 100}px`|| `${document.documentElement.clientWidth + 100}px` || `${document.documentElement.clientWidth + 100}px`;
}

/*
{ src: "./assets/img/bg/circles.svg", top: "10%", left: "-10%", width: "125%" },
{ src: "./assets/img/bg/circles.svg", top: "10%", left: "-10%", width: "1500px" },
*/
