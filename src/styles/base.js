import {createGlobalStyle} from 'styled-components';

export const Base = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Inter', sans-serif;
}

:root{
    font-size: 62.5%;
}
`;