# Portfolio de Charif Abdallah

Portfolio statique bilingue (français/anglais), responsive, thème sombre et animations. Il fonctionne sans serveur, PHP ou base de données.

## Fichiers
- `index.html` : contenu et sections
- `css/style.css` : design, responsive et animations
- `js/main.js` : langue, menu mobile, animations et formulaire e-mail
- `assets/cv.pdf` : place ton CV PDF ici avant publication

## Avant publication
1. Dans `index.html`, remplace `TON.EMAIL@EXEMPLE.COM` par ton adresse e-mail réelle (liens e-mail et section contact).
2. Dans `js/main.js`, remplace `TON.EMAIL@EXEMPLE.COM` dans la variable `recipient`.
3. Remplace les liens génériques GitHub et LinkedIn par tes profils réels.
4. Vérifie les dates, diplômes et descriptions d'expérience. La section études est volontairement générique, car elle doit correspondre au CV que tu souhaites publier.
5. Ajoute ton CV à `assets/cv.pdf`. Si tu n'as pas encore de CV prêt, supprime temporairement le bouton CV.
6. Pour ajouter une photo, ajoute un fichier dans `assets/` et modifie le HTML/CSS.

## Tester sur l'ordinateur
Double-clique sur `index.html` pour l'ouvrir dans un navigateur. Pour tester comme un site local, tu peux aussi ouvrir le dossier avec VS Code et utiliser l'extension Live Server.

## Publication gratuite avec GitHub Pages
1. Crée/connecte-toi à un compte sur https://github.com/.
2. Clique sur **New repository**.
3. Nom du dépôt conseillé : `charif-portfolio`. Pour un dépôt public, sélectionne **Public**.
4. Téléverse le contenu de ce dossier (pas le fichier ZIP lui-même) à la racine du dépôt : `index.html`, `css/`, `js/`, `assets/`, `README.md`.
5. Ouvre **Settings → Pages**.
6. Sous **Build and deployment**, choisis **Deploy from a branch**.
7. Branche : `main` ; dossier : `/(root)` ; clique **Save**.
8. Patiente quelques minutes, puis recharge la page Settings → Pages pour récupérer l'URL fournie par GitHub.

L'URL sera généralement :
`https://TON-NOM-GITHUB.github.io/charif-portfolio/`

Pour un lien plus court du type `https://TON-NOM-GITHUB.github.io/`, nomme le dépôt exactement comme ton nom d'utilisateur GitHub suivi de `.github.io` et place le site à sa racine.

## À savoir
- Le formulaire de contact ouvre le logiciel e-mail du visiteur ; il n'envoie rien automatiquement depuis un serveur.
- GitHub Pages héberge des sites statiques : aucun PHP/MySQL côté serveur.
- Ne publie pas d'informations privées (adresse personnelle, numéro de document, etc.).
