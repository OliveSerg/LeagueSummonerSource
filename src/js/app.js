import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './pages/Layout';
import Featured from './pages/Featured'
import Summoner from './pages/Summoner'

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Layout}>
			<IndexRoute component={Featured}></IndexRoute>
            <Route path="summoner(/:id)" component={Summoner}></Route>
		</Route>
	</Router>,
app)
