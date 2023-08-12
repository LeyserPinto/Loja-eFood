import * as S from "./style"

export const Card = () => {
    return (
        <S.CardContainer>
            <S.HeadSection>
                <img src="https://images.pexels.com/photos/3475617/pexels-photo-3475617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </S.HeadSection>
            <S.BodySection>
                <S.Bodyheader>
                    <h3>Hioki Sushi</h3>
                    <div>
                        <h3>4.9</h3>
                    </div>
                </S.Bodyheader>
                <S.Bodydescription>
                    <p>
                        Peça já o melhor da culinária japonesa no 
                        conforto da sua casa! Sushis frescos, 
                        sashimis deliciosos e pratos quentes irresistíveis. 
                        Entrega rápida, embalagens cuidadosas e qualidade 
                        garantida. Experimente o Japão sem sair do lar 
                        com nosso delivery!
                    </p>
                </S.Bodydescription>
                <S.Bodybuttons>
                    <button>Saiba Mais</button>
                </S.Bodybuttons>
            </S.BodySection>
        </S.CardContainer>
    )
}