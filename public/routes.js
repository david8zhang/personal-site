import React from 'react';
import { Route } from 'react-router';

/** Home Screen */
import { HomeScreen } from './routes/Home';
import { ProjectScreen } from './routes/Projects';
import { ResumeScreen } from './routes/Resumes';
import { BlogScreen } from './routes/Blog';

export default (
	<Route path='/' component={HomeScreen}>
		<Route path='projects' component={ProjectScreen} />
		<Route path='resume' component={ResumeScreen} />
		<Route path='blog' component={BlogScreen} />
	</Route>
);
