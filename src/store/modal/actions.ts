import {
	CloseModal,
	ShowModal,
	ShowModalPayload,
} from './types'
import {ModalTypes} from './actionTypes'

export const showModal = (payload: ShowModalPayload): ShowModal => ({
	type: ModalTypes.SHOW_MODAL,
	payload,
})

export const closeModal = (): CloseModal => ({
	type: ModalTypes.CLOSE_MODAL,
})
