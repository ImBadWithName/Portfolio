function Plane() {
  return (
    <mesh
      position={[0, -1.5, 0]}
      
      receiveShadow
    >
      <boxGeometry args={[10, 1, 10]} />
      <meshStandardMaterial color='greenyellow' />
    </mesh>
  )
}

export { Plane }
