import React {useEffect} from "react";
import moleHill from '../moleHill.png';

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
            <img style={{'width': '30vw'}} src={moleHill} />
        </div>
    )
}

export default EmptySlot