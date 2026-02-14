@echo off
REM ========================================
REM Script de déploiement GitHub Pages
REM Hub CV - Julien Pouvreau
REM ========================================

echo.
echo ========================================
echo   HUB CV - Deploiement GitHub Pages
echo ========================================
echo.

REM Vérifier que nous sommes dans le bon dossier
cd /d C:\NOVA\PROJECTS\C.V_landing
echo [1/8] Dossier actuel : %CD%
echo.

REM Initialiser Git
echo [2/8] Initialisation du depot Git...
git init
echo.

REM Configurer Git (ajuster avec vos informations)
echo [3/8] Configuration Git...
echo Veuillez entrer votre nom d'utilisateur GitHub :
set /p GIT_USERNAME="Username: "
echo Veuillez entrer votre email :
set /p GIT_EMAIL="Email: "

git config user.name "%GIT_USERNAME%"
git config user.email "%GIT_EMAIL%"
echo Configuration Git terminee.
echo.

REM Vérifier le statut
echo [4/8] Statut du depot :
git status
echo.

REM Ajouter tous les fichiers
echo [5/8] Ajout des fichiers...
git add .
echo.

REM Premier commit
echo [6/8] Creation du commit initial...
git commit -m "Initial commit - Hub CV avec systeme d'onglets"
echo.

REM Renommer la branche en main
echo [7/8] Renommage de la branche en 'main'...
git branch -M main
echo.

REM Demander le nom du dépôt
echo [8/8] Configuration du depot distant...
echo.
echo Veuillez entrer le nom de votre depot GitHub :
echo Exemple : cv-julien-pouvreau
set /p REPO_NAME="Nom du depot: "
echo.

REM Ajouter le remote
git remote add origin https://github.com/%GIT_USERNAME%/%REPO_NAME%.git
echo Remote ajoute : origin = https://github.com/%GIT_USERNAME%/%REPO_NAME%.git
echo.

REM Information finale
echo ========================================
echo   Configuration terminee !
echo ========================================
echo.
echo PROCHAINES ETAPES :
echo.
echo 1. Creez le depot sur GitHub :
echo    https://github.com/new
echo    Nom : %REPO_NAME%
echo    Type : Public
echo    Ne cochez AUCUNE option (pas de README, .gitignore, etc.)
echo.
echo 2. Une fois le depot cree, executez :
echo    git push -u origin main
echo.
echo 3. Allez dans Settings ^> Pages sur GitHub
echo    - Source : Branch 'main' / Folder '/ (root)'
echo    - Cliquez sur Save
echo.
echo 4. Votre site sera disponible a :
echo    https://%GIT_USERNAME%.github.io/%REPO_NAME%/
echo.
echo ========================================
echo.

pause
