import { legacy_createStore, combineReducers, compose } from "redux"
import mainTableReducer from "./mainTableReducer";
import rowVirtuesReducer from "./rowVirturesReducer";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = () => {
	return legacy_createStore(
		combineReducers({
			mainTable: mainTableReducer,
			rowVirtues: rowVirtuesReducer 
		}),
		undefined,
		compose(ReactReduxDevTools)
	)
}

export default configureStore