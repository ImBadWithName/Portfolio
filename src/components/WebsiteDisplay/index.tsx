import React from 'react'
import './style.css'
type Props = {
    image:string,
    title:string,
    description:string,
    onClick:Function
}

const WebsiteDisplay = (props: Props) => {
  return (
    <div className='WebsiteDisplay' >
        <div className='title'>{props.title}</div>
        <div className='content-container' onClick={()=>props.onClick()} style={{cursor:'pointer'}}>
          <div className='image'>
            <img src={props.image} />
          </div>
          <div className='description'>
            {props.description}
          </div>
        </div>
    </div>
  )
}

export default WebsiteDisplay