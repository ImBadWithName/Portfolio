import React, { useState } from 'react'
import './style.css'
import GameDisplay from '../GameDisplay'
type Props = {}

const GameBoyScreen = (props: Props) => {
  const games = [
    {
      name:"Gravity wars",
      image:"/images/GameImage/TimeAndDeath.png",
      url:"https://i.simmer.io/@un_deux_trois/destination-nuages"
    },{
      name:"Time & Death don't matter",
      image:"/images/GameImage/TimeAndDeath.png",
      url:"https://i.simmer.io/@un_deux_trois/destination-nuages"
    },{
      name:"Mariooooo jackot",
      image:"/images/GameImage/TimeAndDeath.png",
      url:"https://i.simmer.io/@un_deux_trois/destination-nuages"
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentGame,setCurrentGame]=useState<string>()
  const changeIndex =(value:number)=>{
    if(currentIndex+value>=games.length){
      setCurrentIndex(0)
    }
    else if (currentIndex+value<0){
      setCurrentIndex(games.length-1)
    }
    else {
      setCurrentIndex(currentIndex+value)
    }
  }
  return (
    <div className='container'>
      {!currentGame &&
        <>
          {games.map((game,index)=>
            <GameDisplay className={ index>currentIndex?"unseen":index<currentIndex?"seen":"current"} name={game.name} image={game.image} key={index}/>
          )}
          <div className='play-button' onClick={()=>games[currentIndex].url && setCurrentGame(games[currentIndex].url)}>PLAY</div>
          <img className='next' src={"/images/GameImage/play-svgrepo-com.svg"} style={{opacity:currentIndex==games.length-1?0.7:1}} onClick={()=>currentIndex<games.length-1&&changeIndex(1)}/>
          <img className='previous' src={"/images/GameImage/play-svgrepo-com.svg"} style={{opacity:currentIndex==0?0.7:1}} onClick={()=>currentIndex!=0&&changeIndex(-1)}/>
        </>
      }
      {currentGame && 
      <>
        <iframe height={'100%'} width={'100%'}  src={currentGame} />
        <div className='exit-game' onClick={()=>setCurrentGame(undefined)}>
          <img src={"/images/icones/arrow-square-left-svgrepo-com.svg"} />
          Exit Game
        </div>
        </>
      }
    </div>
  )
}

export default GameBoyScreen