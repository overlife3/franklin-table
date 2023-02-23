import { ROW_VIRTUES_CHANGE_CEELS_CHENGED_ROW, ROW_VIRTUES_CHANGE_VISIBILITY, ROW_VIRTUES_CHANGE_WARNING } from "./actions";

const initialState = {
	visibleRowIndex: undefined, // здесь будет хранится индекс строки с видимым контроллером
	warning: false,
	cellsChengedRow: []
}

const rowVirtuesReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case ROW_VIRTUES_CHANGE_VISIBILITY: 
			return {
				...state,
				visibleRowIndex: payload,
				warning: false
			}
		case ROW_VIRTUES_CHANGE_WARNING: 
			return {
				...state,
				warning: true
			}
		case ROW_VIRTUES_CHANGE_CEELS_CHENGED_ROW: 
			return {
				...state,
				cellsChengedRow: payload
			}
		default:
			return state;
	}
}

export default rowVirtuesReducer