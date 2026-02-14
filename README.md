# Julien Pouvreau - Hub CV

Site web personnel statique avec système d'onglets pour présenter différents profils professionnels.

## 🎯 Concept

**Une seule URL, plusieurs profils** : Ce hub permet de présenter différentes facettes professionnelles sans diluer le message. Chaque visiteur voit le "bon Julien" selon ce qu'il cherche.

## 📂 Structure

```
C.V_landing/
├── index.html          # Page principale avec système d'onglets
├── styles.css          # Styles responsive + @media print
├── script.js           # Gestion des onglets et navigation
├── assets/             # Documents PDF
│   ├── CV-Julien-POUVREAU-BD.pdf
│   ├── CV-Julien-POUVREAU-Hospitality.pdf
│   └── LinkedIn-Export.pdf
└── archives/           # Anciennes versions
```

## 🔗 Onglets / Sections

### 1. Business Developer (`#bd`)

- **Public cible** : Recruteurs pour poste BD en alternance
- **Contenu** : Compétences transférables, expériences clés avec focus BD
- **Message** : Reconversion vers le digital, mindset business

### 2. Hôtellerie (`#hospitality`)

- **Public cible** : Recruteurs hôtellerie/restauration
- **Contenu** : Parcours complet 20 ans, toutes les expériences détaillées
- **Message** : Expertise confirmée dans le service premium

### 3. PrecurSys (`#precursys`)

- **Public cible** : Curieux des projets IA/productivité
- **Contenu** : Projet personnel, outils, méthodes, compétences tech
- **Message** : Levier de productivité, pas une distraction

### 4. Portfolio (`#portfolio`)

- **Public cible** : Tous
- **Contenu** : Documents PDF, projets, réalisations, compétences techniques
- **Message** : Preuves et ressources

## 🚀 Navigation

### Ancres URL

- `index.html` ou `index.html#bd` → Onglet Business Developer (par défaut)
- `index.html#hospitality` → Onglet Hôtellerie
- `index.html#precursys` → Onglet PrecurSys
- `index.html#portfolio` → Onglet Portfolio

### Liens internes

Les liens entre onglets fonctionnent automatiquement. Exemple :

```html
<a href="#precursys">Voir l'onglet PrecurSys</a>
```

## 📱 Fonctionnalités

- ✅ **100% statique** : HTML + CSS + JS vanilla, pas de build, pas de framework
- ✅ **Responsive** : Mobile-first, adapté tablettes et desktop
- ✅ **Navigation par onglets** : Changement d'onglet sans rechargement
- ✅ **Ancres URL** : Partage direct d'un onglet spécifique
- ✅ **Support clavier** : Navigation avec flèches (accessibilité)
- ✅ **@media print** : Impression propre de l'onglet actif uniquement
- ✅ **Pas de dépendances** : Pas de Google Fonts, pas de libs externes

## 🖨️ Impression

L'onglet actif s'imprime proprement en format A4 :

- Navigation masquée
- Mise en page optimisée
- Typographie adaptée

## 🌐 Déploiement

Compatible avec :

- **GitHub Pages** : Hébergement gratuit
- **Netlify / Vercel** : Déploiement automatique
- **Serveur web classique** : Apache, Nginx, etc.

### Déploiement GitHub Pages

1. Créer un repo sur GitHub
2. Pusher les fichiers
3. Activer GitHub Pages dans Settings
4. URL : `https://username.github.io/repo-name/`

## 📋 TODO

- [ ] Ajouter les 3 fichiers PDF dans `assets/`
- [ ] Tester sur mobile, tablette, desktop
- [ ] Tester l'impression depuis chaque onglet
- [ ] Validation HTML/CSS (W3C)
- [ ] Optimisation SEO (meta descriptions par onglet)
- [ ] Ajouter des screenshots dans Portfolio (optionnel)

## 🎨 Personnalisation

### Couleurs

Modifier les variables CSS dans `styles.css` :

```css
:root {
  --color-primary: #2e75b6;
  --color-primary-dark: #1f5280;
  --color-text: #333333;
  /* ... */
}
```

### Contenu

Éditer directement `index.html`, chaque onglet est une `<section>` avec son ID.

## 🔧 Technologies

- **HTML5** : Sémantique, accessibilité (aria-label, role)
- **CSS3** : Grid, Flexbox, variables CSS, animations
- **JavaScript vanilla** : Gestion des onglets, navigation, clavier

## 📄 Licence

© 2026 Julien Pouvreau - Tous droits réservés

---

**Contact** : julien_pouvreau@yahoo.fr | 07 44 58 62 97
