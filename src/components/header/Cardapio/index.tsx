import Logo from '../../../assets/img/logo.svg'
import { Container } from '../../../global/styles/main.styles'
import { Restaurant } from '../../../global/utils/Models/restaurants'
import * as S from './styles'

type RestaurantProps = {
    restaurante?: Restaurant[]
}

const HeaderCardapio = ({restaurante}:RestaurantProps) => {
    return (
        <Container>
            <S.Header>
                <S.HeadWrapper>
                    <S.RestaurantLink to='/'>Restaurantes</S.RestaurantLink>
                    <img src={Logo}/>

                    <S.CarrinhoSection>
                        <p>
                            <span>0</span> produto&#40;s&#41; no carrinho
                        </p>
                    </S.CarrinhoSection>
                </S.HeadWrapper>
            </S.Header>
            {
                restaurante?.map((row:Restaurant) => (
            <S.HeadHero key={row.nome} restaurantbg={row.urlPortada}>
                <S.HeroWrapper>

                    <p>{row.categories}</p>
                    <h3>{row.nome}</h3>
                </S.HeroWrapper>
            </S.HeadHero>
                ))
            }
            
        </Container>
    )
}

export default HeaderCardapio;