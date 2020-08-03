import React from 'react'
import {ContainerHeader, ButtonContainer, TituloPrincipal, TituloCointainer} from './Style'
import { useHistory } from "react-router-dom";


function Header () {
    const history = useHistory();
    const goToHomePage = () => {
        history.push("/")
    }
    const goToLoginPage = () => {
        history.push("/login")
    }
    const goToSignUpPage = () => {
        history.push("/cadastro")
    }
    return(
        <ContainerHeader>
            <ButtonContainer>
                <button onClick={goToHomePage}>Home</button>
            </ButtonContainer>
            <TituloCointainer>
                <TituloPrincipal>LabEddit</TituloPrincipal>
            </TituloCointainer>
            <ButtonContainer>
                <button onClick={goToLoginPage}>Login</button>
                <button onClick={goToSignUpPage}>Cadastrar</button>
            </ButtonContainer>
        </ContainerHeader>
    )
}

export default Header