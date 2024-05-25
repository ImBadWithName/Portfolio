import { Html } from '@react-three/drei'
import { MeshProps, useLoader } from '@react-three/fiber'
import React, { forwardRef, useEffect, useState } from 'react'
import { TextureLoader } from 'three'
import * as THREE from "three";

import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Pin } from './Pin';
import Overlay from './Overlay';
import { flattenJSON } from 'three/src/animation/AnimationUtils';

type Props = JSX.IntrinsicElements["group"] & {
    focus:boolean 
}
type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};


const Cv=forwardRef<THREE.Group, Props>((props, ref) =>{
  const { nodes, materials } = useGLTF("/3dModels/CV.glb") as GLTFResult;
    const imageTexture = useLoader(TextureLoader,"/images/Cv.png");
    const [fullScreen,setFullScreen] = useState(false);
    useEffect(()=>{
      console.log("exit full screen")
      setFullScreen(false)
    },[props.focus])
    const url = "/documents/Cv.pdf"
    const downloadCV=()=>{
        const a = document.createElement('a')
        a.href = url
        a.download = "Francois's Cv.pdf"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      }
  return (
    <group ref={ref} {...props} dispose={null} >

        <mesh
        onClick={props.focus?()=>setFullScreen(true):props.onClick}
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials["Material.001"]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      <Pin scale={0.05} position={[-0.85,1.3,0.09]} rotation-x={Math.PI/2}/>
      <Pin scale={0.05} position={[0.85,1.3,0.11]} rotation-x={Math.PI/2}/>
      <>
      {fullScreen &&
        <Html>
          <Overlay>
              <div style={{padding:"15vw", width:"100vw",height:"100vh", display:"flex",justifyContent:"center", alignItems:"center", background:"rgba(0, 0, 0, 0.52)",flexDirection:"column"}}
               onClick={()=>setFullScreen(false)}>
                <img style={{height:"80vh"}} src="/images/Cv.png" alt="un cv de qualité" />
                <div onClick={()=>downloadCV()} id="donwloadButton" style={{height:"2rem",display:"flex", alignItems:"center",gap:"0.7rem",margin:"1rem",cursor:"pointer"}}>
                  <p>Download</p>
                  <img src="/images/icones/download-minimalistic-svgrepo-com.png" alt="" style={{height:"100%"}}/>
                </div>
              </div>
          </Overlay>
        </Html>
      }
      </>
      {/* <Pin/> */}
  </group>
  )
})

export default Cv
useGLTF.preload("./3dModels/CV.glb");
