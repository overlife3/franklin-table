import React from 'react'
import cn from 'classnames'
import './HeadingCell.css'

export default function HeadingCell({text, className}) {
	const classNames = cn('cell', 'heading-cell', className) 
	return (
		<th className={classNames}>{text}</th>
	)
}
