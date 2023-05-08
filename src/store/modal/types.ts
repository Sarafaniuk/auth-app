import { ModalTypes } from './actionTypes'
import {ModalsTypes} from '../../components/Modals/modalTypes'

export interface ModalState {
	show: boolean
	modal: ModalsTypes | string
	action?: string
	title?: string,
	isButtonVisible?: boolean,
	description?: string,
}

export interface ShowModalPayload {
	modal: ModalsTypes | string
	action?: string
	title?: string,
	isButtonVisible?: boolean,
	description?: string,
}
export type ShowModal = {
	type: typeof ModalTypes.SHOW_MODAL
	payload: ShowModalPayload
}

export type CloseModal = {
	type: typeof ModalTypes.CLOSE_MODAL
}

export type ModalActions = ShowModal | CloseModal
