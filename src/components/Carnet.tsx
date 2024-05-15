import React, { forwardRef, useEffect, useState } from 'react'
import { Page } from './Page'
import { BookModel } from './BookModel'

type Props = JSX.IntrinsicElements["group"] & {
  focus:boolean
}

const Carnet =forwardRef<THREE.Group, Props>((props, ref) =>{
  const works = [
    {image:"./images/Posters/Karaoke 2.2 light.jpg",title:"Titre Affiche",desc:"Lorem Ipsum et tout ça et tout ça tu sais"},
    {image:"./images/Posters/affiche bde light.jpg",title:"Titre Affiche",desc:"Lorem Ipsum et tout ça et tout ça tu sais"},
    {image:"./images/Posters/affiche echec 2 light.jpg",title:"Titre Affiche",desc:"Lorem Ipsum et tout ça et tout ça tu sais"},
    {image:"./images/Posters/affiche film 3 light.png",title:"Titre Affiche",desc:"Lorem Ipsum et tout ça et tout ça tu sais"},
    {image:"./images/Posters/Géant à tête d'imeuble light.jpg",title:"Titre Affiche",desc:"Lorem Ipsum et tout ça et tout ça tu sais"},
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
    const numberOfPage = 3
    const shouldRender = (page:number)=>{return (page>=pageStart&&page<=pageEnd)}
  return (
    <group {...props} ref={ref}>
        <BookModel>
          <group position-y={-0.38} rotation-x={0.03}>
          <Page
              focus={props.focus} onStart={()=>{}} onEnd={()=>{}} turned={pageEnd==-1} 

              key={-1}
            />
            {works.map((item,index)=>
              {return shouldRender(index) && <Page
              focus={props.focus} onStart={()=>handleStart(index)} onEnd={(i)=>handleEnd(i,index)} turned={pageStart==index} 
              image={item.image}
              description={item.desc}
              title={item.title}
              key={index}
            />}
            )

            }
          
            {[...Array(10).keys()].map((ind)=>
            <>
            {shouldRender(ind+works.length)  && <Page focus={props.focus} onStart={()=>handleStart(ind+works.length)} onEnd={(i)=>handleEnd(i,ind+works.length)} turned={pageStart==ind+works.length} />}
            </>
            )}

          </group>
        </BookModel>
    </group>
  )
})

export default Carnet