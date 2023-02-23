import React from 'react'
import './ControllerIsChanged.css'
import cn from 'classnames'
import { useDispatch, useSelector } from "react-redux"
import sendData from '../../utils/sendData'
import {m_t_change_loading, m_t_change_error, row_virtues_change_visibility, m_t_change_cells} from "../../redux/actions"

export default function ControllerIsChanged({ visible, rowIndex }) {
	const classNames = cn('controller-is-changed', {visible})
	const {cells, itemsId} = useSelector(state => state.mainTable)
	const dispatch = useDispatch()

	const handleSave = () => {
		dispatch(m_t_change_loading(true))
		dispatch(row_virtues_change_visibility(undefined))
		sendData("test/" + itemsId[rowIndex] + "/cells_row", cells[rowIndex])
			.then(res => {
				localStorage.setItem('prevItems', JSON.stringify(cells))
				dispatch(m_t_change_loading(false))
			})
			.catch(err => {
				dispatch(m_t_change_error(err))
			})
	}

	const handleCancel = () => {
		const prevCells = JSON.parse(localStorage.getItem('prevItems'))
		dispatch(row_virtues_change_visibility(undefined))
		dispatch(m_t_change_cells(prevCells))
	}

	return (
		<td>
			<div className={classNames}>
				<div className='btn' onClick={handleSave}>Сохранить</div>
				<div className='btn' onClick={handleCancel}>Отменить</div>
			</div>
		</td>
	)
}
