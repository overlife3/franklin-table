import React, {useEffect} from 'react'
import MainTable from '../MainTable/MainTable'
import { getData } from '../../utils/getData'
import Preloader from '../Preloader/Preloader'
import './Franklin.css'
import TableContoller from '../TableController/TableContoller'
import { useDispatch, useSelector } from "react-redux";
import { m_t_change_error, m_t_change_loading, m_t_set_items } from '../../redux/actions'
import ErrorCompnent from '../ErrorComponent/ErrorComponent'
import VirtuesExplanationComponent from '../VirtuesExplanationComponent/VirtuesExplanationComponent'
import ControllerVirtuesComponent from '../ControllerVirtuesComponent/ControllerVirtuesComponent'
import { createArrM_T_Data } from '../../utils/createArrM_T_Data'

export default function Franklin() {
	const dispatch = useDispatch()
	const {loading, error} = useSelector(state => state.mainTable)

	useEffect(() => {
		dispatch(m_t_change_loading(true))
		getData('test')
			.then(res => {
				localStorage.setItem('prevItems', JSON.stringify(createArrM_T_Data(res, 'cells_row')))
				dispatch(m_t_set_items(res))
				dispatch(m_t_change_loading(false))
			})
			.catch(err => {
				dispatch(m_t_change_error(err.message))
			})
	}, [])

	return (
		<div className='franklin'>
			{loading && <Preloader />}
			{error && <ErrorCompnent error={error} />}
			<MainTable />
			<TableContoller /> 
			<VirtuesExplanationComponent />
			<ControllerVirtuesComponent />
		</div>
	)
}
