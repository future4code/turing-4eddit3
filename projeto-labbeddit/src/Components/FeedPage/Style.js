import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import {TextField, Button} from '@material-ui/core'

export const StyledPaper = styled(Paper)`
    width: 490px;
    margin: 10px auto;
    text-align: center;
    display: flex;
    flex-direction: column;
`

export const StyledTextField = styled(TextField)`
    width: 100%;
`

export const ContainerForm = styled.div`
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
    padding: 20px 10px;
`

export const PostFooter = styled.div`
    border-top: 1px solid grey;
    padding: 10px;
    display: flex;
    height: 45px;
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
    outline: none;
`

export const StyledButton = styled(Button)`
    height: 70px;
    align-self: center;
`

export const ContainerInput = styled.div`
    margin: 10px;
    height: 160px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const StyledSVG = styled.svg`
    width: 3.75em;
    transform-origin: center;
    animation: rotate 2s linear infinite;
    margin: 0 auto;

circle {
  fill: none;
  stroke: #3f50b5;
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
`

export const Loading = styled.div`
    text-align: center;
    margin-top: 50px;
`