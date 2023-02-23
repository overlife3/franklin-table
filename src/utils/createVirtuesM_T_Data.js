import { nanoid } from "nanoid"

export function createVirtuesM_T_Data(virtuesName, virtuesExplanation) {
	const cellsRow = []

	for (let i = 0; i < 7; i++) {
		cellsRow.push({
			id: nanoid(),
			completed: false
		})
	}
	return {
		cells_row: cellsRow,
		virtues_name: virtuesName,
		virtues_explanation: virtuesExplanation
	}
}