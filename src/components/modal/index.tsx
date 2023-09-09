import {ModalContainer} from '../../global/styles/main.styles'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { EnumAcoes } from '../../global/utils/Enum';
import { ModalItem } from './Item';
import { ModalSections } from './style';
import ModalCarrinho from './Carrinho';
import { OpenModal } from '../../store/slices/ModelManager';

const Modal = () => {
    const dispatch = useDispatch()
    const {isModalOpen, acaoCodigo} = useSelector((state: RootState) => state.modalManager)
    return (
        <ModalContainer isvisible={isModalOpen}>
            <ModalSections onClick={() => dispatch(OpenModal(EnumAcoes.ACAO_CONSULTA))}>
                
                {acaoCodigo === EnumAcoes.ACAO_CHECKIN_PRATO && (
                    <ModalItem />
                )}

                {acaoCodigo === EnumAcoes.ACAO_CHECKOUT_ORDER && (
                    <ModalCarrinho />
                )}

            </ModalSections>            
        </ModalContainer>
    )
}

export default Modal;