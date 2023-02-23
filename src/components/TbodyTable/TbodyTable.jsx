import React from 'react'
import HeadingCell from '../Cell/HeadingCell/HeadingCell'
import DayCell from '../Cell/DayCell/DayCell'
import "./TbodyTable.css"
import { useSelector, useDispatch } from "react-redux"
import { m_t_change_cells, row_virtues_change_visibility, row_virtues_change_warning } from '../../redux/actions' 
import { changeStateCell } from '../../utils/changeStateCell'

export default function TbodyTable() {
	const {cells : cellsArr, virtuesList: virtuesData, itemsId} = useSelector(state => state.mainTable)
	const {visibleRowIndex} = useSelector(state => state.rowVirtues)

	const dispatch = useDispatch()

	const handleClick = (id, rowIndex) => {
		if (visibleRowIndex === undefined || rowIndex === visibleRowIndex) {
			dispatch(row_virtues_change_visibility(rowIndex))
			dispatch(m_t_change_cells(changeStateCell(cellsArr, id)))
		}
		if (visibleRowIndex !== undefined && rowIndex !== visibleRowIndex) { 
			dispatch(row_virtues_change_warning())
		}
	}

	return (
		<tbody>
			{virtuesData.map((item, index) => 
				<tr key={itemsId[index]} className="day-row"> 
					<HeadingCell text={item} className='virtues-cell'/>   
					{cellsArr[index]?.map(item => <DayCell onClick={handleClick} rowIndex={index} key={item.id} item={item}/>)}  
				</tr>
			)}
		</tbody>
	)
}

/* 
	сделать новую таблицу для контроллера, у которой будут такие же стили как и у основной таблицы
	эта новая таблица будет прилегать к правой чатси страницы 
	таким образом, чтобы кнопки контроллеров соответсвовали каждой строке. 
	функции для изменнеия состояния будут находится в контексте TableContext
	откуда я их буду брать
*/
