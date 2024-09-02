<script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    import('../lib').then(({ dpeLabels }) => {
        dpeLabels();
    })
  });
</script>

# Présentation

::: warning
**Cette librairie est activement en cours de développement et n'est pas encore apte à être utilisée
en production.**

Les versions `< 1.0` sont susceptibles d'introduire des changements majeurs à chaque publication.
Ces changements sont systématiquement documentés dans le [CHANGELOG](https://github.com/twekz/dpe-labels/blob/main/CHANGELOG.md).
:::

**DPE Labels** est une librairie Javascript permettant de générer et d'afficher des
diagnostics de performance énergétique sur le web.


<HtmlExampleBlock>
  <div data-dpe></div>
</HtmlExampleBlock>

## Intention

Cette librairie a été créée par [Sam Lemaresquier](https://samlem.com) afin de palier à un
manque de solution open-source répondant à tous les critères suivants&nbsp;:

- À jour avec la réglementation (voir ci-dessous),
- Code client le plus léger possible,
- Aucune dépendance à un framework (React ou autre),
- Rendu majoritairement en HTML et CSS pour :
  - éviter de charger de multiples et lourdes images en SVG ou PNG,
  - être véritablement responsive,
  - être personnalisable pour s'intégrer au mieux dans les sites clients.

## Réglementation

Cette librairie s'efforce de suivre les dispositions de l'[arrêté du 25 mars 2024](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049446315)
entrées en vigueur le 1er juillet 2024.

Avertissement : cette librairie est fournie "en l'état", sans garantie d'exactitude ou
d'exhaustivité. L'utilisation de ce code est à vos propres risques, et son auteur ne peut être tenu
responsable des erreurs, omissions ou interprétations incorrectes des dispositions légales.

## Licence

Cette librairie est publiée sous Licence Publique Générale (GNU GPL version 3). Voir le
[fichier de licence](https://github.com/twekz/dpe-labels/blob/main/LICENSE) pour les détails.
