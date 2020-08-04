import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import {TextField} from '@material-ui/core'

export const StyledPaper = styled(Paper)`
    width: 400px;
    height: 250px;
    margin: 10px auto;
    text-align: center;
    display: flex;
    flex-direction: column;
`

export const StyledTextField = styled(TextField)`
    width: 100%;
`

export const ContainerInput = styled.div`
    width: 500px;
    margin: 10px auto;
    text-align: center;
`

export const SyledForm = styled.form`
    display: flex;
`

export const TituloUsuario = styled.h3`
    margin:0;
    padding: 10px;
    border-bottom: 1px solid grey;
`

export const ContainerPost = styled.p`
    flex: 1;
`

export const PostFooter = styled.div`
    border-top: 1px solid grey;
    padding: 10px;
    display: flex;
    height: 30px;
    justify-content: space-between;
`

export const TextContainer = styled.p`
    margin: 0;
    padding: 0;
    align-self: center;
    cursor: pointer;
`

export const LikesContainer = styled.div`
    display: flex;
    width: 110px;
    justify-content: space-between;
`

export const LikesButton = styled.button`
    border: none;
    background-color:#FFF;
    cursor: pointer;
`