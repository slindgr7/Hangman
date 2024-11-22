function hideAllSection() {
    let sectionElements = document.querySelectorAll('section.home-screen-section1 *');
    sectionElements.forEach(function(element) {
        element.setAttribute('hidden', true);
    });
};

function showAllSection() {
    let sectionElements = document.querySelectorAll('section.home-screen-section1 *');
    sectionElements.forEach(function(element) {
        element.removeAttribute('hidden');
    });
}

export{ hideAllSection, showAllSection}