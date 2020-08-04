import styled from 'styled-components'

export const LoginContainer = styled.div`
    width: 400px;
    margin: 30px auto;
    border: 1px solid black;
    border-radius: 20px;
    height: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 300px;
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