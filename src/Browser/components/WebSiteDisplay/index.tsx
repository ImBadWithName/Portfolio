import React, { MouseEventHandler } from 'react'
import "./style.css"
type Props = {
    url:string,
    title:string,
    description:string,
    image?:string,
    visited?:boolean,
    onClick:MouseEventHandler<HTMLDivElement>
}

const WebSiteDisplay = (props: Props) => {
  return (
    <div > 
        <div onClick={props.onClick} className='all-text'>
            <p className='site-url'>{props.url}</p>
            <h2 className={props.visited===true?"visited site-title":"site-title"}>{props.title}</h2>
            <p className='site-desc'>  
                {props.description}
            </p>
        </div>
        {props.image&&
            <img src={props.image}/>
        }
    </div>
  )
}

export default WebSiteDisplay