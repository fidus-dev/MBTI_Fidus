import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import CarouselTest from './components/CarouselTest';
import SurveyContainer from './containers/survey';

const App: FC = () => {
	
	return (
		<Switch>
			<Route exact path={'/'} component={SurveyContainer} />
		</Switch>
	)
};

export default App;
