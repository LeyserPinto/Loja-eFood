import * as Icon from 'react-icons/ai'
import {ModalContainer} from '../../global/styles/main.styles'
import { ModalHead, ModalSections } from './style';

const Modal = () => {
    

    return (
        <ModalContainer>
            <ModalSections>
                <ModalHead>
                    <Icon.AiOutlineClose />
                </ModalHead>
            </ModalSections>
        </ModalContainer>
    )
}

export default Modal;