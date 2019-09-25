import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegisterMeeting from './pages/registerMeeting';
import RegisteredMeetings from './pages/registeredMeetings';
import SeeMeetings from './pages/seeMeetings';
import TopBar from './components/topBar';

const Routes = () => (
	<BrowserRouter>
		<TopBar />
		<Switch>
			<Route path="/" exact component={RegisterMeeting} />
			<Route path="/registered-meetings" exact component={RegisteredMeetings} />
			<Route path="/see-meetings" exact component={SeeMeetings} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
