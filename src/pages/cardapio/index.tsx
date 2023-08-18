import Footer from "../../components/footer"
import HeaderCardapio from "../../components/header/Cardapio"
import Cardapiobody from "../../components/mainbody/cardapiobody"
import { Container } from "../../global/styles/main.styles"

const Cardapio = () => {
    return (
        <Container>
            <HeaderCardapio />
            <Cardapiobody />
            <Footer />
        </Container>
    )
}
export default Cardapio