function Plane() {
  return (
    <mesh
      position={[0, -1.05, -2.1]}
      visible={false}
      receiveShadow
    >
      <boxGeometry args={[8, 0.2, 4.8]} />

    </mesh>
  )
}

export { Plane }
