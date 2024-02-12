import React, { createRef, forwardRef, useEffect, useRef, useState } from 'react'
import { Group, Mesh } from 'three';

type Props = JSX.IntrinsicElements["group"]&{
    range:number
}

const Mouse = forwardRef<THREE.Group, Props>((props, ref) => {
    
    const [mousePosition, setMousePostion] = useState<{x:number,y:number}>({x:0,y:0})
    const mouseRef = createRef<Group>()
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
                  >
                    <boxGeometry  args={[0.5, 0.5, 0.5]} />
                    <meshStandardMaterial color={'mediumpurple'} />
                </mesh>
                </group>
            </group>
        </group>
  )
})

export default Mouse