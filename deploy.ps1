# ========================================
# Script de déploiement GitHub Pages
# Hub CV - Julien Pouvreau
# ========================================

Write-Host "`n========================================"
Write-Host "  HUB CV - Déploiement GitHub Pages"
Write-Host "========================================`n"

# Vérifier que nous sommes dans le bon dossier
Set-Location "C:\NOVA\PROJECTS\C.V_landing"
Write-Host "[1/8] Dossier actuel : $(Get-Location)`n"

# Vérifier que Git est installé
try {
    $gitVersion = git --version
    Write-Host "✓ Git détecté : $gitVersion`n"
} catch {
    Write-Host "❌ ERREUR : Git n'est pas installé ou pas dans le PATH"
    Write-Host "Installez Git : https://git-scm.com/downloads"
    exit 1
}

# Initialiser Git
Write-Host "[2/8] Initialisation du dépôt Git..."
git init
Write-Host ""

# Configurer Git
Write-Host "[3/8] Configuration Git..."
$gitUsername = Read-Host "Entrez votre nom d'utilisateur GitHub"
$gitEmail = Read-Host "Entrez votre email"

git config user.name "$gitUsername"
git config user.email "$gitEmail"
Write-Host "✓ Configuration Git terminée.`n"

# Vérifier le statut
Write-Host "[4/8] Statut du dépôt :"
git status
Write-Host ""

# Ajouter tous les fichiers
Write-Host "[5/8] Ajout des fichiers..."
git add .
Write-Host ""

# Premier commit
Write-Host "[6/8] Création du commit initial..."
git commit -m "Initial commit - Hub CV avec système d'onglets"
Write-Host ""

# Renommer la branche en main
Write-Host "[7/8] Renommage de la branche en 'main'..."
git branch -M main
Write-Host ""

# Demander le nom du dépôt
Write-Host "[8/8] Configuration du dépôt distant...`n"
$repoName = Read-Host "Entrez le nom de votre dépôt GitHub (ex: cv-julien-pouvreau)"

# Ajouter le remote
git remote add origin "https://github.com/$gitUsername/$repoName.git"
Write-Host "✓ Remote ajouté : origin = https://github.com/$gitUsername/$repoName.git`n"

# Information finale
Write-Host "========================================"
Write-Host "  Configuration terminée !"
Write-Host "========================================`n"

Write-Host "PROCHAINES ÉTAPES :`n"

Write-Host "1. Créez le dépôt sur GitHub :"
Write-Host "   https://github.com/new" -ForegroundColor Cyan
Write-Host "   - Nom : $repoName"
Write-Host "   - Type : Public"
Write-Host "   - Ne cochez AUCUNE option (pas de README, .gitignore, etc.)`n"

Write-Host "2. Une fois le dépôt créé, exécutez :"
Write-Host "   git push -u origin main" -ForegroundColor Yellow
Write-Host ""

Write-Host "3. Activez GitHub Pages :"
Write-Host "   - Allez dans Settings > Pages"
Write-Host "   - Source : Branch 'main' / Folder '/ (root)'"
Write-Host "   - Cliquez sur Save`n"

Write-Host "4. Votre site sera disponible à :"
Write-Host "   https://$gitUsername.github.io/$repoName/" -ForegroundColor Green
Write-Host ""

Write-Host "========================================`n"

# Proposer d'ouvrir GitHub
$openGitHub = Read-Host "Voulez-vous ouvrir GitHub dans le navigateur ? (O/N)"
if ($openGitHub -eq "O" -or $openGitHub -eq "o") {
    Start-Process "https://github.com/new"
}

Write-Host "`nScript terminé. Appuyez sur une touche pour quitter..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
