import { Bvh, CameraControls, Cloud, GizmoHelper, GizmoViewport, Line, OrbitControls, PivotControls, QuadraticBezierLine, SoftShadows, Text3D, TransformControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { Suspense, useEffect, useRef, useState } from 'react'
import { BoxGeometry, Fog, Group, Mesh, MeshBasicMaterial, MeshLambertMaterial, MeshNormalMaterial, Object3D, Quaternion, Vector3 } from 'three'
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
import Carnet from './components/Carnet'
import ReactPlayer from 'react-player'
import CameraScreen from './components/CameraScreen'
import Cv from './components/Cv'
import { PostIt } from './components/PostIt'
import { Mug } from './components/Mug'
import { Lampes } from './components/Lampes'
import { BookModel } from './components/BookModel'
import { Desk } from './components/Desk'
type Props = {

}
function Scene(props: Props) {
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
  const cameraRef = useRef<Group>(null);
  const carnetRef = useRef<Group>(null);
  const cvRef = useRef<Group>(null);
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
    console.log(view)
    switch (view) {
      case "default":
        cameraControlsRef.current?.setLookAt(0, 2.8, 2,0,1,-0.2,true)
        break;
      case "computer":
        cameraControlsRef.current?.setLookAt(1,1,1,1.5,1,-1,true)
      break;
      case "camera":        
        if(cameraRef.current){ 
          console.log("hello")
          cameraControlsRef.current?.setLookAt(
            cameraRef.current.position.x, cameraRef.current.position.y, cameraRef.current.position.z+0.6,
            cameraRef.current.position.x, cameraRef.current.position.y, cameraRef.current.position.z,
            true)
        }
      break;
      case "game":
        if(gambeBoyRef.current){ 
          cameraControlsRef.current?.setLookAt(
            gambeBoyRef.current.position.x, gambeBoyRef.current.position.y+0.35, gambeBoyRef.current.position.z+1,
            gambeBoyRef.current.position.x, gambeBoyRef.current.position.y+0.35, gambeBoyRef.current.position.z+0.6,
            true)
        }
      break;
      case  "cv" :
        if(cvRef.current){ 
          cameraControlsRef.current?.setLookAt(
            cvRef.current.position.x, cvRef.current.position.y, cvRef.current.position.z+1.7,
            cvRef.current.position.x, cvRef.current.position.y, cvRef.current.position.z+0.6,
            true)
        }
      break;
      case  "carnet" :
        if(carnetRef.current){ 
          cameraControlsRef.current?.setLookAt(
            carnetRef.current.position.x, carnetRef.current.position.y+2.5, carnetRef.current.position.z,
            carnetRef.current.position.x, carnetRef.current.position.y+0.6, carnetRef.current.position.z,
            true)
        }
      break;
      default:
        break;
    }
  },[view])
  return (
    <>
       {/* <hemisphereLight color="#ffffff" groundColor="#b9b9b9" position={[-7, 25, 13]} intensity={0.85} /> */}
      {performance && <Perf position='top-left' />}
      
       <CameraControls 
        makeDefault
        ref={cameraControlsRef}
        maxDistance={7}
        dollyToCursor={false}
        minPolarAngle={0.7}
        maxPolarAngle={1.5}
        maxAzimuthAngle={Math.PI/6}
        minAzimuthAngle={-Math.PI/6}
        boundaryFriction={100}
        smoothTime={0.3}
        draggingSmoothTime={0.5}
        
        /> 

      <directionalLight
        position={[-2, 2, 3]}
        intensity={0.6}
        castShadow
        shadow-mapSize={[1024 * 2, 1024 * 2]}
      />
        {/* <group >
          <Cloud position-y={0} segments={200} bounds={[100, 100, 100]} growth={5} volume={10} scale={0.1} color="white" />

        </group> */}
        {/* <Cloud  bounds={[0,3,0]} growth={1} scale={0.05}  segments={40}  volume={100} color="pink" /> */}
        {/* <Cloud seed={1} scale={0.1} volume={5} color="hotpink" fade={100} /> */}

       <ambientLight intensity={0.4} /> 
       <Desk rotation-y={-Math.PI/2} scale={0.75} position={[-0.5,-0.95,-2.5]} />
      <CameraModel position={[-2, -0.7, -3]} scale={0.27} rotation={[0, Math.PI/6, 0]}
        onClick={()=>setView("camera")}
        // onPointerOver={() => setCursor("pointer")}
        // onPointerOut={() => setCursor("auto")}
        ref={cameraRef}
      >
        <CameraScreen onClick={()=>{setView("camera")}} focus={view==="camera"}/>
      </CameraModel>
      <Mouse ref={setMouseRef as any} range={1.1}  position={[3,-0.95,-0.8]} rotation={[0, -Math.PI/2, 0]} scale={0.36}/>

      <Cv position={[-1,1,-4.5]} scale={0.6} onClick={()=>setView("cv")} ref={cvRef} focus={view==="cv"}/>
      <PostIt position={[0,0,-4.49]} scale={0.2} rotation-z={Math.PI/32}/>
      <group position={[1.8, -1, -2.61]} scale={0.8} rotation={[0, -Math.PI/1.5, 0]} 
        
        >
        
        <Computer ref={setComputerRef  as any} 
          onClick={(e)=>{ e.stopPropagation(); setView("computer")}}
          // onPointerOver={() =>cursor!=="pointer" && setCursor("pointer")}
          // onPointerOut={() => setCursor("auto")}
        >
          <div style={{cursor:view=="default"?"pointer":"default"}} onClick={view=="default"?()=>{setView("computer")}:undefined}>
            <WebSection canInteract={view==="computer"}  style={{height:720, width:1080,overflow:"scroll"}}/>
          </div>
        </Computer>
        
        <Annotation text={"My web stuff"} fontSize={20} position={[0,4,2.7]}/>
        <Keyboard 
          position={[2,0.1,0]} 
          rotation={[0,Math.PI/12,0]}
        />
      </group>
        <mesh position={[0,5,-5]}>
          <boxGeometry args={[70,20,1]} />
          <meshNormalMaterial>
            <canvasTexture />
          </meshNormalMaterial>
        </mesh>
        <mesh position={[0,-5,-0]}>
          <boxGeometry args={[70,1,20]} />
          <meshNormalMaterial>
            <canvasTexture />
          </meshNormalMaterial>
        </mesh>
         <group position={[-4,2,-4.6]}>
          <Text3D position-y={0.7} font={"/Font/Arvo_Bold.json"} size={0.4} height={0.3} >
            François
            <meshStandardMaterial color={"white"} />
          </Text3D>
          <Text3D font={"/Font/Arvo_Bold.json"} size={0.4} height={0.3} >
            Crouy
            <meshStandardMaterial color={"white"} />
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
           <GameBoy onClick={()=>{setView('game')}} scale={0.3} 
            // onPointerOver={() => setCursor("pointer")}
            // onPointerOut={() => setCursor("auto")}
            position={[-3,1,-3]}
            ref={gambeBoyRef}
          >
              <div style={{width:"1440px", height:"1024px",backgroundColor:"black",borderRadius:"60px",overflow:"hidden"}}>
                <GameBoyScreen focus = {view =="game"}/>
               </div>
            </GameBoy>  
                   {/* </PivotControls>   */}
          <Carnet ref={carnetRef} 
            onClick={(e)=>{setView("carnet")}} 
            focus={view==="carnet"} 
            scale={[0.5,0.5,0.5]} 
            rotation-y={Math.PI/1.7} 
            position={[-2,-0.68,-1.5]}
          />
          <Mug scale={0.6} rotation={[0, -2.07, 0]} position={[-0.5,-0.71,-1]}/>
          <Lampes scale={0.5} position={[-3,-0.87,-3]} rotation-y={-Math.PI*2/3}/>
        <Physics  >
         <Suspense> 
          <RigidBody includeInvisible  type="fixed"> 
            <Plane />
          </RigidBody> 
          <Suspense> 
            {computerRef && mouseRef &&
          <Cable 
            start={mouseRef as Object3D}
            startOffset={[-1,0.2,0]}
            end={computerRef as Object3D}
            endOffset={[0,0.6,-1.4]}
            sections={25} 
            width={0.1}
            lenght={0.8}
            />
          }
          </Suspense>
          </Suspense>
      </Physics> 
          {/* <FloppyDisk/> */}
      {/* <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
        <GizmoViewport labelColor="white" axisHeadScale={1} />
      </GizmoHelper> */}

    </>
  )
}

export { Scene }
