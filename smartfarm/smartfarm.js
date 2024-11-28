window.addEventListener('scroll', function() {
    var header = document.querySelector('.navbar'); // Change 'header' to '.navbar' to match your class
    header.classList.toggle('sticky', window.scrollY > 0);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
