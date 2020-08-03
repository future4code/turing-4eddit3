import React from 'react'
import Header from '../Header/Header'
import {ContainerHome, BodyContainer} from './Style'

function HomePage () {

    return(
        <ContainerHome>
            <Header />
            <BodyContainer>lorem ipsum</BodyContainer>
        </ContainerHome>
    )
}

export default HomePage
