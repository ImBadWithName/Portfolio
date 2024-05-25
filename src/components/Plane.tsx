import { Vector3 } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"

type Props ={
  position?:Vector3
 size?:Vector3
}
function Plane(props:Props) {

  return (
    <RigidBody includeInvisible  type="fixed"> 
      <mesh
        position={props.position}
        visible={false}
        receiveShadow
        scale={props.size}
      >
        <boxGeometry />

    </mesh>
    </RigidBody> 
  )
}

export { Plane }
