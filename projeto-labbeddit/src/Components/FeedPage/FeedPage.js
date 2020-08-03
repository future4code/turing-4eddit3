import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';
import axios from 'axios';
import {ContainerPost} from './Style'

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

    return(
        <div>
            <Header />
            {posts.map((post) => {
                return(
                <ContainerPost key={post.id}>
                    <h3>Título: {post.title}</h3>
                    <p>{post.text}</p>
                </ContainerPost>
                )
            })}
        </div>
    )
}

export default FeedPage