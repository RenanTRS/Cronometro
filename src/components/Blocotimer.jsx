import React, {useState} from 'react';

//Assets
import playImg from '../assets/images/play.svg';
import pauseImg from '../assets/images/pause.svg';
import stopImg from '../assets/images/stop.svg';

//Styles
import { BlocoTimer, ButtonBlock, Button } from '../styles/components/Blocotimer';

export function Blocotimer(){
    const [play, setPlay] = useState('flex');
    const [pause, setPause] = useState('none');
    const [stop, setStop] = useState('none');
    
    //Muda o display
    function handleChangeDisplayPlay(event){
        setPlay('none');
        setPause('flex');
        setStop('flex');
    }
    function handleChangeDisplayPause(event){
        setPlay('flex');
        setPause('none');
    }
    function handleChangeDisplayStop(event){
        setPlay('flex');
        setPause('none');
        setStop('none');
    }


    return(
        <BlocoTimer>
            <div>00:00:00</div>
            <ButtonBlock>
                <Button marginLeft='2rem' display={play} onClick={event => handleChangeDisplayPlay(event)}>
                    <img src={playImg} alt="play" />
                </Button> 
                <Button display={pause} onClick={event => handleChangeDisplayPause(event)}>
                    <img src={pauseImg} alt="pause" />
                </Button> 
                <Button display={stop} onClick={event => handleChangeDisplayStop(event)}>
                    <img src={stopImg} alt="stop" />
                </Button> 
            </ButtonBlock>

        </BlocoTimer>
    );
}