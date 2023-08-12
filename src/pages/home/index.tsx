import { Mainbody } from "../../components/mainbody"
import Header from "../../components/header"
import { Container } from "../../global/styles/main.styles"

export const Home = () => {
    return (
        <Container>
            <Header />
            <Mainbody />
        </Container>
    )
}