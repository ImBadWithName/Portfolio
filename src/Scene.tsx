import { Bvh, CameraControls, GizmoHelper, GizmoViewport, Line, OrbitControls, PivotControls, QuadraticBezierLine, SoftShadows, Text3D, TransformControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { Suspense, useEffect, useRef, useState } from 'react'
import { BoxGeometry, Fog, Group, Mesh, MeshBasicMaterial, MeshNormalMaterial, Object3D, Quaternion, Vector3 } from 'three'
import { Cube } from './components/Cube'
import { Plane } from './components/Plane'
import { Sphere } from './components/Sphere'
import {Computer} from './components/Computer'
import Mouse from './components/Mouse'
import { Keyboard } from './components/Keyboard'
import SpringTest from './components/SpringTest'
import TestCube from './components/Dodecahedron'
import { FloppyDisk } from './components/FloppyDisk'
import { Physics, RigidBody } from '@react-three/rapier'
import Annotation from './components/Annotation'
import CameraModel from './components/CameraModel'
import WebSection from './components/WebSection/WebSection'
import { GameBoy } from './components/GameBoy'
import { Rope } from './components/Rope'
import { Cable } from './components/Cable'
import GameBoyScreen from './components/GameBoyScreen'
import { Page } from './components/Page'

function Scene() {
  const { performance } = useControls('Monitoring', {
    performance: false,
  })
  const handlePressEscape=(e:KeyboardEvent)=>{
    if(e.code==="Escape"){
      setView("default");
    }
}
const [cursor, setCursor] = useState("auto")
  const [view,setView] = useState("default");
  const cameraControlsRef = useRef<CameraControls>(null);
  const gambeBoyRef = useRef<Group>(null);
  const [mouseRef,setMouseRef] = useState<Group>();;
  const [computerRef,setComputerRef] = useState<Group>();
  useEffect(() => {
    if(view==="default"){
      document.body.style.cursor = cursor
    } 
    else {
      document.body.style.cursor = "auto"
    }
    return () => {document.body.style.cursor = 'auto'}
  }, [cursor,view])
  useEffect(()=>{
    window.addEventListener('keydown',(e)=>handlePressEscape(e))
    return ()=>{
      window.removeEventListener('keydown',(e)=>handlePressEscape(e))
    } 
  })
  useEffect(()=>{
    switch (view) {
      case "default":
        cameraControlsRef.current?.setLookAt(3, 2, 9,0,0,0,true)
        break;
      case "computer":
        cameraControlsRef.current?.setLookAt(1,1,1,1.5,1,-1,true)
      break;
      case "camera":
        cameraControlsRef.current?.setLookAt(-1,0,1,-2, 0, -1,true)
      break;
      case "game":
        if(gambeBoyRef.current){ 
          console.log("good bye")
          cameraControlsRef.current?.setLookAt(
            gambeBoyRef.current.position.x, gambeBoyRef.current.position.y+0.35, gambeBoyRef.current.position.z+1,
            gambeBoyRef.current.position.x, gambeBoyRef.current.position.y+0.35, gambeBoyRef.current.position.z+0.6,
            true)
        }
        else {
          console.log("gameboyRef not set")
        }
      break;
      default:
        break;
    }
  },[view])

  useEffect(()=>{
    console.log(mouseRef)
  },[mouseRef])
  return (
    <>
       {/* <hemisphereLight color="#ffffff" groundColor="#b9b9b9" position={[-7, 25, 13]} intensity={0.85} /> */}
      {performance && <Perf position='top-left' />}
      <CameraControls 
        makeDefault
        ref={cameraControlsRef}
        maxDistance={7}
        dollyToCursor={false}
        // minPolarAngle={1}
        // maxPolarAngle={2}
        // maxAzimuthAngle={Math.PI/3}
        // minAzimuthAngle={-Math.PI/3}
        boundaryFriction={100}
        smoothTime={0.3}
        draggingSmoothTime={0.5}
        />

      <directionalLight
        position={[-2, 2, 3]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024 * 2, 1024 * 2]}
      />
      <ambientLight intensity={0.2} />
      <CameraModel position={[-2, 0, -1]} rotation={[0, Math.PI/6, 0]}
        onClick={()=>setView("camera")}
        onPointerOver={() => setCursor("pointer")}
        onPointerOut={() => setCursor("auto")}
      />
      

      <group position={[1.8, -1, -2.61]} rotation={[0, -Math.PI/1.5, 0]} 
        
        >
        
        <Computer ref={setComputerRef  as any} 
          onClick={(e)=>{ e.stopPropagation(); setView("computer")}}
          onPointerOver={() =>cursor!=="pointer" && setCursor("pointer")}
          onPointerOut={() => setCursor("auto")}
        >
          <div style={{cursor:view=="default"?"pointer":"default"}} onClick={view=="default"?()=>{setView("computer")}:undefined}>
            <WebSection canInteract={view==="computer"}  style={{height:720, width:1080,overflow:"scroll"}}/>
          </div>
        </Computer>
        
        <Annotation text={"My web stuff"} fontSize={20} position={[0,4,2.7]}/>
        <Mouse ref={setMouseRef as any} range={1.5}  position={[1,0.2,-1.7]} rotation={[0, Math.PI/2, 0]}/>
        <Keyboard 
          position={[2,0.1,0]} 
          rotation={[0,Math.PI/12,0]}
        />
      </group>
        <mesh position={[0,0,-5]}>
          <boxGeometry args={[10,10,1]} />
          <meshNormalMaterial>
            <canvasTexture />
          </meshNormalMaterial>
        </mesh>
        <group position={[-4,2,-2]}>
          <Text3D position-y={1} font={"/Font/Arvo_Bold.json"} size={0.6} height={0.3} >
            François
            <meshNormalMaterial />
          </Text3D>
          <Text3D font={"/Font/Arvo_Bold.json"} size={0.6} height={0.3} >
            Crouy
            <meshNormalMaterial />
          </Text3D>
        </group>
         {/* <PivotControls 
        onDrag={(e)=>{
          const position = new Vector3()
          const scale = new Vector3()
          const quaternion = new Quaternion()
          e.decompose(position, quaternion, scale)
          console.log("position={[",[position.x,position.y,position.z].toLocaleString(),"]}")
          console.log("rotation={[",[position.x,position.y,position.z].toLocaleString(),"]}")
          console.log("scale={[",[scale.x,scale.y,scale.z].toLocaleString(),"]}")
          }} annotations visible={false}> */}
          
          <GameBoy onClick={()=>{setView('game');console.log("hello")}} scale={0.4} 
            onPointerOver={() => setCursor("pointer")}
            onPointerOut={() => setCursor("auto")}
            position={[-3,1,0]}
            ref={gambeBoyRef}
          >
              <div style={{width:"1440px", height:"1024px",backgroundColor:"black",borderRadius:"60px",overflow:"hidden"}}>
                <GameBoyScreen/>
               </div>
            </GameBoy>
        {/* </PivotControls>   */}
         <Page turned image='./images/Posters/affiche concert light.jpg'/>
         <Page image='./images/Posters/Karaoke 2.2 light.jpg'/>  
        <Physics  >
         <Suspense> 
           {/* <Rope length={20} />   */}
          <RigidBody  type="fixed"> 
            <Plane />
          </RigidBody> 
          <Suspense> 
            {computerRef && mouseRef &&
          <Cable 
            start={mouseRef as Object3D}
            startOffset={[0,0,-0.3]}
            end={computerRef as Object3D}
            endOffset={[0,0.6,-1.6]}
            sections={20} 
            width={0.2}
            lenght={1.1}
            />
          }
          </Suspense>
          </Suspense>
      </Physics> 
          {/* <FloppyDisk/> */}
      <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
        <GizmoViewport labelColor="white" axisHeadScale={1} />
      </GizmoHelper>

    </>
  )
}

export { Scene }
