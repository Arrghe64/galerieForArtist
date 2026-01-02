// On écoute l'événement de scroll sur la fenêtre
window.addEventListener("scroll", () => {
  const container = document.querySelector(".horizontal-container");
  const image = document.querySelector(".scrolling-image");
  const title = document.querySelector(".main-title");
  const header = document.querySelector(".main-header");
  const blackMenu = document.querySelector(".nav-menu a");
  const nextSection = document.querySelector(".content-section");

  // 1. Position du conteneur par rapport au haut de la page
  const offsetTop = container.offsetTop;

  // 2. Distance totale scrollable à l'intérieur du conteneur
  // (Hauteur du container moins une hauteur d'écran)
  const scrollDistance = container.offsetHeight - window.innerHeight;

  // 3. Calcul de la progression (entre 0 et 1)
  // (Position actuelle - Début du container) / Distance totale
  let percentage = (window.scrollY - offsetTop) / scrollDistance;

  // On force le résultat entre 0 (début) et 1 (fin) pour éviter les bugs
  percentage = Math.max(0, Math.min(1, percentage));

  // 4. Calcul du déplacement horizontal maximum
  // (Largeur totale de l'image - Largeur de l'écran de l'utilisateur)
  const maxMove = image.offsetWidth - window.innerWidth;

  // 5. On déplace l'image vers la gauche (valeur négative)
  // On utilise 'translate3d' car c'est plus fluide que 'left' ou 'translateX'
  image.style.transform = `translate3d(${-percentage * maxMove}px, 0, 0)`;

  // 6. Gestion du Titre (Disparaît entre 0% et 20%)
  title.style.opacity = 1 - percentage * 5;

  // 7. Récupérer la position de la section suivante par rapport au haut de la fenêtre
  const sectionTop = nextSection.getBoundingClientRect().top;

  // Si le haut de la section suivante est à 50px ou moins du haut de l'écran
  if (sectionTop <= 80) {
    header.classList.add("scrolled-past");
    blackMenu.classList.add("black-cahr");
  } else {
    header.classList.remove("scrolled-past");
    blackMenu.classList.remove("black-cahr");
  }
});
