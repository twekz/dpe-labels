# DPE Labels

**Petit plugin JS pour la génération et l'affichage de diagnostics de performance énergétique (DPE) sur le web. Léger, responsive, flexible.**

📜 L'affichage est à jour suivant la dernière réglementation ([arrêté du 25 mars 2024](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049446315)) entrée en vigueur le 1er juillet 2024. 

🇬🇧 _Since this plugin is strictly targeted for the French market, its documentation is written in French. Please let me know if any English-speaking documentation is needed._

## Démarrage

### Installation

Récupérer le package via `npm` :

```
npm install dpe-labels
```

### Utilisation

1. Inclure les fichiers `dpe-labels.css` et `dpe-labels.js` dans votre page HTML.
2. Ajouter les placeholders aux endroits souhaités, avec les valeurs nécessaires :

```html
<!-- Rendu DPE complet (CEP & EGES) : -->
<div data-dpe data-cep="123" data-eges="45"></div>

<!-- Rendu CEP uniquement : -->
<div data-dpe="cep" data-cep="123" data-eges="45"></div>

<!-- Rendu EGES uniquement : -->
<div data-dpe="eges" data-eges="45"></div>

<!-- DPE ≥ 800m d'altitude : -->
<div data-dpe data-cep="123" data-eges="45" data-altitude></div>

<!-- DPE surface < 40m2 : -->
<div data-dpe data-cep="123" data-eges="45" data-surface="10"></div>
```

## Développement

```shell
npm install
```

```shell
# Lance un serveur de dev pour index.html avec HMR
npm run dev
```

```shell
# Lance les tests en mode 'watch'
npm run test:dev
```

## TODO

### À faire avant la première release majeure :

- [x] ~~Mise à jour réglementaire complète :~~
  - [x] ~~Ajustement des seuils pour les biens de petites surfaces (de 8 à 40 m2),~~
  - [x] ~~Ajustement des seuils pour les biens en altitude.~~
- [ ] Ajout d'une option pour afficher la note (lettre) sans renseigner de valeur chiffrée.
- [ ] Gestion des DPE vierges (affichage des graphiques sans note).
- [ ] Meilleure optimisation du HTML et CSS générés.
- [ ] Documentation des options disponibles.
- [ ] Ajout de tests de rendu.
- [ ] Ajout d'exemples d'usage.
- [ ] Améliorer l'accessibilité.

### Projets annexes :

- [ ] Création d'un wrapper pour composants React.
- [ ] Création d'un plugin WordPress **(EN COURS)**

## Auteur

* **Sam Lemaresquier** - [@twekz](https://github.com/twekz) | [samlem.com](https://samlem.com)

## License

Ce projet est publié sous Licence Publique Générale (GNU GPL version 3). Voir le fichier de [LICENSE](LICENSE) pour les détails.
