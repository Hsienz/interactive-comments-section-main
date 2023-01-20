import iconPlus from '/src/assets/images/icon-plus.svg'
import iconMinus from '/src/assets/images/icon-minus.svg'
import { useState } from 'react'
const ScoreBar = ( props:{score:number, setScore:(score:number)=>void} ) => {
    const [scoreTo, setScoreTo] = useState(0)
    const plusScore = () => {
        if( scoreTo == 1 ) {
            setScoreTo(0)
            props.setScore(props.score-1)
        } else if( scoreTo == 0 ) {
            setScoreTo(1)
            props.setScore(props.score+1)
        }
        else {
            setScoreTo(1)
            props.setScore(props.score+2)
        }
    }
    const minusScore = () => {
        if(scoreTo == 1 ) {
            setScoreTo(-1)
            props.setScore(props.score-2)
        }
        else if( scoreTo == 0 ) {
            setScoreTo(-1)
            props.setScore(props.score-1)
        } else {
            setScoreTo(0)
            props.setScore(props.score+1)
        }
    }
    return (
        <div className='flex bg-Light_gray px-5 py-2 rounded-lg justify-between md:flex-col gap-x-4 md:px-3 md:items-center md:justify-start md:gap-y-4'>
            <button className={`iconScorePm ${scoreTo==1 ? "brightness-50": ""}`} onClick={plusScore}><img src={iconPlus} alt="" /></button>
            <p className='text-Moderate_blue font-medium'>{props.score}</p>
            <button className={`iconScorePm ${scoreTo==-1 ? "brightness-50" : ""}`} onClick={minusScore}><img src={iconMinus} alt="" /></button>
        </div>
    )
}

export default ScoreBar