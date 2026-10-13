
document.addEventListener("DOMContentLoaded", () => {
  const languageButton = document.getElementById("langue");
  const yearElement = document.getElementById("annee");

  let currentLanguage = "fr";

  yearElement.textContent = new Date().getFullYear();

  languageButton.addEventListener("click", () => {
    currentLanguage = currentLanguage === "fr" ? "en" : "fr";

    document.documentElement.lang = currentLanguage;
    languageButton.textContent =
      currentLanguage === "fr" ? "EN" : "FR";

    document.querySelectorAll("[data-fr][data-en]").forEach((element) => {
      element.textContent = element.getAttribute(
        `data-${currentLanguage}`
      );
    });
  });
});
