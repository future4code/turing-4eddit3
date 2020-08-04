import React, {useEffect} from 'react'
import Header from '../Header/Header'
import { useHistory } from "react-router-dom";
import {ContainerHome, BodyContainer} from './Style'

function HomePage () {
    const history = useHistory();
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(token !== null){
            history.push("/feed")
        }
    }, [])
    return(
        <ContainerHome>
            <Header />
            <BodyContainer>lorem ipsum</BodyContainer>
        </ContainerHome>
    )
}

export default HomePage
