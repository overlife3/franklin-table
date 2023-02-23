import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { m_t_change_error, m_t_change_loading, m_t_remove_item } from '../../redux/actions'
import removeData from '../../utils/removeData'
import './RemoveVirtuesComoponent.css'


export default function RemoveVirtuesComoponent() {
	const [selectVal, setSelectVal] = useState('#default')
	const {virtuesList, itemsId} = useSelector(state => state.mainTable)
	const dispatch = useDispatch()

	const handleSelect = (e) => {
		setSelectVal(e.target.value)
	}

	const handleRemove = () => {
		dispatch(m_t_change_loading(true))
		removeData('test/' + itemsId[selectVal])
			.then(res => {
					dispatch(m_t_remove_item(selectVal))
					dispatch(m_t_change_loading(false))
				})
			.catch(err => {
				dispatch(m_t_change_error(err))
			})	
	}

	return (
		<div className='remove-virtues'>
			<h2 className="title">Удалить добродетель</h2>
			<div className="remove">
				<p className='explanation-text'>Выберите добродетель</p>
				<select value={selectVal} onChange={handleSelect}>
					<option value="#default">Список</option>
					{virtuesList.map((item, index) => <option value={index} key={itemsId[index]}>{item}</option>)}
				</select>
				<button className='btn' onClick={handleRemove} disabled={selectVal === '#default'}>Удалить</button>
			</div>
		</div>
	)
}
