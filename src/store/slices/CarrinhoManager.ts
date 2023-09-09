import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Prato } from "../../global/utils/Models/prato";

type PratoState ={
    carrinho: Prato[]
}

const initialState: PratoState = {
    carrinho: []   
}

const CarrinhoSlice = createSlice({
    name: 'Carrinho',
    initialState,
    reducers: {
        add: (state, actions: PayloadAction<Prato>) => {
            const exists = state.carrinho.findIndex(row => ((row.nome === actions.payload.nome) && (row.id == actions.payload.id)))
            
            if(exists && exists !== undefined) {
                alert('Produto já adicionado ao Carrinho');
            }

            state.carrinho.push(actions.payload)

        },
        remove: () => {

        }
    }
})



export const { add, remove } = CarrinhoSlice.actions
export default CarrinhoSlice