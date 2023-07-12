# Commencer par aller dans le fichieer application Linux

### cd application-linux

Maintenant, il faut installer les dépendances

### npm install

Ensuite, vous pouvez build le conteneur docker avec la commande suivante

### docker build -t application-linux .

Enfin, vous pouvez lancer le conteneur docker avec la commande suivante

### docker run -p 3000:3000 application-linux

Vous pouvez maintenant accéder à l'application sur votre navigateur à l'adresse suivante

### http://localhost:3000/


# Lancer une sauvegarde avec le script shell

### cd application-linux

### ./script.sh

Vous pouvez également renseigner directement tous les paramètres dans le script shell directement (sinon ils vous seront demandés)

### ./script.sh AAAA-MM-JJ /path/to/backup
./script.sh 2023-07-10 /Users/matteo/Documents/L3/S2/Linux/application-linux/backup