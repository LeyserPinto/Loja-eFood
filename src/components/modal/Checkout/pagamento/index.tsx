import InputMask from "react-input-mask";
import * as S from "./style"
import { useDispatch } from "react-redux";
import { OpenModal } from "../../../../store/slices/ModelManager";
import { EnumAcoes } from "../../../../global/utils/Enum";

const ModalPagamento = () => {

    const dispatch = useDispatch()

    return (
        <S.PagamentoContainer>
            <h2>Pagamento - Valor a pagar R$ <span>000,00</span></h2>
            <S.Row>
                <S.InputGroup>
                    <label>Nome no cartão</label>
                    <input type='text' placeholder='João Paulo de Souza'/>
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.InputGroup>
                    <label>Numero do cartão</label>
                    <InputMask mask="9999 9999 9999 9999" maskChar="0"/>
                </S.InputGroup>
                <S.InputGroup propswidth={87}>
                    <label>CVV</label>
                    <InputMask mask="999" maskChar="0"/>
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.InputGroup>
                    <label>Mês de Vencimento</label>
                    <InputMask mask="99" maskChar="0"/>
                </S.InputGroup>
                <S.InputGroup>
                    <label>Ano de vencimento</label>
                    <InputMask mask="9999" maskChar="0"/>
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.BotaoGroup>
                    <button>Finalizar pagamento</button>
                    <button onClick={() => dispatch(OpenModal(EnumAcoes.ACAO_CHECKOUT))}>Voltar para a edição de endereço</button>
                </S.BotaoGroup>
            </S.Row>
        </S.PagamentoContainer>
    )
}

export default ModalPagamento;