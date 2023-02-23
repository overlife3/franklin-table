import React from 'react'
import { weekData } from '../../data/tableData'
import HeadingCell from '../Cell/HeadingCell/HeadingCell'

export default function TheadTable() {
	return (
		<thead>
			<tr>
				{['', ...weekData].map(item => <HeadingCell text={item} key={item} className='week-cell'/>)}
			</tr>
		</thead>
	)
}
