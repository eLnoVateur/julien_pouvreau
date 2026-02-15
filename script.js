/**
 * Julien Pouvreau - Hub CV
 * Gestion des onglets et navigation
 */

(function () {
  "use strict";

  // =====================================================
  // Variables globales
  // =====================================================
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  const homeCards = document.querySelectorAll(".home-card");

  // =====================================================
  // Fonction pour activer un onglet
  // =====================================================
  function activateTab(tabId) {
    // Désactiver tous les onglets et contenus
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // Activer l'onglet et le contenu correspondants
    const activeButton = document.querySelector(`[data-tab="${tabId}"]`);
    const activeContent = document.getElementById(tabId);

    if (activeButton && activeContent) {
      activeButton.classList.add("active");
      activeContent.classList.add("active");

      // Mettre à jour l'URL avec l'ancre appropriée
      if (history.replaceState) {
        history.replaceState(null, null, `#${tabId}`);
      } else {
        window.location.hash = tabId;
      }

      // Scroll vers le haut de la page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // =====================================================
  // Gestionnaire de clic sur les boutons d'onglets
  // =====================================================
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");
      activateTab(tabId);
    });
  });

  // =====================================================
  // Gestionnaire de clic sur les cartes de navigation home
  // =====================================================
  homeCards.forEach((card) => {
    card.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-target");
      if (targetTab) {
        activateTab(targetTab);
      }
    });
  });

  // =====================================================
  // Gestionnaire de clic sur les boutons dans les heros de section
  // =====================================================
  document.addEventListener("click", function (e) {
    // Buttons with data-target attribute (like CTA buttons in section heroes)
    if (e.target.tagName === "BUTTON" && e.target.getAttribute("data-target")) {
      const targetTab = e.target.getAttribute("data-target");
      if (
        targetTab &&
        ["home", "bd", "hospitality", "precursys", "portfolio"].includes(
          targetTab,
        )
      ) {
        activateTab(targetTab);
      }
    }
  });

  // =====================================================
  // Gestion des liens internes entre onglets
  // =====================================================
  document.addEventListener("click", function (e) {
    // Vérifier si c'est un lien vers un onglet
    if (e.target.tagName === "A" && e.target.getAttribute("href")) {
      const href = e.target.getAttribute("href");

      // Si c'est une ancre vers un onglet (#home, #bd, #hospitality, etc.)
      if (
        href.startsWith("#") &&
        ["#home", "#bd", "#hospitality", "#precursys", "#portfolio"].includes(
          href,
        )
      ) {
        e.preventDefault();
        const tabId = href.substring(1); // Enlever le #
        activateTab(tabId);
      }
    }
  });

  // =====================================================
  // Activation de l'onglet au chargement de la page
  // =====================================================
  function initTabs() {
    // Vérifier si une ancre est présente dans l'URL
    const hash = window.location.hash.substring(1); // Enlever le #

    // Liste des onglets valides
    const validTabs = ["home", "bd", "hospitality", "precursys", "portfolio"];

    // Activer l'onglet approprié
    if (hash && validTabs.includes(hash)) {
      activateTab(hash);
    } else {
      // Par défaut, activer l'onglet HOME
      activateTab("home");
    }
  }

  // =====================================================
  // Gestion du bouton "Retour" du navigateur
  // =====================================================
  window.addEventListener("hashchange", function () {
    const hash = window.location.hash.substring(1);
    const validTabs = ["home", "bd", "hospitality", "precursys", "portfolio"];

    if (hash && validTabs.includes(hash)) {
      activateTab(hash);
    }
  });

  // =====================================================
  // Initialisation au chargement du DOM
  // =====================================================
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTabs);
  } else {
    initTabs();
  }

  // =====================================================
  // Support clavier (accessibilité)
  // =====================================================
  tabButtons.forEach((button, index) => {
    button.addEventListener("keydown", function (e) {
      let newIndex = index;

      // Flèche gauche ou haut
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        newIndex = index > 0 ? index - 1 : tabButtons.length - 1;
      }
      // Flèche droite ou bas
      else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        newIndex = index < tabButtons.length - 1 ? index + 1 : 0;
      }
      // Home - premier onglet
      else if (e.key === "Home") {
        e.preventDefault();
        newIndex = 0;
      }
      // End - dernier onglet
      else if (e.key === "End") {
        e.preventDefault();
        newIndex = tabButtons.length - 1;
      }

      // Activer le nouvel onglet si l'index a changé
      if (newIndex !== index) {
        tabButtons[newIndex].focus();
        const tabId = tabButtons[newIndex].getAttribute("data-tab");
        activateTab(tabId);
      }
    });
  });
})();
