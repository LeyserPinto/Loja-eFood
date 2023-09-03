import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EnumAcoes } from "../../global/utils/Enum";
import { Prato } from "../../global/utils/Models/prato";

type ManagerProps = {
    isModelOpen: boolean,
    acaoCodigo: number,
    prato?: Prato
}

const initialState = {
    isModalOpen: false,
    acaoCodigo: EnumAcoes.ACAO_CONSULTA,
    prato: {
        id: 0,
        nome: '',
        descricao: '',
        picture: '',
        price: 0.00
    }
}

const ModalSlice = createSlice({
    name: 'ModalManager',
    initialState, 
    reducers: {
        visualizarPrato: (state, action: PayloadAction<Prato>) => {
            state.isModalOpen = !state.isModalOpen
            if(action.payload) {
                state.acaoCodigo    = EnumAcoes.ACAO_CHECKIN_PRATO
                state.prato         = action.payload

            }
        },
        OpenModal: (state, action: PayloadAction<number>)  => {
            state.isModalOpen = !state.isModalOpen
            if(action?.payload) {
                state.acaoCodigo = action.payload
            }
        }
    }
})

export const { OpenModal, visualizarPrato } = ModalSlice.actions
export default ModalSlice