import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { ACESFilmicToneMapping, sRGBEncoding } from 'three'
import { Scene } from './Scene'
import './styles/main.css'
import GameBoyScreen from './components/GameBoyScreen'
import CameraScreen from './components/CameraScreen'
import * as portals from 'react-reverse-portal';
import { Environment, Loader } from '@react-three/drei'
// import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'
function Main() {
  
  return (
    <div className='main'>
{/* <VRButton 
/> */} 
      <Leva
        collapsed={false}
        oneLineLabels={false}
        flat={true}
        theme={{
          sizes: {
            titleBarHeight: '28px',
          },
          fontSizes: {
            root: '10px',
          },
        }}
      />
      {/* <Loader> */}
       <Canvas
         
        
        dpr={[1, 2]}
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
          outputEncoding: sRGBEncoding,
        }}
        camera={{
          fov: 55,
          near: 0.1,
          far: 200,
          position: [3, 2, 9],
        }}
        shadows
      >
        {/* <XR >//for vr, so kind of useless but I leave it here anyway */}
        {/* <Controllers /> */}
        {/* <Suspense> */}
          <Scene /> 
        {/* </Suspense> */}
        

        <Environment background files="/Environement/artist_workshop_1k.hdr" />
        {/* </XR> */}
      </Canvas>   
      {/* </Loader> */}
      {/* <GameBoyScreen/> */}
       {/* <CameraScreen focus/> */}
       
       <div id={"overlay"}>

       </div>
       
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)
