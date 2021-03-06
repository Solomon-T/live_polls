import React from "react";
import { Route, Switch,} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Polls  from './polls/polls_index';
import CreatePoll from './polls/create_poll_container';
import PollShowContainer from './user/polls_show_container';
// import PollVoteContainer from './user/poll_vote_container';
import GeneralVoteContainer from './vote/general_vote_container'
import TestShowContainer from './test/test_show_container'
import BetterVoteFormContainer from './easy_vote/vote_form_container'


import { AuthRoute, ProtectedRoute } from "../util/route_util";


const App = () => (
    <div className='rendered-body'>
        
        <Route exact path="/" component={GreetingContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/my/polls" component={Polls} />
        <ProtectedRoute path="/create/poll" component={CreatePoll} />
        <Route path="/polls/:pollId" component={PollShowContainer} />
        {/* <Route path="/vote/:pollId" component={PollVoteContainer} /> */}
        <Route path="/text/vote" component={GeneralVoteContainer} />
        <Route path="/test/:pollId" component={TestShowContainer} />
        <Route path="/vote/:pollId" component={BetterVoteFormContainer} />
    </div>
);

export default App;