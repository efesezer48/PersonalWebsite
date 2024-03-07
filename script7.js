document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const mainContent = document.querySelector('#main-content');
    const sidebarLinks = document.querySelectorAll('.sidebar-sections a');
    const goUpBtn = document.getElementById('goUpBtn');

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        burger.style.backgroundColor = navLinks.classList.contains("active") ? "rgba(158, 154, 156, 0.8)" : "";
    });

    function onScroll() {
        let scrollPosition = mainContent.scrollTop;
        //REMEMBER TO UPDATE THIS RANGES  WHEN YOU ADD A CV ELEMENT 
        // REMEMBER TO UPDATE THIS RANGES  WHEN YOU ADD A CV ELEMENT 
        // Define scroll position ranges for each section   REMEMBER TO UPDATE THIS RANGES  WHEN YOU ADD A CV ELEMENT 
        const ranges = [
            { start: 0, end: 500, sectionId: 'about' },
            { start: 200, end: 2000, sectionId: 'experience' },
            { start: 1900, end: 3000, sectionId: 'projects' },
            { start: 3000, end: 4000, sectionId: 'certifications' },
            { start: 4000, end: 6000, sectionId: 'contact' }
        ];

        let currentSectionId = '';

        ranges.forEach(range => {
            if (scrollPosition >= range.start && scrollPosition < range.end) {
                currentSectionId = range.sectionId;
            }
        });

        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });

        // Adjust "Go Up" button visibility based on scroll within mainContent
        goUpBtn.style.display = scrollPosition > 200 ? 'block' : 'none';
    }

    mainContent.addEventListener('scroll', onScroll);
    onScroll(); // Initial call to set correct state

    goUpBtn.addEventListener('click', function() {
        mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
