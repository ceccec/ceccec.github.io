---
outline: deep
---

# Ceccec Commands

This is the command layer for the ceccec double torus. A command is the API, the
URL, the query, and the executable intent.

<DoubleTorusCommands />

## Command law

The command surface follows the ceccec repository-as-API rule:

```text
command -> repository address -> computed result -> content receipt
```

The site uses these commands as its construction contract:

- `ceccec.torus.matrix`
- `ceccec.torus.vector`
- `ceccec.torus.flow`
- `ceccec.repository.api`
- `ceccec.repository.resolve`
- `ceccec.proof.verify`
- `ceccec.site.manifest`

The pages are views over those commands. The command results carry UUID-like
receipts so a result can be treated as another content-addressed atom.
