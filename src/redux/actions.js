export const M_T_CHANGE_LOADING = "M_T_CHANGE_LOADING"
export const M_T_CHANGE_CELLS = "M_T_CHANGE_CELLS"
export const M_T_CHANGE_ERROR = "M_T_CHANGE_ERROR"
export const M_T_SET_VIRTUES_LIST = "M_T_SET_VIRTUES_LIST"
export const M_T_SET_VIRTUES_EXPLANATION = "M_T_SET_VIRTUES_EXPLANATION"
export const M_T_SET_ITEMS = "M_T_SET_ITEMS"
export const M_T_ADD_ITEM = "M_T_ADD_ITEM"
export const M_T_REMOVE_ITEM = "M_T_REMOVE_ITEM"
export const M_T_SET_PREV_ITEMS = "M_T_SET_PREV_ITEMS"
export const ROW_VIRTUES_CHANGE_VISIBILITY = "ROW_VIRTUES_CHANGE_VISIBILITY"
export const ROW_VIRTUES_CHANGE_WARNING = "ROW_VIRTUES_CHANGE_WARNING"
export const ROW_VIRTUES_CHANGE_CEELS_CHENGED_ROW = "ROW_VIRTUES_CHANGE_CEELS_CHENGED_ROW"


export function m_t_change_loading(isLoading) {
	return {
		type: M_T_CHANGE_LOADING,
		payload: isLoading
	}
}
 
export function m_t_change_cells(items) {
	return {
		type: M_T_CHANGE_CELLS,
		payload: items
	}
}

export function m_t_change_error(error) {
	return {
		type: M_T_CHANGE_ERROR,
		payload: error
	}
}

export function m_t_set_virtues_list(items) {
	return {
		type: M_T_SET_VIRTUES_LIST,
		payload: items
	}
}

export function m_t_set_virtues_explanation(items) {
	return {
		type: M_T_SET_VIRTUES_EXPLANATION,
		payload: items
	}
}

export function m_t_set_items(items) {
	return {
		type: M_T_SET_ITEMS,
		payload: items
	}
}

export function m_t_set_prev_items(items) {
	return {
		type: M_T_SET_PREV_ITEMS,
		payload: items
	}
}

export function m_t_add_item(item) {
	return {
		type: M_T_ADD_ITEM,
		payload: item
	}
}

export function m_t_remove_item(item) {
	return {
		type: M_T_REMOVE_ITEM,
		payload: item
	}
}

export function row_virtues_change_visibility(rowIndex) {
	return {
		type: ROW_VIRTUES_CHANGE_VISIBILITY,
		payload: rowIndex
	}
}

export function row_virtues_change_warning() {
	return {
		type: ROW_VIRTUES_CHANGE_WARNING,
	}
}

export function row_virtues_change_ceels_chenged_row(items) {
	return {
		type: ROW_VIRTUES_CHANGE_CEELS_CHENGED_ROW,
		payload: items
	}
}