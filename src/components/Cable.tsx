import { useFrame } from "@react-three/fiber";
import { Sphere,Line } from "@react-three/drei";
import {
  Vector3Array,
  RigidBodyTypeString,
  RigidBody,
  useSphericalJoint,
  RapierRigidBody,
  BallCollider,
  useAfterPhysicsStep,
  useBeforePhysicsStep
} from "@react-three/rapier";
import { forwardRef, ReactNode, useRef, createRef, RefObject, useEffect } from "react";
import { Group, Object3D, Quaternion, Vector3, Vector3Tuple } from "three";

const CableSegment = forwardRef<
  RapierRigidBody,
  {
    position: Vector3Array;
    radius:number;
    component: ReactNode;
    type: RigidBodyTypeString;
  }
>(({ position,radius,component,  type }, ref) => {
  return (
    <RigidBody includeInvisible args={[radius]} colliders={"ball"} ref={ref} type={type} position={position}>
      {component}
      </RigidBody>
  );
});

/**
 * We can wrap our hook in a component in order to initiate
 * them conditionally and dynamically
 */
const CableJoint = ({
  a,
  b,
  lenght
}: {
  a: RefObject<RapierRigidBody>;
  b: RefObject<RapierRigidBody>;
  lenght:Vector3Tuple;
}) => {
  useSphericalJoint(a, b, [
    lenght.map(i=>-i) as Vector3Tuple,
    lenght
    
  ]); 
  return null;
};
type Props = {

  sections:number,
  width:number,
  lenght:number,
  start:Object3D,
  end:Object3D,
  startOffset:Vector3Tuple,
  endOffset:Vector3Tuple,
}
export const Cable = (props: Props) => {
  const sections = props.sections
  const refs = useRef(
    Array.from({ length: sections }).map(() => createRef<RapierRigidBody>())
  );
  const startPosition = new Vector3();
  const endPosition = new Vector3();
  useBeforePhysicsStep(() => {
    // const now = performance.now();
    // refs.current[0].current?.setNextKinematicRotation(
    //   new Quaternion(0, Math.sin(now / 800) * 1, 0)
    // );
    
            startPosition.fromArray(props.startOffset)
            props.start.localToWorld(startPosition)
      refs.current[0].current?.setNextKinematicTranslation(startPosition)
    

    
    
      const newPositions:number[] = Array()
      refs.current?.forEach((item)=>{
        if(item.current){
          newPositions.push(item.current?.translation().x)
          newPositions.push(item.current?.translation().y)
          newPositions.push(item.current?.translation().z)
        }
    })
    
       refLine.current.geometry.setPositions(newPositions)
   }
  );

  const refLine = useRef<any>(null) 
  const getSectionPosition = (index:number): Vector3Tuple =>{
    
    startPosition.fromArray(props.startOffset)
    props.start.localToWorld(startPosition)
    endPosition.fromArray(props.endOffset)
    props.end.localToWorld(endPosition)
    const length:number = endPosition.distanceTo(startPosition)
    endPosition.sub(startPosition)
    endPosition.divideScalar(sections-1)
    endPosition.multiplyScalar(index)
    startPosition.add(endPosition)
    return startPosition.toArray()

  }
  

  return (
    <group>
      <Line
      
        ref={refLine}
        color="#ff2060"                   // Default
        lineWidth={10}                   // In pixels (default)
        dashed={false}                  // Default
        points={[[1, 0, 0],[0, 1, 0],[0, 0, 1],[0, 1, 2] ]}
      />
      {refs.current.map((ref, i) => (
        <CableSegment
          ref={ref}
          key={i}
          position={getSectionPosition(i)}

          radius = {props.width/2}
          type={
            (i === 0||i===refs.current.length-1) ? "kinematicPosition" : 
            "dynamic"}
          component={
            <Sphere visible={false} args={[props.width/2]}>
            
          </Sphere>
          }
        />
      ))}
      {/**
       * Multiple joints can be initiated dynamically by
       * mapping out wrapped components containing the hooks
       */}
      {refs.current.map(
        (ref, i) =>
          i > 0 && (
            <CableJoint a={refs.current[i]} b={refs.current[i - 1]} 
            lenght={(props.end.localToWorld(endPosition.fromArray(props.endOffset)).sub(props.start.localToWorld(startPosition.fromArray(props.startOffset)))).normalize().multiplyScalar(props.lenght/sections).toArray()}
             key={i} />
          )
      )}
    </group>
  );
};
