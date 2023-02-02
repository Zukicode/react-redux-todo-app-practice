import React from 'react';

//styles
import './Header.scss';

const Header = () => {
	return (
		<div className='header'>
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g>
					<path d='M0 0h24v24H0z' fill='none' />
					<path
						fill='#f5f5f5'
						d='M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 2h2v2H6v-2zm0 4h2v2H6v-2zm4-4h8v2h-8v-2zm0 4h5v2h-5v-2z'
					/>
				</g>
			</svg>
			<h1>Task Manager | React + Redux</h1>
		</div>
	);
};

export default Header;
