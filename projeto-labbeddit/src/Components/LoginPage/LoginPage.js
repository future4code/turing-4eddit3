import React, {useEffect} from 'react'
import Header from '../Header/Header'
import 'rsuite/dist/styles/rsuite-default.css';
import {LoginContainer, StyledForm, StyledButton} from './Style'
import useForm from '../../Hooks/useForm'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {TextField} from '@material-ui/core'
import { Alert } from 'rsuite';

function LoginPage () {
    const {form, onChange, resetForm} = useForm({email: "", password: ""})
    const history = useHistory();
    const handleInputChange = event => {
        const {name, value} = event.target
        onChange(name, value)
    }

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(token !== null){
            history.push("/feed")
        }
    },[history])

    const handleLogin = (e) => {
        e.preventDefault()
        const body = {
            email: form.email,
	        password: form.password
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login", body)
        .then((response) => {
            window.localStorage.setItem("token", response.data.token)
            Alert.success("Login feito com sucesso!", 3000)
            history.push("/feed")
        })
        .catch(() => {
            Alert.error("Email ou senha inválidos!", 3000)
            resetForm()
        })
    }

    const goToSignUpPage = () => {
        history.push("/cadastro")
    }
    return(        
        <div>
            <Header />
            <LoginContainer>
                <StyledForm onSubmit={handleLogin}>
                    <h2>Login</h2>
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
                    <StyledButton type="submit">Fazer login</StyledButton>
                    <StyledButton onClick={goToSignUpPage}>Cadastrar-se</StyledButton>
                </StyledForm>
            </LoginContainer>
        </div>
    )
}

export default LoginPage
