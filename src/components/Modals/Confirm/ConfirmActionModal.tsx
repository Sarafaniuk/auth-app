import React, {FC, useState} from 'react'
import {Button, Modal, Typography} from 'antd'
import './ConfirmActionModal.less'
import CloseCircleIcon from '../../icons/CloseCircleIcon'
import {useActions} from '../../../hooks/useActions'
import {useHistory} from 'react-router-dom'
const { Text } = Typography;


interface Props {
    action: string
    show: boolean,
    title: string,
    description: string,
}
const ConfirmActionModal: FC<Props> = ({
                                           action= '',
                                           show= false,
                                           title = '',
                                           description = '',
}) => {

    const { closeModal } = useActions()
    const history = useHistory()

    const handleOk = () => {
        switch (action) {
            case 'logout':
                return logOut()
                break;
        }
    }

    const logOut = () => {
      localStorage.removeItem('token')
      history.go(0)
    }

    return (
            <Modal
                centered
                maskClosable = {false}
                open={show}
                onCancel={closeModal}
                footer={null}>
                <div className='wrapper'>
                    <CloseCircleIcon/>

                    <Typography.Title color="#fff" level={4} >{title}</Typography.Title>
                    <Text>{description}</Text>

                    <Button
                        className="modal_form__submit"
                        type="primary"
                        onClick={handleOk}
                    >
                        Продолжить
                    </Button>

                    <Button
                        className="modal_form__submit"
                        type="primary"
                        onClick={closeModal}
                    >
                        Выйти
                    </Button>
                </div>
            </Modal>
    );
};

export default ConfirmActionModal;
