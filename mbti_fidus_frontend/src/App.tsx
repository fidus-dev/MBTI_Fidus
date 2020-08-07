import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import CarouselTest from './components/CarouselTest';
import SurveyContainer from './containers/survey';
import EntryPage from './pages/Anonymous/EntryPage';
import SubjectBoard from './pages/Anonymous/SubjectBoard';
import MainPage from './pages/MainPage';

const App: FC = () => {
	
	return (
		<Switch>
			<Route exact path={'/'} component={EntryPage} />
			<Route exact path={'/survey'} component={SurveyContainer} />
			{/* <Route exact path={'/'} component={MainPage} /> */}
			<Route exact path={'/board'} component={SubjectBoard}/>
		</Switch>
	)
};

export default App;
