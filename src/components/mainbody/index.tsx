import { Container } from "../../global/styles/main.styles"
import { Card } from "./card"
import { Bodywrapper } from "./style"

export const Mainbody = () => {
    return (
        <Container maxWidth="900px">
            <Bodywrapper>
                <Card/>
                <Card/>
                <Card/>
            </Bodywrapper>
        </Container>
        
    )
}