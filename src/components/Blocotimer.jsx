import React, {useState} from 'react';

//Assets
import playImg from '../assets/images/play.svg';
import pauseImg from '../assets/images/pause.svg';
import stopImg from '../assets/images/stop.svg';

//Styles
import { BlocoTimer, ButtonBlock, Button, Timer, Time } from '../styles/components/Blocotimer';

export function Blocotimer(){
    const [play, setPlay] = useState('flex');
    const [pause, setPause] = useState('none');
    const [stop, setStop] = useState('none');
    const [time, setTime] = useState({ms: 0, s: 0, m: 0});
    const [interv,setInterv] = useState();

    
    let updateM = time.m, updateS = time.s, updateMs = time.ms;

    const run = () => {
        if(updateS === 60){
            updateM++;
            updateS = 0;
        }
        if(updateMs === 99){
            updateS++;
            updateMs = 0;
        }
        updateMs++;

        return setTime({ms: updateMs, s: updateS, m: updateM});
    }
    
    //Muda o display
    function handleChangeDisplayPlay(event){
        setPlay('none');
        setPause('flex');
        setStop('flex');
        run();
        setInterv(setInterval(run, 10));
        setStatus(2);
    }
    function handleChangeDisplayPause(event){
        setPlay('flex');
        setPause('none');
        clearInterval(interv);
        setStatus(3);
    }
    function handleChangeDisplayStop(event){
        setPlay('flex');
        setPause('none');
        setStop('none');
        clearInterval(interv);
        setTime({ms: 0, s: 0, m: 0});
        setStatus(1);
    }


    return(
        <BlocoTimer display="flex">
            <Timer>
                <Time>{time.m >= 10 ? time.m : "0"+time.m}</Time><span>:</span>
                <Time>{time.s >= 10 ? time.s : "0"+time.s}</Time><span>:</span>
                <Time>{time.ms >= 10 ? time.ms : "0"+time.ms}</Time>
            </Timer>
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