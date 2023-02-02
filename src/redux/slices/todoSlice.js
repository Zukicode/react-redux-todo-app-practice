import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	value: '',
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		addTodo(state, action) {
			state.items.push({
				id: Math.floor(Math.random() * 99999999999999),
				text: action.payload,
			});
			localStorage.setItem('items', JSON.stringify(state.items));
			state.value = '';
		},
		deleteTodo(state, action) {
			state.items = state.items.filter(obj => obj.id !== action.payload);
			if (localStorage.getItem('items')) {
				const tempArr = JSON.parse(localStorage.getItem('items'));
				localStorage.setItem(
					'items',
					JSON.stringify(tempArr.filter(obj => obj.id !== action.payload))
				);
			}
		},
		setValue(state, action) {
			state.value = action.payload;
		},
		getFromLocalStorage(state) {
			state.items = JSON.parse(localStorage.getItem('items'));
		},
	},
});

export const { addTodo, deleteTodo, setValue, getFromLocalStorage } =
	counterSlice.actions;

export default counterSlice.reducer;
