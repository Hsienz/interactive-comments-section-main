import iconPlus from '/src/assets/images/icon-plus.svg'
import iconMinus from '/src/assets/images/icon-minus.svg'
import { useState } from 'react'
const ScoreBar = ( props:{score:number} ) => {
    const [score, setScore] = useState(props.score)
    const [scoreTo, setScoreTo] = useState(0)
    const plusScore = () => {
        if( scoreTo == 1 ) {
            setScoreTo(0)
            setScore(score-1)
        } else if( scoreTo == 0 ) {
            setScoreTo(1)
            setScore(score+1)
        }
        else {
            setScoreTo(1)
            setScore(score+2)
        }
    }
    const minusScore = () => {
        if(scoreTo == 1 ) {
            setScoreTo(-1)
            setScore(score-2)
        }
        else if( scoreTo == 0 ) {
            setScoreTo(-1)
            setScore(score-1)
        } else {
            setScoreTo(0)
            setScore(score+1)
        }
    }
    return (
        <div className='flex bg-Light_gray px-5 py-2 rounded-lg justify-between'>
            <button onClick={plusScore}><img src={iconPlus} alt="" /></button>
            <p className='mx-4 text-Moderate_blue font-medium'>{score}</p>
            <button onClick={minusScore}><img src={iconMinus} alt="" /></button>
        </div>
    )
}

export default ScoreBar