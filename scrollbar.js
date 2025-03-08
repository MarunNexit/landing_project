document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollList = document.querySelector('.scroll-list');
    const scrollBarThumb = document.querySelector('.scroll-bar-thumb');
    const scrollElements = document.querySelectorAll('.scroll-element');  // Отримуємо всі елементи

    const updateThumbSize = () => {
        const containerHeight = scrollContainer.offsetHeight;
        const contentHeight = scrollList.scrollHeight;
        const thumbHeight = Math.max((containerHeight / contentHeight) * containerHeight, 30); // Мінімальна висота thumb 30px
        scrollBarThumb.style.height = `${thumbHeight}px`;
    };

    updateThumbSize();
    window.addEventListener('resize', updateThumbSize);

    scrollContainer.addEventListener('scroll', () => {
        const scrollTop = scrollContainer.scrollTop;
        const containerHeight = scrollContainer.offsetHeight;

        scrollElements.forEach(el => {
            el.classList.remove('dark-overlay');
        });

        for (let i = scrollElements.length - 1; i >= 0; i--) {
            const element = scrollElements[i];
            const elementTop = element.offsetTop;
            const elementBottom = elementTop + element.offsetHeight;

            if (elementBottom > scrollTop && elementTop < scrollTop + containerHeight - 100) {
                element.classList.add('dark-overlay');
                break;
            }
        }

        // Оновлюємо позицію повзунка
        const contentHeight = scrollList.scrollHeight;
        const thumbPosition = (scrollTop / contentHeight) * scrollContainer.offsetHeight;
        scrollBarThumb.style.top = `${thumbPosition}px`;
    });

    let isDragging = false;

    scrollBarThumb.addEventListener('mousedown', (e) => {
        isDragging = true;
        const initialY = e.clientY;
        const initialTop = scrollBarThumb.offsetTop;

        const onMouseMove = (moveEvent) => {
            if (!isDragging) return;
            const deltaY = moveEvent.clientY - initialY;
            const newTop = initialTop + deltaY;
            const maxTop = scrollContainer.offsetHeight - scrollBarThumb.offsetHeight;

            scrollBarThumb.style.top = `${Math.min(Math.max(newTop, 0), maxTop)}px`;

            const thumbTop = parseFloat(scrollBarThumb.style.top);
            const scrollRatio = thumbTop / maxTop;
            scrollContainer.scrollTop = scrollRatio * (scrollList.scrollHeight - scrollContainer.offsetHeight);
        };

        const onMouseUp = () => {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
});