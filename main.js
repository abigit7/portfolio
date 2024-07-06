const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
cursor.style.left = e.pageX + 'px';
cursor.style.top = e.pageY + 'px';

});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));