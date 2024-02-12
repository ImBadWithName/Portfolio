import { Html } from '@react-three/drei'
import React from 'react'
import './index.css'
import { Group, Vector3 } from 'three'
type Props = JSX.IntrinsicElements["group"] & {
    text:string
    offset?:Vector3
    fontSize?: number
}

const Annotation = (props: Props) => {
  return (
    <group {...props}>
      <Html   position={props.offset} className='annotation' 
      center
      style={{fontSize:props.fontSize,
        
        }}>
          <div style={{width:100, textAlign:"center",transform:"translate(-50%, -50%)"}}>
            {props.text}
            <img style={{width:100,height:100,
               position:'absolute',
               transform: "rotate(90deg)",
               top:10,
               filter: "brightness(0) invert(1)"
               }} 
               src={"/images/arrow_1.png"}/>
          </div>
          
      </Html>
    </group>
  )
}

export default Annotation