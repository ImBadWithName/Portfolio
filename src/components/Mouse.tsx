import React, { createRef, forwardRef, useEffect, useRef, useState } from 'react'
import { Group, Mesh } from 'three';
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import * as THREE from 'three'

type GLTFResult = GLTF & {
  nodes: {
    Cube_1: THREE.Mesh
    Cube_2: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

type Props = JSX.IntrinsicElements["group"]&{
    range:number
}

const Mouse = forwardRef<THREE.Group, Props>((props, ref) => {
    
    const [mousePosition, setMousePostion] = useState<{x:number,y:number}>({x:0,y:0})
    const mouseRef = createRef<Group>()
    const { nodes, materials } = useGLTF('/3dModels/Mouse.glb') as GLTFResult
     useEffect(()=>{
        // mouseRef.current= ref.current
        window.addEventListener("mousemove",(e)=>{

            // setMousePostion({
            //     x:e.screenX/window.innerWidth*props.range,
            //     y:e.screenY/window.innerHeight*props.range
            // })
            if(mouseRef.current){
                
                mouseRef.current?.position.setX(e.screenX/window.innerWidth*props.range)
                //@ts-ignore
                mouseRef.current?.position.setZ(e.screenY/window.innerHeight*props.range)
            }
        })
        return;
     })
  return (
        <group {...props}>
            <group ref={mouseRef}  position={[mousePosition.x,0,mousePosition.y]}>
                <group ref={ref}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_2.geometry}
                    material={materials['Material.001']}
                />
                </group>
            </group>
        </group>
  )
})

export default Mouse



useGLTF.preload('/3dModels/Mouse.glb')
