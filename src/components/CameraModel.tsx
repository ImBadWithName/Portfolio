import { MeshProps } from '@react-three/fiber'
import React from 'react'

type Props = MeshProps & {

}

const CameraModel = (props: Props) => {
  return (
    <mesh {...props}>
        <boxGeometry args={[1,1,0.3]} />
        <meshStandardMaterial color={"black"} />
  </mesh>
  )
}

export default CameraModel