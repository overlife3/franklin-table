import React from 'react'
import TbodyTable from '../TbodyTable/TbodyTable'
import TheadTable from '../TheadTable/TheadTable'
import cn from 'classnames'
import "./MainTable.css"
import { useSelector } from "react-redux"

export default function MainTable() {
	const {loading, error} = useSelector(state => state.mainTable)
	const classNamesTable = cn("table main-table", {loading}, {error})
	const classNamesTitle = cn('main-title', {loading})

	return (
		<>
			<h1 className={classNamesTitle}>Таблица франклина</h1>
			<table className={classNamesTable}>
				<TheadTable />
				<TbodyTable />
			</table>
		</>
	)
}
