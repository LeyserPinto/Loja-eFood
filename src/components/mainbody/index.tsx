import { useSelector } from "react-redux"
import { Container } from "../../global/styles/main.styles"
import { Card } from "./card"
import { Bodywrapper } from "./style"
import { RootState } from "../../global/store"



export const Mainbody = () => {
    const restaurants = useSelector((state:RootState) => state.restaurantReducer.list)
    return (
        <Container maxWidth="900px">
            <Bodywrapper>
                {restaurants.map(row => (
                    <Card
                     key={row.id}
                     id={row.id}
                     nome={row.nome}
                     urlPortada={row.urlPortada}
                     categories={row.categories}
                     avaliacao={row.avaliacao}
                     descricao={row.descricao}
                     />
                ))}
                
            </Bodywrapper>
        </Container>
        
    )
}