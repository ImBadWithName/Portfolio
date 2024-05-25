import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import './style.css'
import Overlay from '../Overlay'
import * as portals from 'react-reverse-portal';
type Props = {
  focus:boolean
  onClick:MouseEventHandler<HTMLDivElement>
}

function CameraScreen(props: Props) {
    const videos =[
      "/video/Caviar_light.mp4",
      "/video/S3B-3-Vidéo-étudiant-FullHD.mp4",
      "/video/S3B2-Bernard_Ageron_Decrouy.mp4",
      "/video/Torminador II.mp4",
      "/video/cardio_VP9.webm",
      "/video/vent_VP9.webm",
      "/video/bateau_VP9.webm"
    ]
    const [currentVideo,setCurrentVideo]=useState(0);
    const [pause, setPause] = useState(true)
    const [fullScreen,setFullScreen] = useState(false)
    const videoRef = useRef<ReactPlayer>(null)
    const changeVideo =(value:number)=>{
      if(currentVideo+value>=videos.length){
        setCurrentVideo(0)
      }
      else if (currentVideo+value<0){
        setCurrentVideo(videos.length-1)
      }
      else {
        setCurrentVideo(currentVideo+value)
      }
    }

  useEffect(()=>{
    if(!props.focus){
      setPause(true);
      setFullScreen(false)
    }
  },[props.focus])
  const portalNode = React.useMemo(() => portals.createHtmlPortalNode(), []);
  return (
        <div className='container' style={{width:"1920px", height:"1080px",backgroundColor:"white",borderRadius:"60px",overflow:"hidden"}} 
          onClick={props.focus?()=>setFullScreen(!fullScreen):props.onClick}>
          <portals.InPortal node={portalNode}>
            <ReactPlayer 
                ref={videoRef}
                url={videos[currentVideo]}
                width="100%"
                height="100%"
                playing = {!pause}
                controls={fullScreen}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 }
                  }
                }}
              />
            </portals.InPortal>
            {!fullScreen &&
              <portals.OutPortal
                node={portalNode}
              />
            }

          <div className='controls'>
            <img className='left' onClick={(e)=>{e.stopPropagation(); changeVideo(-1)}} src='\images\icones\play.png'/>
            <img onClick={(e)=>{e.stopPropagation();setPause(!pause)}} src={!pause?'/images/icones/pause.png':'/images/icones/play.png'}/>
            {/* <img className='right' onClick={(e)=>setFullScreen(!fullScreen)} src='\images\icones\play.png'/> */}
            <img className='right' onClick={(e)=>{e.stopPropagation(); changeVideo(-1)}} src='\images\icones\play.png'/>
          </div>
            <div className='index'>
              {currentVideo+1}/{videos.length}
            </div>
           <img  src='\images\icones\low-battery.svg' className='batterie'/> 
            
             {fullScreen && 
             <Overlay>
              <div style={{padding:"15vw", background:"rgba(0, 0, 0, 0.52)"}}
                  onClick={()=>setFullScreen(false)}
                >
              <portals.OutPortal
                node={portalNode}
              />
              </div>
            </Overlay>} 
        </div>
  )
}

export default CameraScreen