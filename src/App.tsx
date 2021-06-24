import React from 'react';
import {Route} from 'react-router-dom';
import {Header} from "./Components/Header";
import {MainContent} from "./Components/MainContent/MainContent";
import {SignUp} from "./Components/SignUp";

export const App = () => {
    return <div>
        <Header/>
        <Route exact path={'/'} render={() => <MainContent/>}/>
        <Route path={'/signUp'} render={() => <SignUp/>}/>
    </div>
}