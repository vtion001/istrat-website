"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function LiquidChrome() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create animated liquid geometry with icoSphere
    const geometry = new THREE.IcosahedronGeometry(3, 5)
    const material = new THREE.MeshPhongMaterial({
      color: 0xDC7026,
      emissive: 0x2a1a0d,
      specular: 0xffffff,
      shininess: 100,
      wireframe: false,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Store original positions for morphing
    const positionAttribute = geometry.getAttribute("position")
    const originalPositions = positionAttribute.array.slice()

    // Lighting
    const light1 = new THREE.PointLight(0xDC7026, 0.8)
    light1.position.set(10, 10, 10)
    scene.add(light1)

    const light2 = new THREE.PointLight(0xffffff, 0.5)
    light2.position.set(-10, -10, 10)
    scene.add(light2)

    const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
    scene.add(ambientLight)

    // Animation
    let time = 0
    const animate = () => {
      requestAnimationFrame(animate)

      time += 0.002

      // Morph geometry
      const positionArray = positionAttribute.array
      for (let i = 0; i < originalPositions.length; i++) {
        const originalValue = originalPositions[i]
        const offset = Math.sin(time + i * 0.1) * Math.cos(time * 0.7 + i * 0.05) * 0.2
        positionArray[i] = originalValue + offset
      }
      positionAttribute.needsUpdate = true

      // Rotate mesh
      mesh.rotation.x += 0.0003
      mesh.rotation.y += 0.0005
      mesh.rotation.z += 0.0002

      // Animate lights
      light1.position.x = Math.cos(time) * 15
      light1.position.y = Math.sin(time * 0.7) * 15
      light2.position.x = Math.cos(time + Math.PI) * 12
      light2.position.y = Math.sin(time * 0.5 + Math.PI) * 12

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      renderer.domElement.remove()
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}
