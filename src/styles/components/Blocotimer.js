import styled from "styled-components";

export const BlocoTimer = styled.section`
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
`;
export const Timer = styled.div`

    width: 100%;

    display: flex;
    justify-content: center;
    font-size: 9.8rem;

    span{
        display: flex;
        align-items: center;

        height: 8.3rem;
    }
`;
export const Time = styled.div`
    width: 15rem;
    
    text-align: center;
`;

export const ButtonBlock = styled.span`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
`;

export const ButtonS = styled.button`
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