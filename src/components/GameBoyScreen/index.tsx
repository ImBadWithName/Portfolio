import React, { useEffect, useState } from 'react'
import './style.css'
import GameDisplay from '../GameDisplay'
import * as portals from 'react-reverse-portal';
import Overlay from '../Overlay';
type Props = {
  focus :  boolean;
}

const GameBoyScreen = (props: Props) => {
  const [fullScreen,setFullScreen] = useState(false)
  const portalNode = React.useMemo(() => portals.createHtmlPortalNode(), []);
  useEffect(()=>{
    if(!props.focus){
      setCurrentGame("")
    }
  },[props.focus])
  const games = [
    {
      name:"Gravity wars",
      image:"/images/GameImage/TimeAndDeath.png",
      url:"https://i.simmer.io/@un_deux_trois/destination-nuages"
    },{
      name:"Time & Death don't matter",
      image:"/images/GameImage/TimeAndDeath.png",
      url:"https://i.simmer.io/@un_deux_trois/vermins-out-of-my-casino"
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
    <div className='container-gameBoy'>
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
      {currentGame && props.focus &&
      <>
        <div className='full-screen' onClick={()=>setFullScreen(true)}>
          <img src={"/images/icones/full-screen-svgrepo-com.png"} />
        </div>

          

        {!fullScreen &&
            <div style={{width:"100%",height:"100%"}}>
              <iframe 
              // style={{height:"100%",position: "absolute", border: "none"}} 
              width={"100%"} height={"100%"} src={currentGame} />
            </div>
              
        }
        {fullScreen  && <Overlay>
              <div style={{padding:"15vw", width:"100vw",height:"100vh", display:"flex",justifyContent:"center", alignItems:"center", background:"rgba(0, 0, 0, 0.52)"}}
                  onClick={()=>setFullScreen(false)}
                >
            {/* <div style={{width:"100%",height:"100%"}}> */}
              <iframe 
              // style={{height:"100%",position: "absolute", border: "none"}} 
              width={"80%"} height={"80%"} src={currentGame} />
            {/* </div> */}

              </div>
            </Overlay>} 
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