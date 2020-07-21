import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import CarouselTest from './components/CarouselTest';
import SurveyContainer from './containers/survey';
import MainPage from './pages/MainPage';

const App: FC = () => {
	
	return (
		<Switch>
			<Route exact path={'/survey'} component={SurveyContainer} />
			<Route exact path={'/'} component={MainPage} />
		</Switch>
	)
};

export default App;
