> Cette rule s'applique APRÈS scope et anti-hallucination.
> Voir `01-scope-discipline.md` et `02-anti-hallucination.md`.

# Entropie logicielle × Design System

## Le lien

L'entropie dans un design system est particulièrement
dangereuse : une erreur ici se propage à tous les projets
consommateurs (reqperf, claude-cockpit, analyzekit).

```
Entropie dans le DS → token/composant incorrect
→ propagé à 3 projets → entropie multipliée × 3
```

---

## Zones chaudes du design system

### Risque élevé (impact tous les consommateurs)

| Zone | Fichier | Pourquoi |
|------|---------|----------|
| Tokens light | `src/v4/theme.css` — `:root` | Toute couleur modifiée change le rendu partout |
| Tokens dark | `src/v4/theme.css` — `.dark` | Oubli d'un token = incohérence dark mode |
| Registry manifest | `registry.json` | Chemin ou dépendance faux = install cassée |
| Preset v3 | `src/v3/preset.js` | Doit rester synchronisé avec v4 |

### Risque modéré (impact composant par composant)

| Zone | Fichier | Pourquoi |
|------|---------|----------|
| Button variants | `registry/.../button.tsx` | Composant le plus utilisé |
| Page layout | `registry/.../page-layout/` | Multi-fichiers, couplage header/sidebar |

### Risque faible

| Zone | Fichier | Pourquoi |
|------|---------|----------|
| CI/CD | `.github/workflows/` | Pas de code métier |
| Next.js config | `next.config.ts`, `app/` | Outil de build uniquement |

---

## Checklist avant modification

### Si token modifié
- [ ] Le token existe dans `:root` ET `.dark` ?
- [ ] Le format oklch est valide ?
- [ ] Le `@theme inline` référence la variable ?
- [ ] Le preset v3 est synchronisé (si applicable) ?
- [ ] Quel impact sur les projets consommateurs ?

### Si composant modifié
- [ ] Les imports sont corrects ?
- [ ] `npx shadcn build` passe ?
- [ ] Le JSON généré dans `public/r/` est correct ?
- [ ] Les dépendances dans `registry.json` sont à jour ?
- [ ] Le composant utilise uniquement des tokens sémantiques ?

---

## Stratégies de réduction

### 1. Synchronisation v3/v4
Le preset v3 et le theme v4 doivent rester synchronisés.
Chaque nouveau token ajouté en v4 doit avoir son
équivalent en v3. Signaler si la sync est cassée.

### 2. Cohérence light/dark
Chaque token ajouté à `:root` DOIT avoir son équivalent
dans `.dark`. Vérifier systématiquement. Un token
manquant en dark = bug silencieux pour les consommateurs.

### 3. Registry manifest à jour
Après chaque ajout/modification de composant, vérifier
que `registry.json` reflète la réalité :
- Chemins de fichiers corrects
- Dépendances listées
- registryDependencies si le composant en utilise d'autres

### 4. Rétrocompatibilité
Avant de renommer ou supprimer un token/composant :
- Signaler le breaking change
- Proposer une stratégie de migration
- Ne JAMAIS faire un breaking change sans accord

---

## Résumé

```
TOKENS     → haute vigilance, impact × 3 projets
COMPOSANTS → vérifier build + JSON après chaque modif
V3/V4      → toujours synchronisés
LIGHT/DARK → toujours synchronisés
BREAKING   → signaler, proposer migration, attendre accord
```
