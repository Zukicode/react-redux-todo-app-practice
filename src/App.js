import React from 'react';

//Components
import Header from './components/Header/Header';
import Todo from './components/Todo/Todo';

//Styles
import './styles/app.scss';

function App() {
	return (
		<div className='app-wrapper'>
			<Header />

			<div className='content'>
				<Todo />
			</div>
		</div>
	);
}

export default App;
