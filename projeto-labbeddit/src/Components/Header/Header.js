import React from 'react'
import {ContainerHeader, ButtonContainer, TituloPrincipal, TituloCointainer, HeaderButton} from './Style'
import { useHistory } from "react-router-dom";


function Header () {
    const history = useHistory();
    const goToHomePage = () => {
        history.push("/")
    }
    const goToLoginPage = () => {
        history.push("/login")
    }
    const handleLogout = () => {
        window.localStorage.clear()
        history.push("/")
    }
    const renderButton = () => {
        const token = window.localStorage.getItem("token")
        if(token === null){
            return(
            <ButtonContainer>
                <HeaderButton onClick={goToLoginPage}>Login</HeaderButton>
            </ButtonContainer>
            )
        } else {
            return(
            <ButtonContainer>
                <HeaderButton onClick={handleLogout}>Fazer Logout</HeaderButton>
            </ButtonContainer>
            )
        }
    }
    return(
        <ContainerHeader>
            <ButtonContainer>
                <HeaderButton onClick={goToHomePage}>Home</HeaderButton>
            </ButtonContainer>
            <TituloCointainer>
                <TituloPrincipal>LabEddit</TituloPrincipal>
            </TituloCointainer>
            {renderButton()}
        </ContainerHeader>
    )
}

export default Header