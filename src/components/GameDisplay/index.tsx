import React from 'react'

type Props = JSX.IntrinsicElements["div"]& {
    name:string;
    image:string;
}

const GameDisplay = (props: Props) => {
  return (
    <div {...props} className={'container-game'+" "+props.className}>
        <div className='title'>{props.name}</div>
        <div className='image-container'>
             <img src={props.image}/> 
        </div>
    </div>
  )
}

export default GameDisplay