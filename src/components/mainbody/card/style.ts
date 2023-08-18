import { styled } from "styled-components";
import { colors, fonts } from "../../../global/styles/main.vars";
import { ButtonLink } from "../../../global/styles/main.styles";

export const CardContainer = styled.div`
    display: grid;
    grid-template-rows: auto 190px;
    border: thin solid ${colors.fonts.primary};
    overflow: hidden;
`

export const HeadSection = styled.div`
    position: relative;
    overflow: hidden;
    & img {
        width: 100%;
        object-fit: contain;
        object-position: 0px -75px;
    }
`

export const HeadTagSection = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    flex-wrap:wrap;
    

    & span {
        margin: 5px;
        padding: 4px 6px;
        background-color: ${colors.background.quaternary};
        font-size: ${fonts.tiny};
        color: ${colors.fonts.secondary};
        font-weight: 700;
        text-align: center;
    }
`

export const BodySection = styled.div`    
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Bodyheader = styled.section`
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${colors.fonts.primary};

    & div {
        display: flex;

        & svg {
            margin-left: 5px;
            width: 20.999698638916016px;
            height: 20px;
            fill: #FFB930;
        }
    }
`
export const Bodydescription = styled.section`
    font-size: ${fonts.small};
    color: ${colors.fonts.primary};
`

export const Bodybuttons = styled.section`
    margin-top: 1em;
    
`

export const Bodybutton = styled(ButtonLink)``