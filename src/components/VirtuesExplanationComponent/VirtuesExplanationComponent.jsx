import React from 'react'
import { useSelector } from 'react-redux'
import './VirtuesExplanationComponent.css'

export default function VirtuesExplanationComponent() {
	const {virtuesList, virtuesExplanation, itemsId} = useSelector(state => state.mainTable)
	return (
		<div className='virtues-explanation'>
			{
				virtuesList.map((item, index) => {
					return <p key={itemsId[index]}>
						<span className='virtues-title'>{item + ": "}</span> {virtuesExplanation[index]}
					</p>
				})
			}
		</div>
	)
}
