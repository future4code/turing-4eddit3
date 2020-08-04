import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';
import axios from 'axios';
import {StyledPaper, StyledTextField, ContainerInput, SyledForm, TituloUsuario, ContainerPost, PostFooter, TextContainer, LikesContainer, LikesButton} from './Style'
import { Button } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import useForm from '../../Hooks/useForm'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

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

    const votePostUp = (postId) => {
        const token = window.localStorage.getItem("token")
        const body = {
            direction: 1
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${postId}/vote`, body, {headers: {Authorization: token}})
        .then(() => {
            getPosts()
        })
    }

    const votePostDown = (postId) => {
        const token = window.localStorage.getItem("token")
        const body = {
            direction: -1
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${postId}/vote`, body, {headers: {Authorization: token}})
        .then(() => {
            getPosts()
        })
    }

    return(
        <div>
            <Header />
            <ContainerInput>
                <SyledForm onSubmit={createPosts}>
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
                    <Button type="submit" variant="contained" color="primary">Postar</Button>
                </SyledForm>
            </ContainerInput>
            
            {posts.map((post) => {
                return(
                <StyledPaper key={post.id}>
                    <TituloUsuario>Usuário: {post.username}</TituloUsuario>
                    <ContainerPost>{post.text}</ContainerPost>
                    <PostFooter>
                        <LikesContainer>
                            <LikesButton onClick={() => votePostUp(post.id)}><ArrowUpwardIcon/></LikesButton>
                            <TextContainer>{post.votesCount}</TextContainer>
                            <LikesButton onClick={() => votePostDown(post.id)}><ArrowDownwardIcon/></LikesButton>
                        </LikesContainer>
                        <TextContainer>{post.commentsCount} comentários</TextContainer>
                    </PostFooter>
                </StyledPaper>
                )
            })}
        </div>
    )
}

export default FeedPage