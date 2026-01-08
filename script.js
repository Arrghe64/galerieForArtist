// On écoute l'événement de scroll sur la fenêtre
window.addEventListener("scroll", () => {
  const container = document.querySelector(".horizontal-container");
  const image = document.querySelector(".scrolling-image");
  const title = document.querySelector(".main-title");

  //* CRÉER UN SCROLL HORIZONTAL
  // 1. Position du conteneur par rapport au haut de la page
  // 2. Distance totale scrollable à l'intérieur du conteneur
  // 3. Calcul de la progression (entre 0 et 1)
  // 4. Calcul du déplacement horizontal maximum
  // 5. On déplace l'image vers la gauche (valeur négative)
  // 6. Gestion du Titre (Disparaît entre 0% et 20%)
  const offsetTop = container.offsetTop; //1

  // (Hauteur du container moins une hauteur d'écran)
  const scrollDistance = container.offsetHeight - window.innerHeight;

  // (Position actuelle - Début du container) / Distance totale
  let percentage = (window.scrollY - offsetTop) / scrollDistance;

  // On force le résultat entre 0 (début) et 1 (fin) pour éviter les bugs
  percentage = Math.max(0, Math.min(1, percentage));

  // (Largeur totale de l'image - Largeur de l'écran de l'utilisateur)
  const maxMove = image.offsetWidth - window.innerWidth;

  // On utilise 'translate3d' car c'est plus fluide que 'left' ou 'translateX'
  image.style.transform = `translate3d(${-percentage * maxMove}px, 0, 0)`;

  title.style.opacity = 1 - percentage * 5;

});
