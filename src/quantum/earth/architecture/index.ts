// src/quantum/earth/architecture — the architecture drawn into the hero. The 9 logic folders are 3 trinities (4
// double-torus pairs + the core pivot, 9 = 3×3), each node wearing the Glagolitic glyph computed from its
// folder name, so the figure IS the architecture based on Glagolitic relations, from one source of truth
// (folderLaw). Consumed, not recomputed — zero tokens. The ring tumbles through the same three planes as the
// fractal (geometry), so the hero is one figure: the page at the core, the architecture turning around it.
// A word folder importing the model (word) and the geometry (word) — the UI reads the math, never the reverse.
import { folderLaw, glagoliticGlyph } from '../../heaven/mind'
import { perspective, rotate3 } from '../../wind/geometry'
import type { Dims } from '../../mountain/dimensions'

export interface ArchNode {
  folder: string
  glyph: string
  trinity: number // which of the 3 trinities (0, 1, 2)
  within: number  // -1, 0, 1 within the trinity arc
}

// The 9 architecture nodes, each wearing its folder's Glagolitic glyph — built once from folderLaw.
export function buildArchNodes(): ArchNode[] {
  const folders = folderLaw().pairedLogicFolders
  return (folders.length >= 9 ? folders.slice(0, 9) : folders).map((folder, i) => ({
    folder,
    glyph: glagoliticGlyph(folder),
    trinity: Math.floor(i / 3),
    within: (i % 3) - 1,
  }))
}

export function drawArchitecture(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  w: number,
  h: number,
  t: number,
  d: Dims,
  archNodes: readonly ArchNode[],
  hue: number,
): void {
  const R = Math.min(w, h) * 0.27
  const rXY = t * d.twist
  const placed = archNodes.map((node) => {
    const ang = (node.trinity / 3) * Math.PI * 2 + node.within * 0.42
    const v = rotate3(Math.cos(ang), Math.sin(ang), 0, rXY, t * 0.33, t * 0.21)
    const persp = perspective(v.Z)
    const hueT = (hue + node.trinity * 120) % 360
    return { ...node, x: cx + v.X * R * persp, y: cy + v.Y * R * persp, persp, hueT }
  })
  // the double-torus pairs: join each folder to its reverse-path dual (cache/quantum ⇄ quantum/water/cache)
  for (const node of placed) {
    const dual = node.folder.split('/').reverse().join('/')
    if (node.folder < dual) {
      const mate = placed.find((p) => p.folder === dual)
      if (mate) {
        ctx.strokeStyle = `hsla(${node.hueT}, 72%, 60%, 0.28)`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(node.x, node.y)
        ctx.lineTo(mate.x, mate.y)
        ctx.stroke()
      }
    }
  }
  // the glyph nodes — each folder wears its Glagolitic letter (letters are numbers; the name picks it)
  for (const node of placed) {
    ctx.fillStyle = `hsla(${node.hueT}, 82%, 64%, ${0.5 + 0.4 * node.persp})`
    ctx.font = `${Math.max(9, Math.round(14 * node.persp))}px serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(node.glyph, node.x, node.y)
  }
}
