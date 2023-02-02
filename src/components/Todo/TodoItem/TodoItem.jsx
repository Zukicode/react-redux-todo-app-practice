import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../../redux/slices/todoSlice';

//styles
import './../Todo.scss';

const TodoItem = ({ id, text }) => {
	const dispatch = useDispatch();

	const deleteThisTodo = () => {
		dispatch(deleteTodo(id));
	};

	return (
		<div className='todoItem'>
			<p>{text}</p>
			<button onClick={deleteThisTodo}>X</button>
		</div>
	);
};

export default TodoItem;
