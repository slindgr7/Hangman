document.querySelector('.home-screen-play-button').addEventListener('click', function() {
    let sectionElements = document.querySelectorAll('section.home-screen-section1 *');
    sectionElements.forEach(function(element) {
        element.setAttribute('hidden', true);
    });
});
