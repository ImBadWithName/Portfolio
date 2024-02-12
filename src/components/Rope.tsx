import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import {
  Vector3Array,
  RigidBodyTypeString,
  RigidBody,
  useSphericalJoint,
  RapierRigidBody
} from "@react-three/rapier";
import { forwardRef, ReactNode, useRef, createRef, RefObject } from "react";
import { Quaternion } from "three";

const RopeSegment = forwardRef<
  RapierRigidBody,
  {
    position: Vector3Array;
    component: ReactNode;
    type: RigidBodyTypeString;
  }
>(({ position, component, type }, ref) => {
  return (
    <RigidBody colliders="ball" ref={ref} type={type} position={position}>
      {component}
    </RigidBody>
  );
});

/**
 * We can wrap our hook in a component in order to initiate
 * them conditionally and dynamically
 */
const RopeJoint = ({
  a,
  b
}: {
  a: RefObject<RapierRigidBody>;
  b: RefObject<RapierRigidBody>;
}) => {
  useSphericalJoint(a, b, [
    [-0.1, 0, 0],
    [0.1, 0, 0]
  ]);
  return null;
};

export const Rope = (props: { length: number }) => {
  const refs = useRef(
    Array.from({ length: props.length }).map(() => createRef<any>())
  );

  useFrame(() => {
    const now = performance.now();
    refs.current[0].current?.setNextKinematicRotation(
      new Quaternion(0, Math.sin(now / 800) * 1, 0)
    );
  });

  return (
    <group>
      {refs.current.map((ref, i) => (
        <RopeSegment
          ref={ref}
          key={i}
          position={[i * 0.2, 0, 0]}
          component={
            <Sphere args={[0.1]}>
              <meshStandardMaterial />
            </Sphere>
          }
          type={i === 0 ? "kinematicPosition" : "dynamic"}
        />
      ))}
      {/**
       * Multiple joints can be initiated dynamically by
       * mapping out wrapped components containing the hooks
       */}
      {refs.current.map(
        (ref, i) =>
          i > 0 && (
            <RopeJoint a={refs.current[i]} b={refs.current[i - 1]} key={i} />
          )
      )}
    </group>
  );
};
