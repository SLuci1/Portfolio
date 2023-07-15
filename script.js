// Basculer la barre de navigation de l'icône
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Fonction de rappel pour le clic sur l'icône du menu
menuIcon.onclick = () => {
    // Ajoute ou supprime la classe 'bx-x' pour modifier l'apparence de l'icône du menu
    menuIcon.classList.toggle('bx-x');
    // Ajoute ou supprime la classe 'active' pour activer ou désactiver l'affichage de la barre de navigation
    navbar.classList.toggle('active');
}

// Sections de défilement
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Fonction de rappel pour le défilement de la page
window.onscroll = () => {
    // Parcours de toutes les sections
    sections.forEach(sec => {
        // Récupère la position de défilement actuelle
        let top = window.scrollY;
        // Calcule l'offset de la section en tenant compte de la marge (-150px dans ce cas)
        let offset = sec.offsetTop - 150;
        // Récupère la hauteur de la section
        let height = sec.offsetHeight;
        // Récupère l'identifiant de la section
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            // Parcours de tous les liens de la barre de navigation
            navLinks.forEach(links => {
                // Supprime la classe 'active' de tous les liens
                links.classList.remove('active');
                // Ajoute la classe 'active' au lien correspondant à la section en cours de défilement
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            // Ajoute la classe 'show-animate' à la section en cours de défilement pour activer une animation spécifique
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            // Supprime la classe 'show-animate' de la section lorsque la position de défilement n'est pas dans la plage de la section
            sec.classList.remove('show-animate');
        }
    });

    // Pour que le header reste
    let header = document.querySelector('header');

    // Ajoute ou supprime la classe 'sticky' de l'en-tête en fonction de la position de défilement
    header.classList.toggle('sticky', window.scrollY > 100);

    // Supprimer l'icône de basculement et la barre de navigation lorsque vous cliquez sur les liens de la barre de navigation
    // Supprime la classe 'bx-x' de l'icône du menu et la classe 'active' de la barre de navigation lorsque le lien de la barre de navigation est cliqué
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Pied de page d'animation sur le défilement
    let footer = document.querySelector('footer');
    // Calcule la hauteur totale défilable de la page
    let scrollable = document.documentElement.scrollHeight - window.innerHeight;
    // Récupère la position de défilement actuelle
    let scrolled = window.scrollY;

    if (Math.ceil(scrolled) === scrollable) {
        // Ajoute la classe 'show-animate' au pied de page lorsque la position de défilement est à la fin de la page
        footer.classList.add('show-animate');
    }
    else {
        // Supprime la classe 'show-animate' du pied de page lorsque la position de défilement n'est pas à la fin de la page
        footer.classList.remove('show-animate');
    }
}
