import { Box, Text3D } from '@react-three/drei'
import { Vector3 } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import React, { useEffect, useRef, useState } from 'react'
import { TextGeometry, TextGeometryParameters } from 'three-stdlib'
import FallingLetter from './FallingLetter'
import { BufferGeometry, Mesh, NormalBufferAttributes } from 'three'

type Props = JSX.IntrinsicElements["group"]&{

    text:string
    spacing?:number
    children?:any
    font:string
    size?:number
    height?:number
    kerning?:number[]
}

const FallingText = (props: Props) => {
    const spacing = props.spacing ||1
    var distance =0;
    const kerning = props.kerning?.map(item=>{
        distance +=1+item
        return distance
    }) || new Array(props.text?.length-1).fill(1).map((it,i)=>i+1)
 
  return (
    <group {...props}>
        {props.text && props.text.split('').map((item:string,index)=>
            <FallingLetter key={index} font={props.font} size={props.size} height={props.height} letter={item} 
                position-x={props.text && index!==0 && kerning[index-1]*spacing}>
                {props.children}
            </FallingLetter>
        )
        
        }

    </group>
 


  )
}

export default FallingText