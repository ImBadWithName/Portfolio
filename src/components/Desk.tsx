/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { setCursor } from '../Scene'
import { useSpring,animated} from '@react-spring/three'

type GLTFResult = GLTF & {
  nodes: {
    Cube_1: THREE.Mesh
    Cube_2: THREE.Mesh
    Cube001: THREE.Mesh
    Cube002: THREE.Mesh
  }
  materials: {
    ['White metal paint']: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
  }
}

export function Desk(props: JSX.IntrinsicElements['group']) {
  const [upState,setUpState] = useState(false);
  const [downState,setDownState] = useState(false);
  const upOpen = useSpring({ 
    upOpen: upState ?   0.9 :0.614,

  })
  const downOpen = useSpring({ 
 
    downOpen: downState?   0.9 :0.614,
  })

  const { nodes, materials } = useGLTF('/3dModels/Desk.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation-y={Math.PI/2} scale={5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials['White metal paint']}

        />
        <mesh castShadow receiveShadow geometry={nodes.Cube_2.geometry} material={materials.Wood} />
        <animated.mesh
          onClick={(e)=>{e.stopPropagation();setUpState(!upState)}}
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['White metal paint']}
          position-x={-0.533}
          position-y={-0.18}
          position-z={upOpen.upOpen}

        />
        <animated.mesh
        onClick={()=>setDownState(!downState)}
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials['White metal paint']}

          position-x={-0.533}
          position-y={ -0.542}
          position-z={downOpen.downOpen}

        />
      </group>
    </group>
  )
}

useGLTF.preload('/3dModels/Desk.glb')
