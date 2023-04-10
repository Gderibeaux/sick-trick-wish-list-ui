import React from 'react';
import './TrickContainer.css'

const TrickContainer = props => {
    console.log('props', props)
    const newTricks = props.tricks.map(tricks => {
        return (
            <div className="tricks">
                <h3>{tricks.stance}</h3>
                <p>{tricks.obstacle}</p>
            </div>
        )
    })
    console.log('newTricks', newTricks)
    return(
        <div className='trick-container'>
            {newTricks}
        </div>
    )
}


export default TrickContainer