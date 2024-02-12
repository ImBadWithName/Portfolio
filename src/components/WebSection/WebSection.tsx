import React, { useState } from 'react'
import './style.css'
import WebsiteDisplay from '../WebsiteDisplay'
type Props = React.HTMLAttributes<HTMLDivElement> & {
    onClick?:Function
    canInteract:boolean
}

const WebSection = (props: Props) => {
  
  const [currentPage,setCurrentPage] = useState<string>()
  return (
    <div {...props} className='web-session' 
      //onClick={(e)=>{e.nativeEvent.stopImmediatePropagation();e.preventDefault();console.log("Web Session Element element cliqued")}}
      >

      {currentPage && 
        <>
          <div className='newTab'>
            <a target="_blank" href={currentPage}>Open in a new tab</a>
          </div>
          <div onClick={()=>props.canInteract && setCurrentPage(undefined)} className='return' >
            Retour
          </div>
          <iframe height={'100%'} width={'100%'} style={{zoom: 0.5}} src={currentPage} ></iframe>
        </>
      }
      {!currentPage && 
      
      <div style={{display:'flex',flexDirection:"column", gap:30}}>
        <WebsiteDisplay 
          title='Zip Device' 
          description='Site Word Press réalisé pour promouvoir un produit imaginaire en équipe pour un projet de première année' 
          image='/images/WebSiteImages/zipdeviceweb.PNG'
          onClick={()=>{props.canInteract && setCurrentPage('https://wp05.gremmi.fr/')}}
          />
        </div>
        }
    </div>
  )
}

export default WebSection