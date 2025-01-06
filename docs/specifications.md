# Cahier des Charges - Application "Dys moi !"

## 1. Présentation du Projet

### 1.1 Objectif
Développer une application web permettant d'adapter des textes pour les rendre plus accessibles aux personnes dyslexiques, avec une simulation des difficultés de lecture pour sensibiliser les utilisateurs.

### 1.2 Public Cible
- Personnes dyslexiques
- Enseignants et éducateurs
- Parents d'enfants dyslexiques
- Professionnels de santé
- Créateurs de contenu souhaitant rendre leurs textes plus accessibles

## 2. Fonctionnalités Principales

### 2.1 Gestion du Texte
- Saisie directe de texte
- Import de fichiers (.txt)
- Export en différents formats (TXT, DOCX)
- Impression du texte adapté
- Correction automatique des répétitions

### 2.2 Adaptations Visuelles
- Espacement des lettres
- Espacement des mots
- Hauteur de ligne augmentée
- Espacement des paragraphes
- Tailles de texte personnalisables (normal, grand, très grand)

### 2.3 Mise en Forme du Texte
- Coloration des syllabes
- Alternance de couleurs des lettres
- Première lettre en gras
- Séparation visuelle des mots
- Mise en évidence de la ponctuation
- Alignement du texte personnalisable

### 2.4 Aides à la Lecture
- Règle de lecture suivant le curseur
- Ligne de focus
- Synthèse vocale (Text-to-Speech)
- Lecture bionique
- Guide de lecture
- Lignes guides
- Surlignage au survol

### 2.5 Personnalisation
- Choix de polices adaptées (OpenDyslexic, Arial, Comic Sans MS)
- Raccourcis clavier personnalisés
- Sauvegarde des préférences

## 3. Spécifications Techniques

### 3.1 Technologies
- React avec TypeScript
- Tailwind CSS pour le style
- Vite comme bundler
- Lucide React pour les icônes

### 3.2 Performance
- Cache des syllabes pour optimisation
- Rendu optimisé des adaptations
- Chargement progressif des fonctionnalités

### 3.3 Accessibilité
- Conformité WCAG 2.1
- Support des lecteurs d'écran
- Navigation au clavier
- Messages d'erreur clairs

## 4. Interface Utilisateur

### 4.1 Structure
- En-tête avec logo et raccourcis
- Zone de texte principale
- Panneau d'options d'adaptation
- Vue comparative (texte original vs adapté)
- Informations sur les recherches

### 4.2 Ergonomie
- Interface intuitive
- Retour visuel immédiat
- Groupement logique des options
- Aide contextuelle

## 5. Documentation

### 5.1 Pour les Utilisateurs
- Guide d'utilisation
- Explications des adaptations
- Base de recherches scientifiques
- FAQ

### 5.2 Pour les Développeurs
- Documentation technique
- Guide de contribution
- Standards de code
- Procédures de test

## 6. Maintenance et Évolution

### 6.1 Maintenance
- Mises à jour régulières
- Correction de bugs
- Optimisations de performance

### 6.2 Évolutions Futures
- Support de formats supplémentaires
- Nouvelles adaptations
- Profils utilisateurs
- Version mobile
- API pour intégration tierce

## 7. Contraintes et Exigences

### 7.1 Techniques
- Compatible avec les navigateurs modernes
- Responsive design
- Performance optimale
- Sécurité des données

### 7.2 Légales
- RGPD
- Accessibilité numérique
- Licences open source