import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { m_t_change_loading, m_t_change_error, m_t_add_item } from '../../redux/actions'
import { pushData } from '../../utils/pushData'
import { createVirtuesM_T_Data } from '../../utils/createVirtuesM_T_Data'
import './AddVirtuesComponent.css'

export default function AddVirtuesComponent() {
	const [inputVal, setInputVal] = useState('')
	const [textAreaVal, setTextAreaVal] = useState('')
	const dispatch = useDispatch()

	const handleInput = (e) => {
		setInputVal(e.target.value)
	}

	const handleTextArea = (e) => {
		setTextAreaVal(e.target.value)
	}

	const handleClick = () => {
		dispatch(m_t_change_loading(true))
		const newVirtues = createVirtuesM_T_Data(inputVal, textAreaVal)
		pushData("test", newVirtues)
		.then(newPostRef => {
				dispatch(m_t_add_item({
					key: newPostRef.key,
					body: newVirtues
				}))
				dispatch(m_t_change_loading(false))
			})
			.catch(err => {
				dispatch(m_t_change_error(err))
			})
	}

	return (
		<div className='add-virtues'>
			<h2 className="title">Добавить добродетель</h2>
			<input type="text" onChange={handleInput} value={inputVal} placeholder='Название добродетели'/>
			<textarea cols="30" rows="10" onChange={handleTextArea} value={textAreaVal} placeholder='Описание добродетели'></textarea>
			<button className='btn' onClick={handleClick} disabled={inputVal === '' || textAreaVal === ''}>Добавить</button>
		</div>
	)
}
