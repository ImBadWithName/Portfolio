/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { wrapText } from "./Page";

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
  };
  materials: {
    ["post-it"]: THREE.MeshStandardMaterial;
  };
};
type Props =JSX.IntrinsicElements["group"]&{
  text?:string
}
export function PostIt(props:Props ) {
  const { nodes, materials } = useGLTF("/3dModels/Post-it.glb") as GLTFResult;
  const canvas = useMemo(() => {
    const canvasTemp = document.createElement("canvas");
    const size = 200
    canvasTemp.width = size
    canvasTemp.height = size * 1.41
    const ctx = canvasTemp.getContext('2d')
    if(ctx) {
       
       ctx.font = '30px Baby Doll'
       ctx.fillStyle = "White";
       ctx.fillRect(0, 0, canvasTemp.width, canvasTemp.height);
       ctx.textAlign = 'center'
       ctx.fillStyle = 'Black'

      props.text && wrapText(ctx,props.text,canvasTemp.width/2,canvasTemp.height/2,canvasTemp.width,30,"Baby Doll")
    }
    return canvasTemp
  }, [])
  const canvasTexture = useMemo(() => {
    const texture = new THREE.CanvasTexture(canvas)
    texture.flipY=false
    // texture.rotation=-Math.PI/16
    return texture
  }, [canvas])
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Plane"
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        rotation={[0,-Math.PI / 2 , -Math.PI / 2]}
      >

        <meshStandardMaterial color={'#E7AB4C'} map={canvasTexture}/>
      </mesh>
    </group>
  );
}

useGLTF.preload("/3dModels/Post-it.glb");
