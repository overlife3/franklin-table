import React from 'react'
import ControllerIsChanged from '../ControllerIsChanged/ControllerIsChanged'
import "./TableContoller.css"
import { useSelector } from "react-redux"
import cn from 'classnames'
export default function TableContoller() {
	const {visibleRowIndex, warning} = useSelector(state => state.rowVirtues)
	const {virtuesList} = useSelector(state => state.mainTable)
	return (
		<table className="table-controller">
			<thead>
				<tr className='heading-cell'><th></th></tr>
			</thead>
			<tbody>
				{virtuesList.map((item, index) =>			
					<tr className={cn('row-controller', {warning: index === visibleRowIndex && warning})} key={item + 'table-controller'}>
						<ControllerIsChanged rowIndex={index} visible={visibleRowIndex === index} />
					</tr>
				)}
			</tbody>
		</table>
	)
}
