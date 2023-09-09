import * as Icon from 'react-icons/ai'
import {ModalContainer} from '../../global/styles/main.styles'
import { ModalPrato, CloseModalButton, ModalSections, ModalCenter, ModalWrapper, WrapperContent, Texts } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { OpenModal } from '../../store/slices/ModelManager';
import { RootState } from '../../store';
import { EnumAcoes } from '../../global/utils/Enum';

const Modal = () => {
    const dispatch = useDispatch()
    const {isModalOpen, acaoCodigo, prato} = useSelector((state: RootState) => state.modalManager)
    return (
        <ModalContainer isVisible={isModalOpen}>
            <ModalSections>
                { acaoCodigo === EnumAcoes.ACAO_CHECKIN_PRATO && (
                    <ModalCenter>
                        <ModalPrato>
                            <CloseModalButton onClick={() => dispatch(OpenModal(EnumAcoes.ACAO_CONSULTA))}>
                                <Icon.AiOutlineClose />
                            </CloseModalButton>   
                            <ModalWrapper>
                                <img src={prato?.picture}/>
                                <WrapperContent>
                                    <Texts>
                                        <h4>{prato?.nome}</h4>
                                        <section>
                                            <p>{prato?.descricao}</p>
                                            <p>Serve de 3 a 3 pessoas</p>
                                        </section>
                                    </Texts>                                    
                                    <button>Adicionar ao Carrinho - R$ {prato?.price}</button>
                                </WrapperContent>
                            </ModalWrapper>                         
                        </ModalPrato>
                    </ModalCenter>
                )}
                
            </ModalSections>
        </ModalContainer>
    )
}

export default Modal;