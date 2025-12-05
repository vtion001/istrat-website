declare module "three" {
  export class Scene {
    add(object: any): void
  }

  export class PerspectiveCamera {
    constructor(fov: number, aspect: number, near: number, far: number)
    aspect: number
    position: { z: number }
    updateProjectionMatrix(): void
  }

  export class WebGLRenderer {
    domElement: HTMLCanvasElement
    constructor(params?: { antialias?: boolean; alpha?: boolean })
    setSize(width: number, height: number): void
    setClearColor(color: number, alpha?: number): void
    render(scene: Scene, camera: any): void
    dispose(): void
  }

  export class IcosahedronGeometry {
    constructor(radius: number, detail: number)
    getAttribute(name: string): { array: Float32Array; needsUpdate: boolean }
    dispose(): void
  }

  export class MeshPhongMaterial {
    constructor(params?: { color?: number; emissive?: number; specular?: number; shininess?: number; wireframe?: boolean })
    dispose(): void
  }

  export class Mesh {
    constructor(geometry: IcosahedronGeometry, material: MeshPhongMaterial)
    rotation: { x: number; y: number; z: number }
  }

  export class PointLight {
    constructor(color: number, intensity?: number)
    position: { x: number; y: number; set(x: number, y: number, z: number): void }
  }

  export class AmbientLight {
    constructor(color: number, intensity?: number)
  }
}
