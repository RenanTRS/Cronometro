import React, {useState} from 'react';

//Assets
import playImg from '../assets/images/play.svg';
import pauseImg from '../assets/images/pause.svg';
import stopImg from '../assets/images/stop.svg';

import styled from "styled-components";

const BlocoTimer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: #f5f5f5;

    height: 46.1rem;
    width: 63.5rem;

    border-radius: 2.8rem;
    box-shadow: 1rem 1rem 1.5rem #4646461F, -1rem -1rem 1.5rem #FFFFFF80;

    padding: 5.7rem 3.8rem;

    div{
        font-size: 9.8rem;
    }
`;
const ButtonBlock = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
`;

const Button = styled.button`
    display: ${props => props.display || 'flex'};
    justify-content: center;
    align-items: center;

    width: 12rem;
    height: 12rem;
    
    background: #f5f5f5;

    border: none;
    border-radius: 50%;
    box-shadow: 1rem 1rem 1.5rem #4646461F, -1rem -1rem 1.5rem #FFFFFF80;

    cursor: pointer;

    :active{
        box-shadow: inset 1rem 1rem 1.5rem #4646461F, inset -1rem -1rem 1.5rem #FFFFFF80;
    }

    img{
        margin-left: ${props => props.marginLeft || 'none'};

        pointer-events: none;
    }
`;

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