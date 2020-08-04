import React, {useEffect} from 'react'
import Header from '../Header/Header'
import {LoginContainer, StyledForm, StyledButton} from './Style'
import useForm from '../../Hooks/useForm'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {TextField} from '@material-ui/core'

function SignUpPage () {
    const {form, onChange, resetForm} = useForm({email: "", password: "", username: ""})
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
            alert("Usuário cadastrado com sucesso!")
            history.push("/login")
        })
        .catch((err) => {
            alert("Usuário e/ou email já está em uso!")
            resetForm()
        })
    }
    return(        
        <div>
            <Header />
            <LoginContainer>
                <StyledForm onSubmit={handleSignUp}>
                    <h2>Formulário de Cadastro</h2>
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
        </div>
    )
}

export default SignUpPage
