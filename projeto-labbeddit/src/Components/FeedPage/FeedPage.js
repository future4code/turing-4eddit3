import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';
import axios from 'axios';
import {StyledPaper, StyledTextField, ContainerInput, SyledForm, TituloUsuario, ContainerPost, PostFooter, TextContainer, LikesContainer, LikesButton} from './Style'
import { Button } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';



function FeedPage () {
    const history = useHistory();
    const [posts, setPosts] = useState([])
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

    console.log(posts)

    return(
        <div>
            <Header />
            <ContainerInput>
                <SyledForm>
                    <StyledTextField 
                    multiline
                    rows={3}
                    variant="outlined"
                    label="Novo Post"
                    />
                    <Button variant="contained" color="primary">Postar</Button>
                </SyledForm>
            </ContainerInput>
            
            {posts.map((post) => {
                return(
                <StyledPaper key={post.id}>
                    <TituloUsuario>Usuário: {post.username}</TituloUsuario>
                    <ContainerPost>{post.text}</ContainerPost>
                    <PostFooter>
                        <LikesContainer>
                            <LikesButton><ArrowUpwardIcon/></LikesButton>
                            <TextContainer>{post.votesCount}</TextContainer>
                            <LikesButton><ArrowDownwardIcon/></LikesButton>
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