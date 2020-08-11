import React, {useEffect} from 'react'
import Header from '../Header/Header'
import useForm from '../../Hooks/useForm'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {ContainerHome, BodyContainer, LoginContainer, StyledForm, StyledButton, MainTitle} from './Style'
import {TextField} from '@material-ui/core'
import { Alert } from 'rsuite';

function HomePage () {
    const history = useHistory();
    const {form, onChange, resetForm} = useForm({email: "", password: "", username: ""})
    const handleInputChange = event => {
        const {name, value} = event.target
        onChange(name, value)
    }
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(token !== null){
            history.push("/feed")
        }
    }, [history])

    const handleSignUp = (e) => {
        e.preventDefault()
        const body = {
            email: form.email,
            password: form.password,
            username: form.username
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup", body)
        .then((response) => {
            // window.localStorage.setItem("token", response.data.token)
            Alert.success("Usuário cadastrado com sucesso!")
            history.push("/login")
        })
        .catch((err) => {
            Alert.error("Usuário e/ou email já está em uso!")
            resetForm()
        })
    }

    return(
        <ContainerHome>
            <Header />
                <BodyContainer>
                    <MainTitle>Venha fazer parte da comunidade LabEddit!</MainTitle>
                    <LoginContainer>
                        <StyledForm onSubmit={handleSignUp}>
                                <h3>Formulário de Cadastro</h3>
                                <TextField 
                                label="Usuário"
                                variant="outlined"
                                value={form.username}
                                onChange={handleInputChange}
                                name="username" 
                                placeholder="Usuário"
                                type="text"
                                required
                                />
                                <TextField 
                                label="Email"
                                variant="outlined"
                                value={form.email}
                                onChange={handleInputChange}
                                name="email" 
                                placeholder="email"
                                type="email"
                                required
                                />
                                <TextField 
                                label="Senha"
                                variant="outlined"
                                value={form.password}
                                onChange={handleInputChange}
                                name="password" 
                                placeholder="senha"
                                type="password"
                                required
                                />
                            <StyledButton variant="contained" color="primary">Cadastrar</StyledButton>
                        </StyledForm>
                    </LoginContainer>
                </BodyContainer>
        </ContainerHome>
    )
}

export default HomePage
