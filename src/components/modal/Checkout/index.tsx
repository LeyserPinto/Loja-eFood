import { useSelector } from 'react-redux'
import ModalEntrega from './entrega'
import ModalPagamento from './pagamento'
import { RootState } from '../../../store'
import { EnumAcoes } from '../../../global/utils/Enum'
import * as S from './style'

const ModalCheckout = () => {
    const {acaoCodigo} =  useSelector((state: RootState) => state.modalManager)
    
    return (
        <S.ModalRight>
            
            <form action="post">
                {acaoCodigo === EnumAcoes.ACAO_CHECKOUT && (<ModalEntrega />)}

                {acaoCodigo === EnumAcoes.ACAO_PAYMENT && (<ModalPagamento />)}
            </form>
            
            
        </S.ModalRight>
    )
}

export default ModalCheckout