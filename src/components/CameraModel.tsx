import { Html } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import React, { forwardRef } from 'react'
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_4: THREE.Mesh;
  };
  materials: {
    ["plastic black"]: THREE.MeshStandardMaterial;
    ["Metal objectif"]: THREE.MeshStandardMaterial;
    ["plastic white"]: THREE.MeshStandardMaterial;
    ["Grey plastique"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
  };
};
type Props = JSX.IntrinsicElements["group"] & {
}

const CameraModel=forwardRef<THREE.Group, Props>((props, ref) =>{
  const { nodes, materials } = useGLTF("/3dModels/camera.glb") as GLTFResult;
  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Camera">
        <Html  
          transform 
          scale={0.3}
          center
          position={[-0.06, 0, 0]}
          distanceFactor={1}
          zIndexRange={[1000,1500]}
        >
          {props.children}
        </Html> 
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["plastic black"]}
        />
        <mesh
          name="Cube001_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Metal objectif"]}
        />
        <mesh
          name="Cube001_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials["plastic white"]}
        />
        <mesh
          name="Cube001_3"
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials["Grey plastique"]}
        />
        <mesh
          name="Cube001_4"
          castShadow
          receiveShadow
          geometry={nodes.Cube001_4.geometry}
          material={materials.Material}
        />
      </group>

      
  </group>
  )
})

export default CameraModel

useGLTF.preload("/3dModels/camera.glb");
