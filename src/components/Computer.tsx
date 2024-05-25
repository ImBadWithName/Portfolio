/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { MouseEventHandler, forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { Bvh, Html, useBVH, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import WebSection from "./WebSection/WebSection";

type GLTFResult = GLTF & {
  nodes: {
    Cube002: THREE.Mesh
    Cube002_1: THREE.Mesh
    Ecran: THREE.Mesh
  }
  materials: {
    ['computer material']: THREE.MeshStandardMaterial
    ['Computer material 2']: THREE.MeshStandardMaterial
  }
}
type Props = JSX.IntrinsicElements["group"]&{
  children?:any,
  onCursorOver?:(isHover:boolean)=>void;
}
export const Computer=forwardRef<THREE.Group, Props>((props, ref) =>{
  const { nodes, materials } = useGLTF("3dModels/computer2.glb") as GLTFResult;
  
  const clickAudio = new Audio("/Sounds/click.mp3");
  clickAudio.loop = false
  clickAudio.preservesPitch = false;


  useEffect(()=>{
    const handleClick =()=>{
      console.log("click")
      clickAudio.playbackRate=0.8+Math.random()*0.4
      clickAudio.play();
    }
    window.addEventListener('click',handleClick)
    return ()=>{
        window.removeEventListener('click',handleClick)
    }
},[])
  return (
    <group position={[0, 0, 0]} ref={ref} {...props} dispose={null}>
      <group position={[0, 0, 0]}>
      <Bvh firstHitOnly>
      <mesh
        
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials['computer material']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials['Computer material 2']}
          
        />
        <mesh
        onPointerOver={()=>props.onCursorOver && props.onCursorOver(true)}
        onPointerLeave={()=>props.onCursorOver && props.onCursorOver(false)}
          castShadow
          receiveShadow
          geometry={nodes.Ecran.geometry}
          material={materials['Computer material 2']}
          position={[0.015, 2.441, -0.053]}
          rotation={[0, -0.13, 0]}
        >
           <Html   transform scale={0.8}
          center
        position={[0.9, 0, 0]}
        distanceFactor={1}
        zIndexRange={[500,1500]}
        rotation={[0,Math.PI/2,0]}
        
        >
          {props.children}
        </Html> 
        </mesh>
        </Bvh>
      </group>
    </group>
  );
})

useGLTF.preload("3dModels/computer2.glb");
