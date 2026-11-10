# sainte_marie_des_anges

# Province Sainte Marie des Anges · OFM RDC

Site vitrine francophone de la Province Sainte Marie des Anges des Frères Mineurs en République Démocratique du Congo.

## Prérequis

- Node.js compatible avec Next.js 16
- npm

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Vérification et production

```bash
npm run lint
npm run build
npm run start
```

Le serveur Next.js de production démarre sur le port 3000 par défaut. Déployer sur un hébergeur compatible avec un serveur Node.js et configurer le domaine `www.smardc.org` avec HTTPS. Les URL canoniques, Open Graph, le plan du site et les règles robots utilisent ce domaine.

## Contenu et fonctionnalités à finaliser avec la Curie

Les textes historiques, coordonnées, effectifs et descriptions de mission présentés sur le site reprennent le cahier de charge fourni pour ce projet. Les informations qui n’étaient pas fournies ne sont pas inventées. Avant publication, la Curie provinciale doit valider les éléments suivants :

- le message signé du Ministre provincial ;
- la liste à jour des fraternités et de leurs diocèses, ainsi que celle des paroisses ;
- les projets actifs et leurs descriptions ;
- les actualités et communiqués datés ;
- les fichiers des livres, statuts, circulaires, décrets et publications ;
- les coordonnées officielles des offices, les comptes sociaux et les données bancaires éventuelles destinées aux dons.

Le formulaire de contact prépare un courriel dans l’application de messagerie de la personne qui visite le site ; il ne transmet ni ne stocke les données sur un serveur. Le lien de don ouvre un courriel à la Curie : aucun paiement en ligne n’est configuré. L’annuaire, les formulaires de demande et la bibliothèque de téléchargement ne sont pas activés tant que leurs contenus et leurs modalités de protection ne sont pas définis.

## Déploiement

Le déploiement doit être effectué dans le compte d’hébergement de la Province :

1. connecter le dépôt au fournisseur Node.js choisi ;
2. exécuter `npm run build` comme commande de compilation ;
3. utiliser `npm run start` comme commande de démarrage ;
4. rattacher `www.smardc.org`, activer HTTPS et vérifier la configuration DNS ;
5. tester la navigation mobile, le formulaire de contact, les métadonnées, puis `https://www.smardc.org/robots.txt` et `https://www.smardc.org/sitemap.xml`.

La disponibilité DNS du domaine et l’accès au compte d’hébergement ne peuvent pas être vérifiés depuis ce dépôt.
