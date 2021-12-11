import React from 'react';

//Assets img
import playImg from '../assets/images/play.svg';
import pauseImg from '../assets/images/pause.svg';
import stopImg from '../assets/images/stop.svg';

//Styled Components
import { ButtonBlock, ButtonS} from '../styles/components/Blocotimer';

export function Button(props){
    return (
        <ButtonBlock>
            {(props.status === 1) &&
                <ButtonS marginLeft='2rem' onClick={props.play}>
                    <img src={playImg} alt="play" />
                </ButtonS> 
            }
            {(props.status === 2) &&
                <>
                    <ButtonS onClick={props.pause}>
                        <img src={pauseImg} alt="pause" />
                    </ButtonS>

                    <ButtonS onClick={props.stop}>
                        <img src={stopImg} alt="stop" />
                    </ButtonS>
                </>
            }
            {(props.status === 3) &&
                <>
                    <ButtonS marginLeft='2rem' onClick={props.play}>
                        <img src={playImg} alt='play' />
                    </ButtonS>
                    <ButtonS onClick={props.stop}>
                        <img src={stopImg} alt='stop' />
                    </ButtonS>
                </>
            }
        </ButtonBlock>
    );
}