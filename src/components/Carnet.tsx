import React, { forwardRef, useEffect, useState } from 'react'
import { Page } from './Page'
import { BookModel } from './BookModel'

type Props = JSX.IntrinsicElements["group"] & {
  focus:boolean
}

const Carnet =forwardRef<THREE.Group, Props>((props, ref) =>{
  const works = [
    {image:"",title:"Design Graphique",desc:"2020-2023"},
    {image:"./images/Posters/Karaoke 2.2 light.jpg",title:"Event Karaoke 2ème édition",desc:"Affiche réalisé pour un évenement de mon foyer étudiant lors de ma première année d'étude"},
    {image:"./images/Posters/affiche bde light.jpg",title:"Poster Campagne BDE",desc:"Poster réalisé dans le cadre d'une cadre d'une campagne pour le bureau des étudiants"},
    {image:"./images/Posters/affiche echec 2 light.jpg",title:"Affiche championnat d'échec",desc:"Commande de mon foyer étudiant pour promouvoir leur championat d'échec"},
    {image:"./images/Posters/affiche film 3 light.png",title:"Courte histoire de la photo",desc:"Affiche pour un documentaire fictif, faite pendant ma première année de BUT MMI"},
    {image:"./images/Posters/Géant à tête d'imeuble light.jpg",title:"Le géant",desc:"Poster réalisé pour mon cours de design graphique de première année"},
    {image:"",title:"",desc:""},
    {image:"",title:"fin",desc:""},
    {image:"",title:"",desc:""},
    {image:"",title:"",desc:""},
    {image:"",title:"",desc:"arrêtes,y a rien d'autre après"},
    {image:"",title:"",desc:""},
    {image:"",title:"",desc:""},
    {image:"",title:"",desc:"sérieusement"},
    {image:"",title:"",desc:""},
    {image:"",title:"",desc:""},
    {image:"",title:"",desc:""},
    {image:"",title:"",desc:""},
    {image:"",title:"",desc:""},
    {image:"",title:"",desc:""},
    {image:"",title:"",desc:"tu perds ton temps"},
  ]
  const [pageStart, setPageStart] =useState<number>(0)
  const [pageEnd, setPageEnd] =useState<number>(1)
  const handleStart = (index:number)=>{
    
    if(index===pageStart){
      setPageStart(pageStart-1)
    }
    if(index===pageEnd){
      setPageEnd(pageEnd+1)
    }
  }
    const handleEnd = (isTurned:boolean,index:number)=>{
      isTurned?setPageStart(index):setPageEnd(index)

    }

    const shouldRender = (page:number)=>{return (page>=pageStart&&page<=pageEnd)}
    useEffect(()=>{console.log( pageStart,pageEnd)},[pageEnd,pageStart])
  return (
    <group {...props} ref={ref}>
        <BookModel>
          <group position-y={-0.38} rotation-x={0.03}>
          {shouldRender(-1) && <Page
              focus={props.focus} onStart={()=>{}} onEnd={()=>{}} turned={pageEnd==-1} 
              canTurn={pageEnd-pageStart ===1}
              key={-1}
            /> }
            {works.map((item,index)=>
              {return shouldRender(index) && <Page
              focus={props.focus} onStart={()=>handleStart(index)} onEnd={(i)=>handleEnd(i,index)} turned={pageStart==index} 
              image={item.image}
              description={works[index-1]?.desc}
              title={works[index-1]?.title}
              key={index}
              canTurn={pageEnd-pageStart ===1}
            />}
            )

            }
          
            {[...Array(10).keys()].map((ind)=>
            <>
            {shouldRender(ind+works.length)   && <Page focus={props.focus} canTurn={pageEnd-pageStart ===1} onStart={()=>handleStart(ind+works.length)} onEnd={(i)=>handleEnd(i,ind+works.length)} turned={pageStart==ind+works.length} />}
            </>
            )}

          </group>
        </BookModel>
    </group>
  )
})

export default Carnet