const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">

      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      {/* Aurora blob — violeta izquierda */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '55%',
          paddingBottom: '55%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.05) 50%, transparent 70%)',
          filter: 'blur(48px)',
          animation: 'aurora-drift-1 14s ease-in-out infinite',
        }}
      />

      {/* Aurora blob — cyan derecha */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-15%',
          width: '50%',
          paddingBottom: '50%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.14) 0%, rgba(6,182,212,0.04) 50%, transparent 70%)',
          filter: 'blur(56px)',
          animation: 'aurora-drift-2 18s ease-in-out infinite',
        }}
      />

      {/* Aurora blob — azul centro */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '30%',
          width: '40%',
          paddingBottom: '40%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, rgba(59,130,246,0.03) 50%, transparent 70%)',
          filter: 'blur(64px)',
          animation: 'aurora-drift-3 22s ease-in-out infinite',
        }}
      />

      {/* Aurora blob — violeta inferior */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '20%',
          width: '45%',
          paddingBottom: '45%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, rgba(168,85,247,0.03) 50%, transparent 70%)',
          filter: 'blur(56px)',
          animation: 'aurora-drift-4 16s ease-in-out infinite',
        }}
      />

    </div>
  )
}

export default Background
