// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterChips = document.querySelectorAll('.chip');
    const articleCards = document.querySelectorAll('.article-card');

    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            // Remove active class from all chips
            filterChips.forEach(c => c.classList.remove('active'));

            // Add active class to clicked chip
            this.classList.add('active');

            // Get filter value
            const filter = this.getAttribute('data-filter');

            // Filter articles
            articleCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.6s ease-out';
                } else {
                    const category = card.getAttribute('data-category');
                    if (category === filter) {
                        card.style.display = 'flex';
                        card.style.animation = 'fadeIn 0.6s ease-out';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navbar
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
});
