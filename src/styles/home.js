import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
    width: 100%;

    background-color: #f5f5f5;

    div{
        height: 460px;
        width: 635px;

        border-radius: 8px;

        box-shadow: 10px 10px 15px 0px rgba(70, 70, 70, 0.12), -10px -10px 15px 0px rgba(255, 255, 255, 0.5);

        padding: 38px;

        > div{
            width: 378px;
            height: 95px;
        }
    }
`