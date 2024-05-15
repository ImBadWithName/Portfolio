import React, { useEffect, useState } from 'react'
import * as THREE from "three";
import { Vector3 } from 'three';
// import {useSpring, animated} from '@react-spring/three'
// import { Globals } from "@react-spring/shared";

// Globals.assign({
//   frameLoop: "always",
// });
const KeyButton = (props: JSX.IntrinsicElements["mesh"]) => {

    const [pressed,setPressed]= useState(false);
    const audio = new Audio('/Sounds/KeyPress.mp3');
    audio.loop = false
    audio.preservesPitch = false;

    // const { scale } = useSpring({ scale: pressed ? 10 : 5,
    //     config: config.wobbly })
    const handleKeyDown=(e:KeyboardEvent)=>{
        if(e.code===props.name){
            setPressed(true) 
            
        }
    }
    const handleKeyUp=(e:KeyboardEvent)=>{
        if(e.code===props.name){
            setPressed(false) 

        }
    }
    useEffect(()=>{
        window.addEventListener('keydown',(e)=>handleKeyDown(e))
        window.addEventListener('keyup',(e)=>handleKeyUp(e))
        
        return ()=>{
            window.removeEventListener('keydown',(e)=>handleKeyDown(e))
            window.removeEventListener('keyup',(e)=>handleKeyUp(e))
        }
    })
    useEffect(()=>{
        if(pressed){
            audio.playbackRate=0.7+Math.random()*0.6
            audio.play();

        }
    },[pressed])

  return (
    <group position-y={pressed?-0.03:0}>

    <mesh
    {...props}
     

    />
    </group>

    )
}
export default KeyButton