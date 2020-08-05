import React, {useState, useEffect} from 'react'
import Header from '../Header/Header'
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import {StyledPaper, TituloUsuario, ContainerPost, PostFooter, TextContainer, LikesContainer, LikesButton, CommentContainer, CommentPaper, ContainerCommentText, CommentsTitle, CommentUserContainer, CommentLikesContainer} from './Style'
import { TextField, Button } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

function PostDetailPage () {
    const history = useHistory();
    const params = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(token === null){
            history.push("/login")
        }
        const getPostDetail = () => {
            const token = window.localStorage.getItem("token")
            axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}`, {headers: {Authorization: token}})
            .then((response) => {
                setPost(response.data.post)
                setComments(response.data.post.comments)
            })
        }
        getPostDetail()
        
    }, [history, params.postId])
console.log(post)
    return(
        <div>
            <Header />
            <StyledPaper>
                    <TituloUsuario>Usuário: {post.username}</TituloUsuario>
                    <ContainerPost>
                        Título: {post.title}<br></br>
                        {post.text}
                    </ContainerPost>
                    <PostFooter>
                        <LikesContainer>
                            <LikesButton>{post.userVoteDirection === 1 ? <ArrowUpwardIcon color="primary"/> : <ArrowUpwardIcon />}</LikesButton>
                            <TextContainer>{post.votesCount}</TextContainer>
                            <LikesButton>{post.userVoteDirection === -1 ? <ArrowDownwardIcon color="secondary"/> : <ArrowDownwardIcon />}</LikesButton>
                        </LikesContainer>
                        <TextContainer>{post.commentsCount} comentários</TextContainer>
                    </PostFooter>
            </StyledPaper>
            <CommentContainer>
                <TextField 
                    variant="outlined" 
                    label="Comentário"
                    name="text"
                />
                <Button variant="contained" color="primary" >Enviar</Button>
            </CommentContainer>
            <CommentsTitle>Comentários</CommentsTitle>
            {comments && comments.map((comment) => {
                return(
                    <CommentPaper key={comment.id}>
                        <CommentUserContainer>{comment.username}</CommentUserContainer>
                        <ContainerCommentText>{comment.text}</ContainerCommentText>
                        <CommentLikesContainer>
                            <LikesButton>{comment.userVoteDirection === -1 ? <ThumbDownIcon color="secondary"/> : <ThumbDownIcon />}</LikesButton>
                            <TextContainer>{comment.votesCount}</TextContainer>
                            <LikesButton>{comment.userVoteDirection === 1 ? <ThumbUpIcon color="primary"/> : <ThumbUpIcon />}</LikesButton>
                        </CommentLikesContainer>
                    </CommentPaper>
                )
            })}
        </div>
    )
}

export default PostDetailPage