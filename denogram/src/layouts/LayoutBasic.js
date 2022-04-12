import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from '../components/Header';

export default function LayoutBasic ({children}) {
    return (
        <>
        <Header/>
        <Container className='layour-basic'>
        {children}
            </Container>
        
        </>
    )
}
