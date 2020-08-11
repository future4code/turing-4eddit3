import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';
import axios from 'axios';
import {StyledPaper, StyledTextField, ContainerForm, SyledForm, TituloUsuario, ContainerPost, PostFooter, TextContainer, LikesContainer, LikesButton, StyledButton, ContainerInput, StyledSVG, Loading} from './Style'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import useForm from '../../Hooks/useForm'

function FeedPage () {
    const history = useHistory();
    const [posts, setPosts] = useState([])
    const {form, onChange, resetForm} = useForm({title: "", text: ""})

    const handleInputChange = event => {
        const {name, value} = event.target
        onChange(name, value)
    }

    const getPosts = () => {
        const token = window.localStorage.getItem("token")
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts", {headers: {Authorization: token}})
        .then((response) => {
            setPosts(response.data.posts)
        })
    }

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(token === null){
            history.push("/login")
        }
        getPosts()
    },[history])

    const createPosts = (e) => {
        e.preventDefault()
        const token = window.localStorage.getItem("token")
        const body = {
            text: form.text,
	        title: form.title
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts", body, {headers: {Authorization: token}})
        .then((response) => {
            getPosts()
            resetForm()
        })
    }

    const votePostUp = (post) => {
        const token = window.localStorage.getItem("token")  
        if(post.userVoteDirection === 1){
            const body = {
                direction: 0
            }
            axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${post.id}/vote`, body, {headers: {Authorization: token}})
            .then(() => {
                getPosts()

            })
        } else {
            const body = {
                direction: 1
            }
            axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${post.id}/vote`, body, {headers: {Authorization: token}})
            .then(() => {
                getPosts()
            })
        }
    }

    const votePostDown = (post) => {
        const token = window.localStorage.getItem("token")
        if(post.userVoteDirection === -1){
            const body = {
                direction: 0
            }
            axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${post.id}/vote`, body, {headers: {Authorization: token}})
            .then(() => {
                getPosts()
            })
        } else {
            const body = {
                direction: -1
            }
            axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${post.id}/vote`, body, {headers: {Authorization: token}})
            .then(() => {
                getPosts()
            })
        }
    }

    const goToPostDetailPage = (postId) => {
        history.push(`/post/${postId}`)
    }

    return(
        <div>
            <Header />
            <ContainerForm>
                <SyledForm onSubmit={createPosts}>
                    <ContainerInput>
                        <StyledTextField 
                        required
                        variant="outlined"
                        label="Título do Post"
                        name="title"
                        onChange={handleInputChange}
                        value={form.title}
                        />
                        <StyledTextField 
                        required
                        multiline
                        rows={3}
                        variant="outlined"
                        label="Texto do Post"
                        name="text"
                        onChange={handleInputChange}
                        value={form.text}
                        />
                    </ContainerInput>
                    <StyledButton type="submit" variant="contained" color="primary">Postar</StyledButton>
                </SyledForm>
            </ContainerForm>
            
            {posts.length === 0? <Loading><StyledSVG viewBox="25 25 50 50"><circle cx="50" cy="50" r="20"></circle></StyledSVG></Loading> : posts.map((post) => {
                return(
                <StyledPaper key={post.id}>
                    <TituloUsuario>{post.username}</TituloUsuario>
                    <ContainerPost>
                        Título: {post.title}<br></br>
                        {post.text}
                    </ContainerPost>
                    <PostFooter>
                        <LikesContainer>
                            <LikesButton onClick={() => votePostUp(post)}>{post.userVoteDirection === 1 ? <ArrowUpwardIcon color="primary"/> : <ArrowUpwardIcon />}</LikesButton>
                            <TextContainer>{post.votesCount}</TextContainer>
                            <LikesButton onClick={() => votePostDown(post)}>{post.userVoteDirection === -1 ? <ArrowDownwardIcon color="secondary"/> : <ArrowDownwardIcon />}</LikesButton>
                        </LikesContainer>
                        <TextContainer onClick={() => goToPostDetailPage(post.id)}>{post.commentsCount} {post.commentsCount <= 1 ? 'comentário' : 'comentários'}</TextContainer>
                    </PostFooter>
                </StyledPaper>
                )
            })}
        </div>
    )
}

export default FeedPage