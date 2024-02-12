import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/three'



type Props = {}

const SpringTest = (props: Props) => {
    const [active, setActive] = useState(false);
    const {scale} = useSpring({ scale: active ? 1.5 : 1 })

  return (
    <animated.mesh scale={scale} onClick={() => setActive(!active)} >
  <boxGeometry />
  <meshPhongMaterial color="royalblue" />
</animated.mesh>

  )
}

export default SpringTest