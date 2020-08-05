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

export const CommentContainer = styled.div`
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
    height: 100px;
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
    margin: 0 auto;
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