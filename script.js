function showRandomListElements() {
    const elements = document.querySelectorAll('.list-elements .element');
    const totalElements = elements.length;

    const startIndex = Math.floor(Math.random() * (totalElements - 2)); // Не більше ніж 5 елементів

    for (let i = startIndex; i < startIndex + 3; i++) {
        elements[i].style.display = 'flex';
    }
}

const member_images = [
    "../assets/img/member/member_1.png",
    "../assets/img/member/member_2.png",
    "../assets/img/member/member_3.png",
];

function setRandomBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * member_images.length);
    const randomImage = member_images[randomIndex];
    document.querySelector(".member-section").style.backgroundImage = `url(${randomImage})`;
}

function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("active");
}


function adjustMarginForImage() {
    const image = document.querySelector('.signup-image img');
    const container = document.querySelector('.signup-image');
    const container_main = document.querySelector('.signup-section');

    const imageHeight = image.offsetHeight;
    const containerHeight = container.offsetHeight;
    if (imageHeight > containerHeight) {
        const marginTop = imageHeight - containerHeight - 90;
        if(marginTop > 0){
            container_main.style.marginTop = `${marginTop}px`;
        }
    } else {
        container_main.style.marginTop = '0';
    }
}




window.addEventListener('load', adjustMarginForImage);
window.addEventListener('resize', adjustMarginForImage);

window.onload = function() {
    showRandomListElements();
    setRandomBackgroundImage();
};