import React, {useState, useEffect} from 'react'
import Header from '../Header/Header'
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import {StyledPaper, TituloUsuario, ContainerPost, PostFooter, ContainerButton, TextContainer, LikesContainer, LikesButton, CommentForm, CommentPaper, ContainerCommentText, CommentsTitle, CommentUserContainer, CommentLikesContainer, CommentSection, Loading, StyledSVG} from './Style'
import { TextField, Button } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import useForm from '../../Hooks/useForm'

function PostDetailPage () {
    const history = useHistory();
    const params = useParams();
    const [post, setPost] = useState()
    const [comments, setComments] = useState([])
    const {form, onChange, resetForm} = useForm({text: ""})

    const handleInputChange = event => {
        const {name, value} = event.target
        onChange(name, value)
    }

    const attPostDetail = () => {
        const token = window.localStorage.getItem("token")
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}`, {headers: {Authorization: token}})
        .then((response) => {
            setPost(response.data.post)
            setComments(response.data.post.comments)
        })
    }

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
        
    },[history, params.postId])

    const votePostUp = (post) => {
        const token = window.localStorage.getItem("token")  
        if(post.userVoteDirection === 1){
            const body = {
                direction: 0
            }
            axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}/vote`, body, {headers: {Authorization: token}})
            .then(() => {
                attPostDetail()
            })
        } else {
            const body = {
                direction: 1
            }
            axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}/vote`, body, {headers: {Authorization: token}})
            .then(() => {
                attPostDetail()
            })
        }
    }

    const votePostDown = (post) => {
        const token = window.localStorage.getItem("token")
        if(post.userVoteDirection === -1){
            const body = {
                direction: 0
            }
            axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}/vote`, body, {headers: {Authorization: token}})
            .then(() => {
                attPostDetail()
            })
        } else {
            const body = {
                direction: -1
            }
            axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}/vote`, body, {headers: {Authorization: token}})
            .then(() => {
                attPostDetail()
            })
        }
    }

    const createComment = (e) => {
        e.preventDefault()
        const token = window.localStorage.getItem("token")
        const body = {
            text: form.text
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}/comment`, body, {headers: {Authorization: token}})
        .then(() => {
            attPostDetail()
            resetForm()
        })
    }

    const voteLikeComment = (comment) => {
        const token = window.localStorage.getItem("token")  
        if(comment.userVoteDirection === 1){
            const body = {
                direction: 0
            }
            axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}/comment/${comment.id}/vote`, body, {headers: {Authorization: token}})
            .then(() => {
                attPostDetail()
            })
        } else {
            const body = {
                direction: 1
            }
            axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}/comment/${comment.id}/vote`, body, {headers: {Authorization: token}})
            .then(() => {
                attPostDetail()
            })
        }
    }

    const voteDislikeComment = (comment) => {
        const token = window.localStorage.getItem("token")  
        if(comment.userVoteDirection === -1){
            const body = {
                direction: 0
            }
            axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}/comment/${comment.id}/vote`, body, {headers: {Authorization: token}})
            .then(() => {
                attPostDetail()
            })
        } else {
            const body = {
                direction: -1
            }
            axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}/comment/${comment.id}/vote`, body, {headers: {Authorization: token}})
            .then(() => {
                attPostDetail()
            })
        }
    }

    const goToFeedPage = () => {
        history.push("/feed")
    }
    return(
        <div>
            <Header />
            <ContainerButton>
                <Button variant="contained" color="primary" onClick={goToFeedPage}>Voltar</Button> 
            </ContainerButton>
            {post === undefined ? <Loading><StyledSVG viewBox="25 25 50 50"><circle cx="50" cy="50" r="20"></circle></StyledSVG></Loading>:             
            <div>    
                <StyledPaper>
                        <TituloUsuario>Usuário: {post.username}</TituloUsuario>
                        <ContainerPost>
                            Título: {post.title}<br></br>
                            {post.text}
                        </ContainerPost>
                        <PostFooter>
                            <LikesContainer>
                                <LikesButton onClick={votePostUp}>{post.userVoteDirection === 1 ? <ArrowUpwardIcon color="primary"/> : <ArrowUpwardIcon />}</LikesButton>
                                <TextContainer>{post.votesCount}</TextContainer>
                                <LikesButton onClick={votePostDown}>{post.userVoteDirection === -1 ? <ArrowDownwardIcon color="secondary"/> : <ArrowDownwardIcon />}</LikesButton>
                            </LikesContainer>
                            <TextContainer>{post.commentsCount} {post.commentsCount <= 1 ? 'comentário' : 'comentários'}</TextContainer>
                        </PostFooter>
                </StyledPaper>
                    <CommentForm onSubmit={createComment}>
                    <TextField 
                        required
                        variant="outlined" 
                        label="Comentário"
                        name="text"
                        value={form.text}
                        onChange={handleInputChange}
                    />
                    <Button variant="contained" color="primary" type="submit">Enviar</Button>
                    </CommentForm>
                <CommentsTitle>Comentários</CommentsTitle>
                <CommentSection>
                {comments.length === 0 ? <Loading>Não existem comentários neste post!</Loading> : comments.map((comment) => {
                    return(
                        <CommentPaper key={comment.id}>
                            <CommentUserContainer>{comment.username}</CommentUserContainer>
                            <ContainerCommentText>{comment.text}</ContainerCommentText>
                            <CommentLikesContainer>
                                <LikesButton onClick={() => voteDislikeComment(comment)}>{comment.userVoteDirection === -1 ? <ThumbDownIcon color="secondary"/> : <ThumbDownIcon />}</LikesButton>
                                <TextContainer>{comment.votesCount}</TextContainer>
                                <LikesButton onClick={() => voteLikeComment(comment)}>{comment.userVoteDirection === 1 ? <ThumbUpIcon color="primary"/> : <ThumbUpIcon />}</LikesButton>
                            </CommentLikesContainer>
                        </CommentPaper>
                    )
                })}
                </CommentSection>
            </div>}
        </div>
    )
}

export default PostDetailPage