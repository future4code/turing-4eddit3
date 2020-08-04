import React, {useState, useEffect} from 'react'
import Header from '../Header/Header'
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import {StyledPaper, TituloUsuario, ContainerPost, PostFooter, TextContainer, LikesContainer, LikesButton} from './Style'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function PostDetailPage () {
    const history = useHistory();
    const params = useParams();
    const [post, setPost] = useState({})

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(token === null){
            history.push("/login")
        }
        const getPostDetail = () => {
            const token = window.localStorage.getItem("token")
            axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}`, {headers: {Authorization: token}})
            .then((response) => {
                setPost(response.data)
            })
        }
        getPostDetail()
        
    }, [history, params.postId])

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
        </div>
    )
}

export default PostDetailPage