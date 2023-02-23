import React from 'react'
import { useSelector } from 'react-redux'
import "./ControllerVirtuesComponent.css"
import cn from 'classnames'
import RemoveVirtuesComoponent from '../RemoveVirtuesComponent/RemoveVirtuesComoponent'
import AddVirtuesComponent from '../AddVirtuesComponent/AddVirtuesComponent'

export default function ControllerVirtuesComponent() {
	const {loading} = useSelector(state => state.mainTable)
	const classNames = cn('controller-virtues', {loading})

	return (
		<div className={classNames}>
			<AddVirtuesComponent />
			<RemoveVirtuesComoponent />
		</div>
	)
}
