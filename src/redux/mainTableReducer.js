import { createArrM_T_Data } from "../utils/createArrM_T_Data";
import { removeItemOfItemsObj } from "../utils/removeItemOfItemsObj";
import { M_T_CHANGE_CELLS, M_T_CHANGE_LOADING, M_T_CHANGE_ERROR, M_T_SET_VIRTUES_LIST, M_T_SET_VIRTUES_EXPLANATION, M_T_SET_ITEMS, M_T_ADD_ITEM, M_T_REMOVE_ITEM, M_T_SET_PREV_ITEMS } from "./actions";

const initialState = {
	items: {},
	prevCells: [],
	cells: [],
	virtuesList: [],
	virtuesExplanation: [],
	itemsId: [],
	loading: true,
	error: null
}
const mainTableReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case M_T_SET_ITEMS: 
			return {
				...state,
				items: payload,
				cells: createArrM_T_Data(payload, 'cells_row'),
				virtuesList: createArrM_T_Data(payload, 'virtues_name'),
				virtuesExplanation: createArrM_T_Data(payload, 'virtues_explanation'),
				itemsId: Object.keys(payload)
			}
		case M_T_ADD_ITEM: 
			state.items[payload.key] = payload.body
			state.cells.push(payload.body.cells_row)
			state.virtuesList.push(payload.body.virtues_name)
			state.virtuesExplanation.push(payload.body.virtues_explanation)
			state.itemsId.push(payload.key)
			return state

		case M_T_REMOVE_ITEM:
			state.items = removeItemOfItemsObj(payload, state.itemsId, state.items)
			state.cells.splice(payload, 1)
			state.virtuesList.splice(payload, 1)
			state.virtuesExplanation.splice(payload, 1)
			state.itemsId.splice(payload, 1)
			return state

		case M_T_CHANGE_CELLS:
			return {
				...state,
				cells: payload
			}
		case M_T_CHANGE_LOADING: 
			return {
				...state,
				loading: payload,
				error: null
			}
		case M_T_CHANGE_ERROR:
			return {
				...state,
				loading: false,
				error: payload
			}
		case M_T_SET_VIRTUES_LIST: 
			return {
				...state,
				virtuesList: payload
		}
		case M_T_SET_VIRTUES_EXPLANATION: 
			return {
				...state,
				virtuesExplanation: payload
		}
		case M_T_SET_PREV_ITEMS:
			return {
				...state,
				prevCells: payload //createArrM_T_Data(payload, 'cells_row')
			}
		default:
			return state
		
	}
}

export default mainTableReducer