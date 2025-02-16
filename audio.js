document.addEventListener('DOMContentLoaded', function() {
    const nextPageImage = document.getElementById('nextPage');
    const previousPageImage = document.getElementById('previousPage');
    const pageFlip = document.getElementById('pageFlip');

    if (nextPageImage) {
        nextPageImage.addEventListener('click', function(event) {
            event.preventDefault(); 
            pageFlip.play();
            setTimeout(() => {
                window.location.href = 'page2.html'; 
            }, 500); 
        });
    }

    if (previousPageImage) {
        previousPageImage.addEventListener('click', function(event) {
            event.preventDefault(); 
            pageFlip.play();
            setTimeout(() => {
                window.location.href = 'page1.html'; 
            }, 500); 
        });
    }
});