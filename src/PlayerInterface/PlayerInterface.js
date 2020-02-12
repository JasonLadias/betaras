import React from 'react'
import PlayerCard from './PlayerCard/PlayerCard'

const PlayerInterface = (props) =>{
    return(
        <PlayerCard 
        name={props.name}
        image={props.image}
        text={props.text}/>
    )
}

export default PlayerInterface