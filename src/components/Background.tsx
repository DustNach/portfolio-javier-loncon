import { useEffect, useRef } from 'react'

// ── Tesseract geometry ──────────────────────────────────────────────────────
// 16 vertices: all (±1, ±1, ±1, ±1) combinations
const VERTS: number[][] = Array.from({ length: 16 }, (_, i) => [
  (i & 1) ? 1 : -1,
  (i & 2) ? 1 : -1,
  (i & 4) ? 1 : -1,
  (i & 8) ? 1 : -1,
])

// 32 edges: vertices that differ in exactly one bit
const EDGES: [number, number][] = []
for (let i = 0; i < 16; i++) {
  for (let j = i + 1; j < 16; j++) {
    const d = i ^ j
    if (d !== 0 && (d & (d - 1)) === 0) EDGES.push([i, j])
  }
}

// Rotate 4D vector in a given plane
const rot = (v: number[], a: number, b: number, angle: number): number[] => {
  const r = [...v]
  const c = Math.cos(angle)
  const s = Math.sin(angle)
  r[a] = c * v[a] - s * v[b]
  r[b] = s * v[a] + c * v[b]
  return r
}

// 4D → 2D double perspective projection
const project = (v: number[], fov3: number, fov2: number): [number, number, number] => {
  const w4 = fov3 / (fov3 - v[3])          // 4D → 3D
  const x3 = v[0] * w4, y3 = v[1] * w4, z3 = v[2] * w4
  const w3 = fov2 / (fov2 + z3)            // 3D → 2D
  return [x3 * w3, y3 * w3, v[3]]          // carry w for colour
}

// ── Canvas component ────────────────────────────────────────────────────────
const TesseractCanvas = () => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    let t = 0

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const frame = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      t += 0.004

      // Three simultaneous slow rotations for full 4D tumble
      const pts = VERTS.map(v => {
        let r = rot(v, 0, 1, t * 0.60)   // XY
        r     = rot(r, 2, 3, t * 0.40)   // ZW
        r     = rot(r, 0, 3, t * 0.25)   // XW
        r     = rot(r, 1, 2, t * 0.18)   // YZ
        const size = Math.min(width, height) * 0.30
        const [px, py, w] = project(r, 2.8, 2.2)
        return { x: px * size + width / 2, y: py * size + height / 2, w }
      })

      // ── Draw edges ──────────────────────────────────────────────────────
      EDGES.forEach(([i, j]) => {
        const a = pts[i], b = pts[j]
        const avgW = (a.w + b.w) / 2          // –1 … 1
        const norm  = (avgW + 1) / 2           // 0  … 1

        // Cyan (6,182,212) → violet (139,92,246) based on 4th dimension
        const rr = Math.round(6   + norm * (139 - 6))
        const gg = Math.round(182 + norm * (92  - 182))
        const bb = Math.round(212 + norm * (246 - 212))
        const alpha = 0.08 + norm * 0.14       // subtle: 0.08–0.22

        ctx.save()
        ctx.shadowColor  = `rgba(${rr},${gg},${bb},0.6)`
        ctx.shadowBlur   = 8
        ctx.strokeStyle  = `rgba(${rr},${gg},${bb},${alpha})`
        ctx.lineWidth    = 0.9
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
        ctx.restore()
      })

      // ── Draw vertices ───────────────────────────────────────────────────
      pts.forEach(({ x, y, w }) => {
        const norm  = (w + 1) / 2
        const rr = Math.round(6   + norm * (139 - 6))
        const gg = Math.round(182 + norm * (92  - 182))
        const bb = Math.round(212 + norm * (246 - 212))

        ctx.save()
        ctx.shadowColor = `rgba(${rr},${gg},${bb},0.9)`
        ctx.shadowBlur  = 12
        ctx.fillStyle   = `rgba(${rr},${gg},${bb},${0.25 + norm * 0.35})`
        ctx.beginPath()
        ctx.arc(x, y, 2.2, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      raf = requestAnimationFrame(frame)
    }

    frame()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />
}

// ── Background wrapper ──────────────────────────────────────────────────────
const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">

      {/* Animated tesseract */}
      <TesseractCanvas />

      {/* Aurora blob — violet left */}
      <div style={{
        position: 'absolute', top: '-20%', left: '-10%',
        width: '55%', paddingBottom: '55%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.05) 50%, transparent 70%)',
        filter: 'blur(48px)',
        animation: 'aurora-drift-1 14s ease-in-out infinite',
      }} />

      {/* Aurora blob — cyan right */}
      <div style={{
        position: 'absolute', top: '10%', right: '-15%',
        width: '50%', paddingBottom: '50%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.14) 0%, rgba(6,182,212,0.04) 50%, transparent 70%)',
        filter: 'blur(56px)',
        animation: 'aurora-drift-2 18s ease-in-out infinite',
      }} />

      {/* Aurora blob — blue center */}
      <div style={{
        position: 'absolute', top: '30%', left: '30%',
        width: '40%', paddingBottom: '40%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, rgba(59,130,246,0.03) 50%, transparent 70%)',
        filter: 'blur(64px)',
        animation: 'aurora-drift-3 22s ease-in-out infinite',
      }} />

      {/* Aurora blob — violet bottom */}
      <div style={{
        position: 'absolute', bottom: '-10%', right: '20%',
        width: '45%', paddingBottom: '45%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, rgba(168,85,247,0.03) 50%, transparent 70%)',
        filter: 'blur(56px)',
        animation: 'aurora-drift-4 16s ease-in-out infinite',
      }} />

    </div>
  )
}

export default Background
