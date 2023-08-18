import * as Fa from 'react-icons/fa'
import * as S from "./style"
import type { Restaurant } from '../../../global/features/utils/Models/restaurants'


export const Card = ({nome, avaliacao, descricao, urlPortada, categories, id}: Restaurant) => {
    return (
        <S.CardContainer>
            <S.HeadSection>
                <img src={urlPortada} alt={nome} />
                <S.HeadTagSection>
                    {categories.map(row => (
                        <span key={`${id}-tag`}>{row}</span>
                    ))}
                </S.HeadTagSection>
            </S.HeadSection>
            <S.BodySection>
                <S.Bodyheader>
                    <h3>{nome}</h3>
                    <div>
                        <h3>{avaliacao}</h3>
                        <Fa.FaStar />
                    </div>
                </S.Bodyheader>
                <S.Bodydescription>
                    <p>{descricao}</p>
                </S.Bodydescription>
                <S.Bodybuttons>
                    <S.Bodybutton to="/cardapio">Ver Cardapio</S.Bodybutton>
                </S.Bodybuttons>
            </S.BodySection>
        </S.CardContainer>
    )
}