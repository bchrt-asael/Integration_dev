# Integration Dev

## Description

**Objectif principal** : Développer une application web moderne avec une architecture séparée (API Back-end et interface Front-end) permettant à un utilisateur de s'inscrire et de se connecter. L'ensemble du projet doit être orchestré par Docker pour garantir une installation et un lancement simples et standardisés

### Architecture Technique (La "Stack")
- **Front-end (Côté Client) : React JS**
    - Gère l'interface utilisateur (UI).
    
    - Contient les formulaires d'inscription et de connexion.

    - Communique avec le serveur via des requêtes HTTP (API REST).

- **Back-end (Côté Serveur) : Laravel (PHP)**

    - Agit comme une API (Interface de Programmation d'Application).

    - Reçoit les requêtes de React, valide les données, sécurise les mots de passe (hachage) et gère les sessions/tokens (ex: via Laravel Sanctum).

- **Base de données : MySQL**

    -Stocke de manière persistante et sécurisée les informations des utilisateurs (nom, email, mot de passe haché).

- **Infrastructure : Docker & Docker Compose**

    - Docker permet de créer des "conteneurs" isolés pour chaque technologie (un conteneur pour React, un pour Laravel/PHP, un pour MySQL).

    - Docker Compose est le chef d'orchestre : grâce à un seul fichier (docker-compose.yml), il télécharge les dépendances et lance tous les serveurs simultanément avec une simple commande (comme docker-compose up).

## Fonctionnalités Attendues
1. **Page d'Inscription (Sign Up) :**

    - Formulaire demandant un nom, une adresse email et un mot de passe.

    - Vérification des erreurs (ex: email déjà utilisé, mot de passe trop court).

    - Enregistrement du nouvel utilisateur dans la base de données MySQL via Laravel.

2. **Page de Connexion (Sign In) :**

    - Formulaire demandant l'email et le mot de passe.

    - Vérification des identifiants par Laravel.

    - Si succès : l'utilisateur est connecté (génération d'un token d'accès) et redirigé vers une page d'accueil protégée.

## Étapes
### 1. Configuration partie backend
___
Commande à executer pour l'installation des dépendances du [projet Laravel](/laravel-app/):

```
composer install
```

### 2. Configuration docker
___
Commande permettant à Docker de construire et exécuter les conteneurs dans la racine du projet:
```
docker compose up --build
```

### 3. Migration 
___
Execution de la première migration du projet Laravel:
```
docker compose exec backend php artisan migrate
```
### 4