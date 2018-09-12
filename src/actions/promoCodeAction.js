import {PROMOCODE} from "./actionTypes";

export const handleChange = (e) => dispatch => {
	dispatch({
		type: PROMOCODE,
		payload: e.target.value
	})
}