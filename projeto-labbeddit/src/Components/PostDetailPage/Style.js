import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import {TextField} from '@material-ui/core'

export const StyledPaper = styled(Paper)`
    width: 490px;
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
    height: 45px;
    justify-content: space-between;
`

export const TextContainer = styled.p`
    margin: 0;
    padding: 0;
    align-self: center;
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

export const CommentForm = styled.form`
    width: 400px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-between;
`

export const CommentPaper = styled(Paper)`
    width: 400px;
    margin: 10px auto;
    text-align: center;
    height: 150px;
    display: flex;
    flex-direction: column;
`

export const ContainerCommentText = styled.div`
    flex: 1;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const CommentsTitle = styled.h3`
    text-align: center;
    border: 1px solid black;
    border-radius: 5px;
    width: 400px;
    margin: 10px auto;
    padding: 10px;
`

export const CommentUserContainer = styled.h3`
    margin: 0;
    padding: 0;
`

export const CommentLikesContainer = styled.div`
    display: flex;
    width: 110px;
    justify-content: space-between;
    margin: 0 auto;
`

export const CommentSection = styled.div`
    display: flex;
    flex-direction: column-reverse;
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

export const ContainerButton = styled.div`
    width: 100%;
    text-align: center;
    margin: 20px auto;
`