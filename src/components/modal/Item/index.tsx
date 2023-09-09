import * as S from './style';
import * as Icon from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { OpenModal } from '../../../store/slices/ModelManager';
import { RootState } from '../../../store';
import { EnumAcoes } from '../../../global/utils/Enum';

import {CloseModalButton} from '../style'

export const ModalItem = () => {
    const dispatch = useDispatch()
    const {prato} = useSelector((state: RootState) => state.modalManager)
    
    return (
        <S.ModalCenter>
            <S.ModalPrato>
                <CloseModalButton onClick={() => dispatch(OpenModal(EnumAcoes.ACAO_CONSULTA))}>
                    <Icon.AiOutlineClose />
                </CloseModalButton>   
                <S.ModalWrapper>
                    <img src={prato?.picture}/>
                    <S.WrapperContent>
                        <S.Texts>
                            <h4>{prato?.nome}</h4>
                            <section>
                                <p>{prato?.descricao}</p>
                                <p>Serve de 2 a 3 pessoas</p>
                            </section>
                        </S.Texts>                                    
                        <button>Adicionar ao Carrinho - R$ {prato?.price}</button>
                    </S.WrapperContent>
                </S.ModalWrapper>                         
            </S.ModalPrato>
        </S.ModalCenter>
    )
}