import Logo from '../../../assets/img/logo.svg'
import { Container } from '../../../global/styles/main.styles'
import * as S from './styles'

const HeaderCardapio = () => {
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
            <S.HeadHero restaurantbg='https://www.djapa.com.br/wp-content/uploads/2020/05/culinaria-japonesa.jpg'>
                <S.HeroWrapper>
                    <p>Lorem Ipsum</p>
                    <h3>Italiana</h3>
                </S.HeroWrapper>
            </S.HeadHero>
        </Container>
    )
}

export default HeaderCardapio;