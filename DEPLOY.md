# 🚀 Guide de déploiement GitHub Pages

## 📂 Arborescence du projet

```
C.V_landing/
├── index.html              # Page principale avec 4 onglets
├── styles.css              # Styles responsive + @media print
├── script.js               # Gestion des onglets et navigation
├── README.md               # Documentation du projet
├── .gitignore              # Fichiers à ignorer par Git
├── assets/                 # Documents et ressources
│   ├── README.md           # Instructions pour les PDF
│   ├── CV-Julien-POUVREAU-BD.pdf               # ⚠️ À AJOUTER
│   ├── CV-Julien-POUVREAU-Hospitality.pdf      # ⚠️ À AJOUTER
│   ├── LinkedIn-Export.pdf                     # ⚠️ À AJOUTER
│   └── images/             # (optionnel) Screenshots de projets
└── archives/               # Anciennes versions (non versionné)
```

## 📋 Étape 1 : Préparer le dépôt

### Vérifier que vous êtes dans le bon dossier

```powershell
cd C:\NOVA\PROJECTS\C.V_landing
Get-Location  # Doit afficher : C:\NOVA\PROJECTS\C.V_landing
```

### Placer les PDF dans assets/

Copiez vos 3 fichiers PDF dans le dossier `assets/` :

- CV-Julien-POUVREAU-BD.pdf
- CV-Julien-POUVREAU-Hospitality.pdf
- LinkedIn-Export.pdf

## 📋 Étape 2 : Initialiser Git

```powershell
# Initialiser le dépôt Git
git init

# Vérifier le statut
git status

# Ajouter tous les fichiers (sauf ceux dans .gitignore)
git add .

# Créer le premier commit
git commit -m "Initial commit - Hub CV avec système d'onglets"
```

## 📋 Étape 3 : Créer le dépôt sur GitHub

### Option A : Via l'interface GitHub (recommandé)

1. Allez sur https://github.com/new
2. **Repository name** : `cv-julien-pouvreau` (ou autre nom)
3. **Description** : `Hub CV professionnel avec onglets - Business Developer & Hôtellerie`
4. **Public** ou **Private** selon votre choix
5. ⚠️ **NE PAS** cocher "Add a README file"
6. ⚠️ **NE PAS** choisir de .gitignore ou licence (déjà présents)
7. Cliquer sur **"Create repository"**

### Option B : Via GitHub CLI (si installé)

```powershell
# Installer GitHub CLI : winget install GitHub.cli
gh repo create cv-julien-pouvreau --public --source=. --remote=origin --push
```

## 📋 Étape 4 : Lier et pousser vers GitHub

```powershell
# Renommer la branche en 'main' (standard moderne)
git branch -M main

# Ajouter le dépôt distant (remplacer USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/USERNAME/cv-julien-pouvreau.git

# Vérifier le remote
git remote -v

# Pousser vers GitHub
git push -u origin main
```

**Si vous avez une erreur d'authentification :**

```powershell
# Utiliser un Personal Access Token (PAT)
# 1. Créer un PAT : https://github.com/settings/tokens (classic)
# 2. Cocher : repo (full control)
# 3. Copier le token généré
# 4. Lors du push, utiliser :
#    Username: votre_nom_utilisateur
#    Password: le_token_PAT (pas votre mot de passe GitHub !)
```

## 📋 Étape 5 : Activer GitHub Pages

### Via l'interface GitHub

1. Allez sur votre dépôt : `https://github.com/USERNAME/cv-julien-pouvreau`

2. Cliquez sur **"Settings"** (onglet en haut à droite)

3. Dans le menu latéral gauche, cliquez sur **"Pages"**

4. Sous **"Source"**, sélectionnez :
   - **Branch** : `main`
   - **Folder** : `/ (root)`

5. Cliquez sur **"Save"**

6. Attendez 1-2 minutes, puis rafraîchissez la page

7. Vous verrez un message :
   ```
   ✅ Your site is live at https://USERNAME.github.io/cv-julien-pouvreau/
   ```

### Via GitHub CLI (alternative)

```powershell
gh repo view --web  # Ouvre le dépôt dans le navigateur
# Puis suivez les étapes manuelles ci-dessus
```

## 📋 Étape 6 : Tester le site

```powershell
# Attendre 1-2 minutes après l'activation
# Puis ouvrir dans le navigateur :
Start-Process "https://USERNAME.github.io/cv-julien-pouvreau/"

# Tester les différents onglets :
Start-Process "https://USERNAME.github.io/cv-julien-pouvreau/#bd"
Start-Process "https://USERNAME.github.io/cv-julien-pouvreau/#hospitality"
Start-Process "https://USERNAME.github.io/cv-julien-pouvreau/#precursys"
Start-Process "https://USERNAME.github.io/cv-julien-pouvreau/#portfolio"
```

## 📋 Étape 7 : Mettre à jour le site (plus tard)

```powershell
# Après avoir modifié des fichiers :
git add .
git commit -m "Description des changements"
git push

# GitHub Pages se met à jour automatiquement (1-2 minutes)
```

## 🔧 Commandes utiles

```powershell
# Vérifier l'historique des commits
git log --oneline

# Vérifier les fichiers modifiés
git status

# Voir les différences avant commit
git diff

# Annuler les modifications locales (avant commit)
git restore <fichier>

# Voir les branches
git branch -a

# Cloner sur une autre machine
git clone https://github.com/USERNAME/cv-julien-pouvreau.git
```

## 🎯 URL finales

Après déploiement, votre hub sera accessible aux URL suivantes :

- **Page par défaut (BD)** : `https://USERNAME.github.io/cv-julien-pouvreau/`
- **Onglet BD** : `https://USERNAME.github.io/cv-julien-pouvreau/#bd`
- **Onglet Hôtellerie** : `https://USERNAME.github.io/cv-julien-pouvreau/#hospitality`
- **Onglet PrecurSys** : `https://USERNAME.github.io/cv-julien-pouvreau/#precursys`
- **Onglet Portfolio** : `https://USERNAME.github.io/cv-julien-pouvreau/#portfolio`

## ⚠️ Points d'attention

### PDF non versionnés ?

Si les PDF sont volumineux ou confidentiels, ajoutez-les dans `.gitignore` :

```
# Dans .gitignore
assets/*.pdf
```

Puis hébergez-les ailleurs (Google Drive, Dropbox) et modifiez les liens dans `index.html`.

### Domaine personnalisé (optionnel)

Pour utiliser votre propre domaine (`cv.julien-pouvreau.fr`) :

1. Settings → Pages → Custom domain
2. Ajouter un fichier `CNAME` à la racine : `cv.julien-pouvreau.fr`
3. Configurer le DNS chez votre registrar

### Forcer HTTPS

Dans Settings → Pages, cochez **"Enforce HTTPS"** (automatique après quelques minutes)

## 🐛 Dépannage

### Erreur 404 après activation

- Attendre 5 minutes
- Vérifier que le dépôt est bien public (Settings → General → Danger Zone)
- Vérifier que la branche `main` existe et contient `index.html` à la racine

### Site ne se met pas à jour

- Vider le cache du navigateur (Ctrl+F5)
- Vérifier que le push Git a bien fonctionné : `git log --oneline`
- Actions → Vérifier le workflow "pages build and deployment"

### Les PDF ne téléchargent pas

- Vérifier que les fichiers sont bien dans `assets/`
- Vérifier les noms de fichiers (sensible à la casse)
- Tester les liens directs : `https://USERNAME.github.io/cv-julien-pouvreau/assets/CV-Julien-POUVREAU-BD.pdf`

---

**Besoin d'aide ?** → [Documentation GitHub Pages](https://docs.github.com/en/pages)
