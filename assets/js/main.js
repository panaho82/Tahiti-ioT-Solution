// Smooth scroll pour la navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gestion du menu mobile
const mobileMenu = () => {
    const burger = document.createElement('div');
    burger.className = 'md:hidden fixed top-4 right-4 z-50';
    burger.innerHTML = `
        <button class="text-tahiti-blue text-2xl">
            <i class="fas fa-bars"></i>
        </button>
    `;
    
    document.body.appendChild(burger);
    
    burger.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('hidden');
    });
};

// Gestion du formulaire
const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Validation basique
    if (!data.name || !data.email || !data.message) {
        alert('Veuillez remplir tous les champs');
        return;
    }
    
    // Simulation d'envoi
    console.log('Données du formulaire:', data);
    alert('Message envoyé avec succès!');
    e.target.reset();
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    mobileMenu();
    
    // Vérification des images
    document.querySelectorAll('img').forEach(img => {
        if(!img.complete || img.naturalWidth === 0) {
            console.error(`Image manquante: ${img.src}`);
            img.parentElement?.remove();
        }
    });

    // Gestionnaire formulaire
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});
