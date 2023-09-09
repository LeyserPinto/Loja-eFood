import {ModalContainer} from '../../global/styles/main.styles'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { EnumAcoes } from '../../global/utils/Enum';
import { ModalItem } from './Item';
import { ModalSections } from './style';

const Modal = () => {
    const {isModalOpen, acaoCodigo} = useSelector((state: RootState) => state.modalManager)
    return (
        <ModalContainer isvisible={isModalOpen}>
            <ModalSections>
                { acaoCodigo === EnumAcoes.ACAO_CHECKIN_PRATO && (
                    <ModalItem />
                )}
            </ModalSections>            
        </ModalContainer>
    )
}

export default Modal;