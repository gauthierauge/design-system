> Cette rule s'applique APRÈS avoir vérifié le scope.
> Voir `01-scope-discipline.md`.

# Anti-hallucination

Each response involving code will start with:
"J'ai lu les règles : anti-hallucination.md"

## Principe

L'IA ne sait pas ce qu'elle ne sait pas. Quand elle
manque d'information, elle comble le vide avec ce qui
"semble" correct. Le résultat semble juste mais est faux.

Règle fondamentale : **se baser UNIQUEMENT sur le code
du projet**. Ne jamais combler un manque avec une
connaissance générale d'un pattern similaire vu ailleurs.

---

## Avant chaque affirmation sur le code

- [ ] J'ai ouvert le fichier ? (pas de mémoire)
- [ ] J'ai la ligne exacte ? (pas de numéro rond inventé)
- [ ] Si je cite un import → il est dans package.json ?
- [ ] Si je cite une variable CSS → elle existe dans theme.css ?
- [ ] Si je cite une classe Tailwind → elle est définie dans @theme ?
- [ ] Si je cite un fichier → il existe ?
- [ ] Si je dis "le build passe" → l'ai-je lancé ?

Si la réponse est "non" à un seul point → vérifier
AVANT de répondre.

---

## Avant de proposer du code

- [ ] Chaque import est installé dans le projet ?
- [ ] Chaque variable CSS référencée existe dans theme.css ?
- [ ] Les classes Tailwind utilisées sont valides (sémantiques) ?
- [ ] Les chemins de fichiers sont corrects (casse, extension) ?
- [ ] Pas de modification hors périmètre de la demande ?
- [ ] Si nouvelle dépendance → signaler "ce package n'est
      pas installé, tu veux l'ajouter ?"

### Spécifique au design system

- [ ] Les tokens oklch sont syntaxiquement valides ?
      (format : `oklch(L C H)` avec L entre 0-1)
- [ ] Light et dark sont cohérents ? (pas de token oublié
      dans l'un des deux thèmes)
- [ ] Le registry.json référence les bons chemins de fichiers ?
- [ ] Les composants utilisent `@/lib/utils` pour cn() ?

---

## Quand je ne trouve pas

```
1. STOP — ne pas inventer
2. Dire "je ne trouve pas [X]"
3. NE PAS proposer une alternative "probable"
4. Revenir au dernier fait vérifié
5. Demander à l'utilisateur de confirmer
```

Une hallucination en entraîne d'autres. Si la première
affirmation est fausse, tout ce qui en découle est faux.
Casser la chaîne au premier doute.

---

## Format des affirmations

### Quand je suis certain (j'ai ouvert le fichier)
"Vérifié : `packages/tailwind-preset/src/v4/theme.css:42`
— token `--success: oklch(0.596 0.145 163.225)`"

### Quand je pense savoir (pas vérifié)
"Je pense que c'est dans `theme.css`, vérifie."

### Quand je ne sais pas
"Je ne sais pas. Il faut investiguer."

### Phrases interdites
- "Bien sûr" / "Évidemment" (masque l'incertitude)
- "C'est trivial" / "Il suffit de" (minimise)
- "C'est déjà géré" (sans preuve)
- "Normalement" / "En principe" (sans vérification)
- "C'est standard shadcn" (sans vérifier dans le projet)

---

## Quand l'utilisateur détecte une erreur

1. Ne pas se défendre — pas de "mais j'avais dit..."
2. Dire "tu as raison, je vérifie"
3. Ouvrir le fichier concerné (Read/Grep)
4. Corriger avec la source exacte
5. Une correction factuelle suffit — pas 3 excuses

---

## Conversations longues

Plus une conversation dure, plus l'IA dérive. Le contexte
se dégrade, les détails du début s'effacent, et l'IA
comble les trous avec de faux souvenirs.

### Signaux de dérive
- La conversation dépasse ~30 échanges
- L'IA répète une information du début mais légèrement
  modifiée (faux souvenir)
- L'IA se contredit par rapport à un échange précédent

### Quand ça arrive
```
1. STOP — ne pas continuer sur la lancée
2. Signaler : "conversation longue, risque de dérive"
3. Résumer l'état actuel : quels fichiers, quel objectif
4. Rouvrir les fichiers clés avant de continuer
```

**Ne jamais se fier à ce que l'IA "se souvient" d'un
échange précédent. Si c'est important, rouvrir le fichier
et revérifier.**

---

## Échecs silencieux d'outils

Quand un outil échoue partiellement ou renvoie des données
incomplètes, l'IA comble le vide avec du contenu inventé.

```
1. STOP — ne pas compléter avec du contenu inventé
2. Signaler : "l'outil a échoué / renvoyé des données
   partielles"
3. Montrer ce qui a été reçu vs ce qui manque
4. Ne PAS combler le vide
5. Demander à l'utilisateur comment procéder
```

**Un résultat d'outil partiel ou absent = donnée manquante.
Donnée manquante = "je ne sais pas, voici ce que j'ai."**

---

## Auto-report

Si tu détectes que tu viens d'enfreindre cette rule :
1. STOP
2. Signaler : "J'ai enfreint anti-hallucination : [ce qui s'est passé]."
3. Corriger le comportement
