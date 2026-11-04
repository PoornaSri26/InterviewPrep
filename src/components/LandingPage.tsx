/* eslint-disable */
import * as React from "react"
import { useRef, useEffect } from "react"
import { Sparkles, ArrowRight } from "lucide-react"
import DotCursor from "./DotCursor"

type Props = {
    x?: number
    y?: number
    radius?: number
    density?: number
    gap?: number
    particleSize?: number
    colors?: string[]
    direction?: "inside" | "outside"
    speed?: number
    style?: React.CSSProperties
}

function ParticleVoid(props: Props) {
    props = { ...COMPONENT_DEFAULTS, ...props }
    const {
        x = 50,
        y = 50,
        radius = 100,
        density = 30,
        gap = 40,
        particleSize = 10,
        colors = ["#ffffff"],
        direction = "inside",
        speed = 2,
        style,
    } = props

    const color = "#000000"
    const speedAmt = Math.max(0, speed) / 2
    const flowSpeed = direction === "inside" ? -speedAmt : speedAmt

    const perspective = 200
    const tunnelSpread = 1

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const animRef = useRef<number>(0)
    const sizeRef = useRef({ w: 600, h: 400 })

    const offsetRef = useRef(0)
    const maxDepth = 600

    useEffect(() => {
        const container = containerRef.current
        const canvas = canvasRef.current
        if (!container || !canvas) return

        const ro = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect
                const dpr = window.devicePixelRatio || 1
                canvas.width = width * dpr
                canvas.height = height * dpr
                canvas.style.width = `${width}px`
                canvas.style.height = `${height}px`
                sizeRef.current = { w: width, h: height }
            }
        })
        ro.observe(container)
        return () => ro.disconnect()
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let lastTime = performance.now()

        const wrap = (val: number, max: number) => {
            return ((val % max) + max) % max
        }

        const draw = (now: number) => {
            const dt = Math.min((now - lastTime) / 16.667, 3)
            lastTime = now

            const { w, h } = sizeRef.current
            const dpr = window.devicePixelRatio || 1

            offsetRef.current = wrap(
                offsetRef.current - flowSpeed * dt,
                maxDepth
            )

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            ctx.clearRect(0, 0, w, h)

            const cx = w / 2
            const cy = h / 2

            const centreCx = (x / 100) * w
            const centreCy = (y / 100) * h

            const oxPx = centreCx - cx
            const oyPx = centreCy - cy

            const scaleVoid = perspective / (perspective + maxDepth)
            const R_centre_3d = radius / scaleVoid

            const activeDensity = Math.max(density, 1)
            const activeGap = Math.max(gap, 10)
            const particlesPerSpoke = Math.max(
                1,
                Math.round(maxDepth / activeGap)
            )
            const effGap = maxDepth / particlesPerSpoke

            type ProjectedParticle = {
                x: number
                y: number
                size: number
                alpha: number
                z: number
                color: string
            }
            const projected: ProjectedParticle[] = []

            for (let i = 0; i < activeDensity; i++) {
                const baseAngle = (i / activeDensity) * Math.PI * 2

                for (let k = 0; k < particlesPerSpoke; k++) {
                    const z = wrap(offsetRef.current + k * effGap, maxDepth)
                    const depthFactor = z / maxDepth
                    const scale = perspective / (perspective + z)

                    const projCx = cx + oxPx * depthFactor
                    const projCy = cy + oyPx * depthFactor

                    const R_3d =
                        R_centre_3d + (1 - depthFactor) * tunnelSpread * (w / 2)
                    const R_proj = R_3d * scale

                    const px = projCx + R_proj * Math.cos(baseAngle)
                    const py = projCy + R_proj * Math.sin(baseAngle)

                    if (px < -20 || px > w + 20 || py < -20 || py > h + 20)
                        continue

                    const size = Math.max(0.4, particleSize * scale)
                    const alpha = Math.max(0.05, 1 - depthFactor * 0.9)
                    const colorIdx = (i + k) % colors.length
                    const particleColor = colors[colorIdx]

                    projected.push({
                        x: px,
                        y: py,
                        size,
                        alpha,
                        z,
                        color: particleColor,
                    })
                }
            }

            projected.sort((a, b) => b.z - a.z)

            for (let i = 0; i < projected.length; i++) {
                const pt = projected[i]
                ctx.globalAlpha = pt.alpha
                ctx.fillStyle = pt.color
                ctx.beginPath()
                ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2)
                ctx.fill()
            }
            ctx.globalAlpha = 1.0

            ctx.fillStyle = color
            ctx.beginPath()
            ctx.arc(centreCx, centreCy, radius, 0, Math.PI * 2)
            ctx.fill()

            animRef.current = requestAnimationFrame(draw)
        }

        animRef.current = requestAnimationFrame(draw)
        return () => cancelAnimationFrame(animRef.current)
    }, [x, y, radius, density, gap, particleSize, colors, flowSpeed])

    return (
        <div
            ref={containerRef}
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                overflow: "hidden",
                zIndex: 0,
                ...style,
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    )
}

const COMPONENT_DEFAULTS = {
    x: 50,
    y: 50,
    radius: 10,
    density: 40,
    gap: 30,
    particleSize: 4,
    colors: ["#6366f1", "#06b6d4", "#a855f7"],
    direction: "inside",
    speed: 3,
}

interface LandingPageProps {
  onEnterApp: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp }) => {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100vw', 
      height: '100vh', 
      background: '#000000',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'none'
    }}>
      <DotCursor headColor="#9FFFCB" trailColor="#7AE582" size={12} trailLength={15} trailThickness={10} label={false} />
      <ParticleVoid />
      
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: '600px',
        padding: '2rem',
        animation: 'fadeIn 1.5s ease-in'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)'
          }}>
            <Sparkles size={32} color="#fff" />
          </div>
        </div>
        
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 800,
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #67e8f9 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.02em'
        }}>
          InterviewMaster OS
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          color: 'rgba(255, 255, 255, 0.7)',
          marginBottom: '0.5rem',
          lineHeight: 1.6
        }}>
          Apex Tech Prep & Mock Studio
        </p>
        
        <p style={{
          fontSize: '1rem',
          color: 'rgba(255, 255, 255, 0.5)',
          marginBottom: '2rem',
          lineHeight: 1.8
        }}>
          AI-powered mock interviews • DSA practice with SRS • System design mastery • 
          Resume-personalized questions • Complete interview preparation platform
        </p>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          justifyContent: 'center',
          marginBottom: '2rem',
          fontSize: '0.85rem',
          color: 'rgba(255, 255, 255, 0.6)'
        }}>
          <span style={{ padding: '0.4rem 0.9rem', background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.4)', borderRadius: '20px' }}>🎯 AI Mock Interviews</span>
          <span style={{ padding: '0.4rem 0.9rem', background: 'rgba(6, 182, 212, 0.15)', border: '1px solid rgba(6, 182, 212, 0.4)', borderRadius: '20px' }}>🧠 DSA + SRS</span>
          <span style={{ padding: '0.4rem 0.9rem', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.4)', borderRadius: '20px' }}>🏗️ System Design</span>
          <span style={{ padding: '0.4rem 0.9rem', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.4)', borderRadius: '20px' }}>📄 Resume Personalized</span>
        </div>
        
        <button
          onClick={onEnterApp}
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
            color: '#fff',
            border: 'none',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            borderRadius: '50px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 0 30px rgba(99, 102, 241, 0.5), 0 10px 40px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease',
            fontFamily: 'inherit'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 40px rgba(99, 102, 241, 0.7), 0 15px 50px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.5), 0 10px 40px rgba(0, 0, 0, 0.3)';
          }}
        >
          Enter Platform
          <ArrowRight size={20} />
        </button>
        
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default LandingPage;
