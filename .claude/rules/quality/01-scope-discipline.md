> Cette rule s'applique EN PREMIER, avant toute autre.
> Rester dans le périmètre réduit le risque d'hallucination
> (voir `02-anti-hallucination.md`) et d'entropie
> (voir `03-software-entropy.md`).

# Scope discipline

Each response involving code changes will start with:
"J'ai lu les règles : scope-discipline.md"

## Principe

Un changement = un périmètre = un commit.
Ne JAMAIS modifier du code hors de la demande initiale.

---

## Avant de commencer

### Définir le périmètre
1. Quels fichiers sont concernés ?
2. Quels fichiers ne doivent PAS être touchés ?
3. Quel est le résultat attendu — et rien d'autre ?

### Lire avant d'écrire
Avant de modifier un fichier :
1. Ouvrir le fichier (Read)
2. Comprendre le code existant et ses patterns
3. Identifier les conventions en place
4. Seulement ALORS modifier

Ne jamais écrire dans un fichier qu'on n'a pas lu.

---

## Pendant le code

### Règle du périmètre strict

```
SI la modification n'est pas dans la demande
ALORS ne PAS la faire
```

Même si :
- "C'est un quick fix de 2 secondes"
- "Tant qu'à faire, autant corriger ça"
- "J'ai vu un token mal nommé en passant"
- "Ce composant pourrait être mieux structuré"

### Quand on trouve un problème hors périmètre

```
1. STOP — ne pas corriger
2. Signaler : "J'ai vu [problème] dans [fichier:ligne]"
3. Demander : "Tu veux que je corrige ça séparément ?"
4. Si oui → nouveau périmètre, nouveau changement
5. Si non → continuer la tâche en cours
```

### Un fichier à la fois
- Terminer un fichier avant de passer au suivant
- Si le changement impacte 3+ fichiers → proposer
  un découpage en étapes
- Chaque étape doit être vérifiable indépendamment

---

## Après le code

### Vérification du périmètre
Avant de dire "c'est fait" :

- [ ] J'ai modifié uniquement les fichiers de la demande ?
- [ ] Aucun fichier hors périmètre n'a été touché ?
- [ ] Le diff ne contient que des changements liés ?
- [ ] Pas de "bonus" non demandé ?

### Vérification technique
Avant de dire "c'est fait" :

- [ ] Si tokens modifiés → variables CSS valides (oklch) ?
- [ ] Si composant modifié → `npx shadcn build` réussit ?
- [ ] Si composant modifié → JSON dans `public/r/` est correct ?
- [ ] Si preset modifié → `theme.css` et `preset.js` cohérents ?

Ne jamais dire "c'est fait" sans avoir vérifié.

---

1-2 fichiers  → risque faible → checklist standard
3-5 fichiers  → risque moyen  → justifier chaque fichier
6+ fichiers   → risque élevé  → découper obligatoire

---

## Commits

Voir `.claude/rules/commit.md` pour les conventions
de commit, scopes, et le workflow changelogs.

---

## Permissions

### L'IA peut faire sans demander
- Lire n'importe quel fichier
- Lister des fichiers et dossiers
- Lancer `npx shadcn build`
- Chercher dans le code (grep, find)

### L'IA doit demander AVANT
- Modifier un fichier hors périmètre
- Installer une nouvelle dépendance
- Supprimer du code ou un fichier
- Modifier la configuration (tsconfig, next.config, components.json)
- Changer la structure des dossiers
- Toute opération irréversible

---

## Cas particuliers

### Impact sur les projets consommateurs

```
Modifier un token ou un composant du registry impacte
potentiellement reqperf, claude-cockpit et analyzekit.

Avant toute modification de token ou composant :
1. Signaler l'impact potentiel sur les consommateurs
2. Vérifier la rétrocompatibilité
3. Si breaking change → le signaler explicitement
```

### L'utilisateur demande "et aussi..."
```
"Modifie le button et aussi ajoute un nouveau token"
→ "Ce sont 2 périmètres distincts."
→ "Je fais le button d'abord, puis le token séparément ?"
```

### Opérations destructives
```
Avant toute suppression, remplacement, ou migration :
1. Vérifier que c'est dans le périmètre
2. Signaler à l'utilisateur AVANT d'exécuter
3. Ne JAMAIS exécuter en silence
```

---

## Auto-report

Si tu détectes que tu viens d'enfreindre cette rule :
1. STOP
2. Signaler : "J'ai enfreint scope : [ce qui s'est passé]."
3. Corriger le comportement

## Résumé

```
LIRE    → toujours autorisé
MODIFIER → uniquement dans le périmètre
SIGNALER → si problème vu hors périmètre
DEMANDER → avant toute action hors périmètre
VÉRIFIER → shadcn build + JSON avant de dire "c'est fait"
IMPACT   → toujours considérer les projets consommateurs
```
