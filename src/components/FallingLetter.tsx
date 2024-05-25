import { Text3D } from '@react-three/drei'
import { RigidBody, RigidBodyProps } from '@react-three/rapier'
import React, { useState } from 'react'


type Props = RigidBodyProps&{
    letter:string
    children?:any
    font?:string
    size?:number
    height?:number
}

const FallingLetter = (props: Props) => {
    const [isFalling,setIsFalling] =useState(false)
  return (
    <RigidBody {...props}  key={isFalling?'dynamic':"kinematicPosition"} includeInvisible colliders={"cuboid"} type={isFalling?'dynamic':"kinematicPosition"}>
        <Text3D  onClick={()=>{setIsFalling(true)}}   font={props.font||"helvetiker"} size={props.size} height={props.height} >
        {props.letter}
        {props.children}
    </Text3D>
</RigidBody>   
  )
}

export default FallingLetter