// @ts-nocheck
import React from 'react'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {ModalsTypes} from './modalTypes'
import ConfirmActionModal from './Confirm/ConfirmActionModal'
import SuccessModal from './Success/SuccessModal'

const Modals: React.FC = () => {
	const { modal, show, action, title, isButtonVisible, description } = useTypedSelector(({ modal }) => modal)

	const modals: { [key in ModalsTypes]: JSX.Element } = {
		SUCCESS_MODAL: <SuccessModal {...{show, action, title, isButtonVisible }} />,
		CONFIRM_ACTION_MODAL: <ConfirmActionModal {...{ show, title,action, description }} />,
	}

	return <>{modals[modal]}</>
}

export default Modals
