import styled from 'styled-components'

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    
`

export const BodyContainer = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 100vw;
    align-items: center;
    text-align: center;
`
export const LoginContainer = styled.div`
    width: 400px;
    margin: 30px auto;
    border: 1px solid black;
    border-radius: 20px;
    height: 350px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 20px;
    grid-row: 1/3;
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 350px;
    justify-content: space-around;
`

export const StyledButton = styled.button`
    width: 150px;
    margin: 10px auto;
    background-color: #3f50b5;
    border: none;
    border-radius: 10px;
    height: 40px;
    outline: none;
    color: #FFF;
    cursor: pointer;
    :hover{
        background-color: #002884;
    }
`

export const MainTitle = styled.h1`
    grid-row:1/3;
`