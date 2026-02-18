import { useEffect, useRef } from 'react'

export default function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', { antialias: true, alpha: true })
    if (!gl) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Vertex shader
    const vertexShader = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `

    // Fragment shader with animated gradient
    const fragmentShader = `
      precision highp float;
      uniform float time;
      uniform vec2 resolution;
      
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        
        // Create animated gradients
        float r = sin(uv.x * 3.0 + time * 0.3) * 0.5 + 0.5;
        float g = sin(uv.y * 3.0 + time * 0.4) * 0.5 + 0.5;
        float b = sin((uv.x + uv.y) * 2.0 + time * 0.2) * 0.5 + 0.5;
        
        // Add grain texture
        float grain = fract(sin(dot(uv, vec2(12.9898, 78.233)) + time) * 43758.5453);
        
        // Blend colors with grain
        vec3 color = vec3(r, g, b) * 0.15;
        color += grain * 0.05;
        
        // Apply accent color (green tint)
        color += vec3(0.0, 0.9, 0.6) * 0.08;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `

    // Compile shader
    const compileShader = (source: string, type: number) => {
      const shader = gl!.createShader(type)!
      gl!.shaderSource(shader, source)
      gl!.compileShader(shader)
      return shader
    }

    const vShader = compileShader(vertexShader, gl.VERTEX_SHADER)
    const fShader = compileShader(fragmentShader, gl.FRAGMENT_SHADER)

    // Create program
    const program = gl.createProgram()!
    gl.attachShader(program, vShader)
    gl.attachShader(program, fShader)
    gl.linkProgram(program)
    gl.useProgram(program)

    // Create buffer
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1])
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

    const positionLocation = gl.getAttribLocation(program, 'position')
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    const timeLocation = gl.getUniformLocation(program, 'time')
    const resolutionLocation = gl.getUniformLocation(program, 'resolution')

    let animationId: number

    const animate = (t: number) => {
      gl!.uniform1f(timeLocation, t * 0.001)
      gl!.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4)
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ background: '#000000' }}
    />
  )
}
