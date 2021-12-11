import React, {useState} from 'react';

//Styled Component
import { BlocoTimer, Timer, Time } from '../styles/components/Blocotimer';

//Component
import { Button } from './Button';

export function Blocotimer(){
    const [time, setTime] = useState({ms: 0, s: 0, m: 0});
    const [interv,setInterv] = useState(); //Para operar o setInterval
    const [status, setStatus] = useState(1); //Para a troca dos botões

    
    let updateM = time.m, updateS = time.s, updateMs = time.ms;

    //Faz a contagem
    function run(){
        if(updateS === 60){
            updateM++;
            updateS = 0;
        }
        if(updateMs === 99){
            updateS++;
            updateMs = 0;
        }
        updateMs++; //Atualiza contagem

        return setTime({ms: updateMs, s: updateS, m: updateM});
    }
    
    //Inicia a contagem e troca os botões 
    function handlePlay(){
        setInterv(setInterval(run, 10));
        setStatus(2);
    }
    
    //Pausa a contagem e troca o botão
    function handlePause(){
        clearInterval(interv);
        setStatus(3);
    }

    //Para a contagem, zera o timer e troca o botão
    function handleStop(){
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
                <Button status={status} play={handlePlay} pause={handlePause} stop={handleStop}/>
        </BlocoTimer>
    );
}