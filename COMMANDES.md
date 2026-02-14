# Commandes Git - Déploiement GitHub Pages

## ⚡ Option 1 : Script automatique (recommandé)

```powershell
# Exécuter le script PowerShell
cd C:\NOVA\PROJECTS\C.V_landing
.\deploy.ps1
```

Si vous avez une erreur d'exécution de script PowerShell :

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
.\deploy.ps1
```

---

## 📝 Option 2 : Commandes manuelles

### Étape 1 : Se placer dans le dossier

```powershell
cd C:\NOVA\PROJECTS\C.V_landing
```

### Étape 2 : Initialiser Git

```powershell
git init
```

### Étape 3 : Configurer Git (une seule fois)

```powershell
git config user.name "VotreNomUtilisateur"
git config user.email "votre.email@example.com"
```

### Étape 4 : Voir les fichiers à ajouter

```powershell
git status
```

### Étape 5 : Ajouter tous les fichiers

```powershell
git add .
```

### Étape 6 : Créer le premier commit

```powershell
git commit -m "Initial commit - Hub CV avec système d'onglets"
```

### Étape 7 : Renommer la branche en main

```powershell
git branch -M main
```

### Étape 8 : Créer le dépôt sur GitHub

1. Allez sur https://github.com/new
2. Nom du dépôt : `cv-julien-pouvreau` (ou autre)
3. Type : **Public**
4. ⚠️ **NE COCHEZ RIEN** (pas de README, .gitignore, licence)
5. Cliquez sur **"Create repository"**

### Étape 9 : Lier le dépôt distant

```powershell
# Remplacez VotreUsername et cv-julien-pouvreau par vos valeurs
git remote add origin https://github.com/VotreUsername/cv-julien-pouvreau.git
```

### Étape 10 : Vérifier le remote

```powershell
git remote -v
```

### Étape 11 : Pousser vers GitHub

```powershell
git push -u origin main
```

**Si demande d'authentification :**

- Username : votre nom d'utilisateur GitHub
- Password : utilisez un **Personal Access Token** (pas le mot de passe)
  - Créer un token : https://github.com/settings/tokens
  - Cocher : `repo` (full control)
  - Copier le token généré

### Étape 12 : Activer GitHub Pages

1. Allez sur votre dépôt GitHub
2. Cliquez sur **Settings** (en haut à droite)
3. Dans le menu gauche : **Pages**
4. Source :
   - Branch : `main`
   - Folder : `/ (root)`
5. Cliquez sur **Save**
6. Attendez 1-2 minutes

### Étape 13 : Accéder au site

```
https://VotreUsername.github.io/cv-julien-pouvreau/
```

---

## 🔄 Mettre à jour le site (après modifications)

```powershell
# 1. Voir les fichiers modifiés
git status

# 2. Ajouter les modifications
git add .

# 3. Créer un nouveau commit
git commit -m "Description des modifications"

# 4. Pousser vers GitHub
git push

# Le site se met à jour automatiquement dans 1-2 minutes
```

---

## 🧪 Commandes de test

### Tester les onglets

```powershell
# Ouvrir le site local
Start-Process "C:\NOVA\PROJECTS\C.V_landing\index.html"

# Après déploiement, tester en ligne :
Start-Process "https://VotreUsername.github.io/cv-julien-pouvreau/"
Start-Process "https://VotreUsername.github.io/cv-julien-pouvreau/#bd"
Start-Process "https://VotreUsername.github.io/cv-julien-pouvreau/#hospitality"
Start-Process "https://VotreUsername.github.io/cv-julien-pouvreau/#precursys"
Start-Process "https://VotreUsername.github.io/cv-julien-pouvreau/#portfolio"
```

---

## 🛠️ Commandes utiles

### Voir l'historique des commits

```powershell
git log --oneline
```

### Annuler les modifications locales (avant commit)

```powershell
git restore <fichier>
# ou pour tout annuler :
git restore .
```

### Voir les différences

```powershell
git diff
```

### Cloner sur une autre machine

```powershell
git clone https://github.com/VotreUsername/cv-julien-pouvreau.git
```

### Changer de branche

```powershell
git checkout -b nom-branche  # Créer et basculer
git checkout main            # Revenir sur main
```

---

## ⚠️ Résolution de problèmes

### Erreur : "fatal: not a git repository"

```powershell
# Vous n'êtes pas dans le bon dossier
cd C:\NOVA\PROJECTS\C.V_landing
git init
```

### Erreur : "remote origin already exists"

```powershell
# Supprimer et recréer le remote
git remote remove origin
git remote add origin https://github.com/VotreUsername/cv-julien-pouvreau.git
```

### Erreur d'authentification

```powershell
# Utiliser un Personal Access Token (PAT) au lieu du mot de passe
# https://github.com/settings/tokens
```

### Site 404 après activation

- Attendre 5 minutes
- Vérifier que le dépôt est public
- Vérifier que `index.html` est à la racine
- Vider le cache : Ctrl+F5

### PDF ne se téléchargent pas

- Vérifier que les fichiers sont dans `assets/`
- Vérifier les noms (sensible à la casse)
- Tester l'URL directe : `https://VotreUsername.github.io/cv-julien-pouvreau/assets/CV-Julien-POUVREAU-BD.pdf`

---

## 📚 Ressources

- [Documentation GitHub Pages](https://docs.github.com/en/pages)
- [Documentation Git](https://git-scm.com/doc)
- [GitHub Personal Access Tokens](https://github.com/settings/tokens)
