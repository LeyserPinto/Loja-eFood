import React from 'react'
import { useDispatch } from 'react-redux'
import InputMask from 'react-input-mask'
import * as S from './style'
import { OpenModal } from '../../../../store/slices/ModelManager'
import { EnumAcoes } from '../../../../global/utils/Enum'

const ModalEntrega = () => {
    const dispatch = useDispatch()

    const nextStep = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(OpenModal(EnumAcoes.ACAO_PAYMENT))
    }

    return (
        <S.EntregaContainer>
            <h2>Entrega</h2>

            <S.Row>
                <S.InputGroup>
                    <label>Quem irá receber</label>
                    <input type='text' placeholder='João Paulo de Souza'/>
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.InputGroup>
                    <label>Endereço</label>
                    <input type='text'/>    
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.InputGroup>
                    <label>Cidade</label>
                    <input type='text'/>
                </S.InputGroup>
            </S.Row>

            <S.Row>
                <S.InputGroup propswidth={155}>
                        <label>CEP</label>
                        <InputMask mask="99999-999" maskChar="0"/>
                </S.InputGroup>
                <S.InputGroup propswidth={155}>
                        <label>Número</label>
                        <input type='number'/>
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.InputGroup>
                    <label>Complemento (opcional)</label>
                    <input type='text'/>
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.BotaoGroup>
                    <button onClick={e => nextStep(e)}>Continuar com o pagamento</button>
                    <button onClick={() => dispatch(OpenModal(EnumAcoes.ACAO_CHECKOUT_ORDER))}>Voltar para o carrinho</button>
                </S.BotaoGroup>
            </S.Row>
    </S.EntregaContainer>
    )
}

export default ModalEntrega