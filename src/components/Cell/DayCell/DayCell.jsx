import React from 'react'
import cn from 'classnames'
import './DayCell.css'
export default function DayCell({item, onClick, rowIndex}) {
	const classNames = cn('cell','day-cell', {completed: item.completed}) 

	return (
		<td className={classNames} onClick={() => onClick(item.id, rowIndex)}>
			{item.completed && 
				<div className='container'>
					<span className="circle"></span>
				</div>
			}
		</td>
	)
}
