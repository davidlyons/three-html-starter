// Auto-generated by: https://github.com/pmndrs/gltfjsx
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Suzanne: THREE.Mesh
  }
  materials: object
}

export function Suzanne(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/suzanne.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Suzanne.geometry}
        material={nodes.Suzanne.material}
        position={[0, 0.189, -0.043]}
      />
    </group>
  )
}

useGLTF.preload('/suzanne.gltf')
