import Alu
import Sparkle.Compiler.Elab

-- Emits the RTL. Run from this directory: `lake env lean Synth.lean` writes alu.sv beside it.
#writeVerilogDesign Alu.alu "alu.sv"
