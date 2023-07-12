FROM node:14-alpine

# Installation des dépendances nécessaires pour Ansible
RUN apk update && apk add --no-cache \
    curl \
    ansible \
    fish \
    tmux \
    git \
    && rm -rf /var/cache/apk/*

# Copier le playbook Ansible dans le conteneur
COPY playbook.yaml /ansible/playbook.yaml

# Exécuter le playbook Ansible
RUN ansible-playbook /ansible/playbook.yaml

# Dossier de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
