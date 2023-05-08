import {ModalTypes} from './actionTypes'

import {ModalActions, ModalState} from './types'

const initialState: ModalState = {
	show: false,
	action: '',
	modal: '',
	title: '',
	isButtonVisible: false,
	description: '',
}

const reducers = (state = initialState, action: ModalActions) => {
	switch (action.type) {
		case ModalTypes.SHOW_MODAL:
			const {
				modal = '',
				action: handler = '',
				title = '',
				isButtonVisible = false,
				description = '',
				} =  action.payload
			return {

				...state,
				show: true,
				modal,
				action: handler,
				title,
				isButtonVisible,
				description,
			}
		case ModalTypes.CLOSE_MODAL:
			return {
				...state,
				show: false,
				modal: '',
			}
		default:
			return {
				...state,
			}
	}
}

export default reducers

