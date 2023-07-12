#!/bin/bash

# Récupérer la date et le chemin du dossier de sauvegarde
DATE=${1:-$(read -p "Entrez la date (AAAA-MM-JJ): " date; echo $date)}
BACKUP_DIR=${2:-$(read -p "Entrez le chemin du dossier de sauvegarde: " dir; echo $dir)}

# Chemin d'origine des fichiers sources
SRC_DIR="./src"

# S'assurer que le dossier de sauvegarde existe
mkdir -p $BACKUP_DIR

# Synchroniser le code source avec le dossier de sauvegarde
rsync -av $SRC_DIR $BACKUP_DIR/backup-$DATE