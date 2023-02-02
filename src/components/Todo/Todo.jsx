import React from 'react';
import {
	addTodo,
	setValue,
	getFromLocalStorage,
} from '../../redux/slices/todoSlice';
import { useSelector, useDispatch } from 'react-redux';

//Components
import TodoItem from './TodoItem/TodoItem';

//styles
import './Todo.scss';

const Todo = () => {
	const dispatch = useDispatch();
	const { items, value } = useSelector(state => state.todo);

	const inputRef = React.useRef();

	const createTodo = () => {
		dispatch(addTodo(value));
	};

	React.useEffect(() => {
		inputRef.current.focus();
		if (localStorage.getItem('items')) {
			dispatch(getFromLocalStorage());
		}
	}, []);

	return (
		<div className='todo'>
			<div className='listTodo'>
				{items.map(item => {
					return <TodoItem key={item.id} {...item} />;
				})}
			</div>

			<div className='addTodo'>
				<input
					type='text'
					placeholder='Ваш текст тут'
					ref={inputRef}
					value={value}
					onChange={e => dispatch(setValue(e.target.value))}
				/>
				<button onClick={createTodo}>Add</button>
			</div>
		</div>
	);
};

export default Todo;
