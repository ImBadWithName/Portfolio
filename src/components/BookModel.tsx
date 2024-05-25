

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Carnet_Shape_key: THREE.SkinnedMesh
    Carnet_Shape_key002: THREE.SkinnedMesh
    Cube019: THREE.SkinnedMesh
    Cube019_1: THREE.SkinnedMesh
    Tranche_gauche: THREE.Bone
    Tranche_droite: THREE.Bone
    neutral_bone: THREE.Bone
  }
  materials: {
    Tranche: THREE.MeshStandardMaterial
    Converture: THREE.MeshStandardMaterial
  }
}

type ActionName = 'LivreOpen' | 'PageTurn'
type GLTFActions = Record<ActionName, THREE.AnimationAction>
type Props = JSX.IntrinsicElements["group"] & {
  children:any;
}

export function BookModel(props:Props) {
  const group = useRef<any>()
  const { nodes, materials, animations } = useGLTF('/3dModels/book.glb') as GLTFResult
  const {actions, mixer} = useAnimations(animations, group);
  useEffect(()=>{
    console.log("Action: ",actions);
     if(actions.LivreOpen){
      actions.LivreOpen.clampWhenFinished =true
      actions.LivreOpen.enabled=true
      actions.LivreOpen.setLoop(THREE.LoopRepeat,0)
      actions.LivreOpen.time =  actions.LivreOpen.getClip().duration
      // actions.LivreOpen.time = turned? 0:actions.LivreOpen.getClip().duration;   
      //  actions.LivreOpen.setEffectiveTimeScale(0);
  
       actions.LivreOpen.play()
       actions.LivreOpen.paused =true
      //  actions.LivreOpen.paused=true
    }
  },[])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Livre" >
          {
            props.children
          }
          <skinnedMesh
            name="Carnet_Shape_key"
            geometry={nodes.Carnet_Shape_key.geometry}
            material={materials.Tranche}
            skeleton={nodes.Carnet_Shape_key.skeleton}
            morphTargetDictionary={nodes.Carnet_Shape_key.morphTargetDictionary}
            morphTargetInfluences={nodes.Carnet_Shape_key.morphTargetInfluences}
          />
          <skinnedMesh
            name="Carnet_Shape_key002"
            geometry={nodes.Carnet_Shape_key002.geometry}
            material={materials.Tranche}
            skeleton={nodes.Carnet_Shape_key002.skeleton}
            morphTargetDictionary={nodes.Carnet_Shape_key002.morphTargetDictionary}
            morphTargetInfluences={nodes.Carnet_Shape_key002.morphTargetInfluences}
          />
          <group name="Carnet006">
            <skinnedMesh
              name="Cube019"
              geometry={nodes.Cube019.geometry}
              material={materials.Converture}
              skeleton={nodes.Cube019.skeleton}
            />
            <skinnedMesh
              name="Cube019_1"
              geometry={nodes.Cube019_1.geometry}
              material={materials.Tranche}
              skeleton={nodes.Cube019_1.skeleton}
            />
          </group>
          <primitive object={nodes.Tranche_gauche} />
          <primitive object={nodes.Tranche_droite} />
          <primitive object={nodes.neutral_bone} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./3dModels/book.glb')

