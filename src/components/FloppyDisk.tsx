/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube010: THREE.Mesh;
    Cube010_1: THREE.Mesh;
  };
  materials: {
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
  };
};

export function FloppyDisk(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/3dModels/floppyDisk.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="floppy_disk002">
          <mesh
            name="Cube010"
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            name="Cube010_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube010_1.geometry}
            material={materials["Material.004"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/3dModels/floppyDisk.glb");
