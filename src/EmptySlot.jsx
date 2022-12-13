import {useEffect} from "react";
import moleHillImg from './images/moleHill.png';

const EmptySlot = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer) //cleanup
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={moleHillImg} alt = "mole hills that look like bricks"/>
        </div>
    )
}

export default EmptySlot