import React from 'react';

import { Blocotimer } from '../components/Blocotimer';

//Styles
import { Container } from '../styles/pages/Container';

export function Home(){
    return(
        <Container>
            <Blocotimer />
        </Container>
    );
}
