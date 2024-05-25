import React, { useEffect, useMemo, useState } from 'react'
import "./style.css"
import WebsiteDisplay from '../components/WebsiteDisplay'
import WebSiteDisplay from './components/WebSiteDisplay'
type Props = React.HTMLAttributes<HTMLDivElement> & {
  canInteract:boolean
}

const Browser = (props: Props) => {
  const [isOn,setIsOn] = useState<boolean>(true);
  const [browserState, setBrowserState] = useState<string>("open")
  const [currentPage,setCurrentPage] = useState<string>()
  const audio:HTMLAudioElement = useMemo(()=>{
    const audiotemp = new Audio("/Sounds/computer.mp3")
    audiotemp.volume = 0.3
    audiotemp.play();
    audiotemp.loop =true
    return audiotemp
  },[] )
  useEffect(()=>{
    if(!isOn){
      console.log("turning off")
      audio.pause();
      audio.volume = 0;
    }
  },[isOn])
  useEffect(()=>{
    if(currentPage){
      setWebsites(websites.map(item=>item.url===currentPage?{...item,visited:true}:item))
    }
  },[currentPage])
  const [websites,setWebsites] =useState([
    {title:"Zip-device",
     desc:"Site WordPress faisant la promotion du Zip-device, un produit fictif permettant de réduire la taille d'objet pour pouvoir les transporter plus facilement",
     url:"https://wp05.gremmi.fr/",
      image:undefined,
      visited:false
    },
     {title:"Money.com",
     desc:"Site satirique développé en pure html-css-javascript-php dans le cadre de ma première année de BUT MMI",
     url:"https://decrouyf.gremmi.fr/final/index.php",
     image:undefined,
     visited:false
    },
    {title:"Portfolio",
    desc:"Portfolio réalisé au cours de l'année 2023-2024, à l'aide du framework React, ainsi que des librairies 3d three.js  et threefiber",
    url: window.location.href,
    image:undefined,
    visited:false
   },
    
  ])
  return (
    <div {...props} id='computer-screen' className={!isOn?"isOff":undefined}>
      {isOn && 
      <>
      <div id='task-bar'>
        <div onClick={()=>{setIsOn(false)}} className='power-off'><div/></div>
        <div onClick={()=>{browserState==="open"||browserState==="small"?setBrowserState("reduce"):setBrowserState("open")}} className={browserState!=="close"?'browser-shortcut reduce':'browser-shortcut'}><div/></div>
      </div>
      {(browserState==="open"||browserState==="small") &&
      <div id="browser-container" className={browserState==="small"? "small":""}>
        <div id="top-bar">
            <div className='top-button' onClick={()=>{setBrowserState("reduce")}}><img src="/images/icones/minus-svgrepo-com.png" alt="" /></div>
            <div className='top-button' onClick={()=>{setBrowserState(browserState==="small"?"open":"small")}}><img src="/images/icones/resize-903-svgrepo-com.png" alt="" /></div>
            <div className='top-button' onClick={()=>{setBrowserState("close");setCurrentPage("")}}><img src="/images/icones/cross-svgrepo-com.png" alt="" /></div>
        </div>
        <div id="url-bar">
            <div className='url-button' style={{opacity:currentPage?1:0.6}} onClick={()=>setCurrentPage("")}> <img src="/images/icones/left-arrow-svgrepo-com.png" alt="" /></div>
            <div className='url-button' style={{opacity:0.6,transform:"rotate(180deg)"}}><img src="images/icones/left-arrow-svgrepo-com.png" alt="" /></div>
            <div className='url-button' onClick={()=>setCurrentPage("")}><img src="images/icones/home-svgrepo-com.png" alt="" /></div>
            <div id="url-string">
              {currentPage? currentPage:"https://the-url-of-my-browser.com"}
            </div>
        </div>
        <div id="content-place">
        {!currentPage && 
          <div id="result">
          <div id="content-top">
            <div id="browser-logo">
              BROWSER
            </div>
            <div id="search-bar">
              mes sites web
            </div>

          </div>
          <hr/>
          <p id={"number-of-site"}>about {websites.length} results found ({Math.floor(Math.random()*100)/100} seconds)</p>
          <div id="Website-Container">
          
            {websites.map(item=>
              <WebSiteDisplay visited={item.visited} onClick={()=>{props.canInteract && setCurrentPage(item.url)}} title={item.title} description={item.desc} url={item.url} image={item.image}/>
            )}

          </div>
          </div>
        }
        {currentPage &&
            <iframe height={'100%'} width={'100%'} style={{zoom: 0.5}} src={currentPage} ></iframe>
          }
        </div>

    </div>}
    </>
    }
    </div>
  )
}

export default Browser