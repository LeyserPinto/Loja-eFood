import { createSlice } from '@reduxjs/toolkit'
// import { PayloadAction } from '@reduxjs/toolkit'

import { Categories } from '../../utils/Enum/EnumCategory'
import { Restaurant } from '../../utils/Models/restaurants'



type Restaurants = {
    list: Restaurant[]
}



const initialState: Restaurants = {
    list: [
    {
        id: 12082023234501,
        name: 'Hioki Sushi',
        descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        avaliacao: 4.9,
        categories: Categories.JAPONESA,
        urlPortada: 'https://www.djapa.com.br/wp-content/uploads/2020/05/culinaria-japonesa.jpg'
    },
    {
        id: 12082023234502,
        name: 'La Dolce Vita Trattoria',
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        avaliacao: 4.6,
        categories: Categories.ITALIANA,
        urlPortada: 'https://www.linguaitaliana.com.br/anexos/imagens/1.png'
    },
    {
        id: 12082023234503,
        name: 'Restaurante Concórdia',
        descricao: 'O Restaurante Concórdia tem a oferecer um completo, sofisticado e personalizado serviço de buffet, garantindo ao seu casamento todo sabor e requinte de um evento de sucesso. Com uma moderna estrutura, serviços de qualidade, atendimento diferenciado e fácil acesso, é o espaço ideal para celebrar sua união.',
        avaliacao: 4.5,
        categories: Categories.ESPANHOLA,
        urlPortada: 'https://www.segurospromo.com.br/blog/wp-content/uploads/2020/07/comidas-tipicas-da-espanha-paella.jpg'
    }
  ]
}

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
   
  },
})



export default restaurantsSlice.reducer