import * as S from "./styles"

const Pratocard = () => {
    return (
        <S.Cardcontainer>
            <S.HeadSection>
                <img src="https://receitinhas.com.br/wp-content/uploads/2018/08/Sushi-filadelfia-uramaki-O-Djapa.jpg" alt="uramaki" />
            </S.HeadSection>
            <S.BodySection>
                <h3>Uramaki</h3>
                <p>Refere-se a algo que está de cabeça para baixo. Assim são conhecidos os makis onde o arroz aparece por fora e seus ingredientes são envolvidos dentro de um pedaço de alga seca (nori).</p>
                <button>Adicionar ao carrinho</button>
            </S.BodySection>
        </S.Cardcontainer>
    )
}

export default Pratocard