import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import Page404 from './Page404/Page404'
import FeedPage from './FeedPage/FeedPage';
import SignUpPage from './SignUpPage/SignUpPage';
import PostDetailPage from './PostDetailPage/PostDetailPage';

function Router () {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/feed">
                    <FeedPage />
                </Route>
                <Route exact path="/cadastro">
                    <SignUpPage />
                </Route>
                <Route exact path ="/post/:postId">
                    <PostDetailPage />
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/">
                    <Page404 />
                </Route>
            </Switch>
        </BrowserRouter>
    )
    }

export default Router