// Thin mount — the enforcement trinity (cross · fold · weave) computes all gates from src.
import { runEnforcementTrinity } from '../src/quantum/enforcement/index.ts'

process.exit(runEnforcementTrinity(process.cwd()))
