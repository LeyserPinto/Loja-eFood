import { Container } from "../../../global/styles/main.styles"
import Pratocard from "../card/pratocard";
import * as S from './styles'

const Cardapiobody = () => {
    return (
        <Container maxWidth="1024px">
            <S.Bodywrapper>
                <Pratocard />
                <Pratocard />
                <Pratocard />
                <Pratocard />
                <Pratocard />
                <Pratocard />
            </S.Bodywrapper>
        </Container>
    )
}

export default Cardapiobody;