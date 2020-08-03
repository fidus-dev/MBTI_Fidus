import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import CarouselTest from './components/CarouselTest';
import SurveyContainer from './containers/survey';
import EntryPage from './components/pages/Anonymous/EntryPage';
const App: FC = () => {
	
	return (
		<Switch>
			<Route exact path={'/'} component={EntryPage} />
		</Switch>
	)
};

export default App;
