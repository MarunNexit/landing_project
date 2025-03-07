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

window.onload = function() {
    showRandomListElements();
    setRandomBackgroundImage();
};