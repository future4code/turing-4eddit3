import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';
import axios from 'axios';
import {StyledPaper, StyledTextField, ContainerInput, SyledForm, TituloUsuario, ContainerPost, PostFooter, TextContainer, LikesContainer, LikesButton} from './Style'
import { Button } from '@material-ui/core';
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
                        <TextContainer onClick={() => goToPostDetailPage(post.id)}>{post.commentsCount} comentários</TextContainer>
                    </PostFooter>
                </StyledPaper>
                )
            })}
        </div>
    )
}

export default FeedPage