import {PROMOCODE } from "../actions/actionTypes";

const initialState = {
	open: false,
	value: ""
}

export default (state = initialState, action) => {
	switch(action.type) {
		case PROMOCODE:
			return {
				...state,
				value: action.payload
			}
		default:
			return state
	}
}