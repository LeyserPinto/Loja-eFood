import { styled } from "styled-components";
import { colors, fonts } from "../../../global/styles/main.vars";

export const CardContainer = styled.div`
    display: grid;
    grid-template-rows: auto 190px;
`

export const HeadSection = styled.div`
    overflow: hidden;
    & img {
        width: 100%;
        object-fit: contain;
        object-position: 0px -75px;
    }
`

export const BodySection = styled.div`    
    padding: 8px;
    border: thin solid ${colors.fonts.primary};
    border-top: none;
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
`
export const Bodydescription = styled.section`
    font-size: ${fonts.small};
    color: ${colors.fonts.primary};
`

export const Bodybuttons = styled.section`
    margin-top: 1em;
    & button {
        padding: 4px 6px;
        background: ${colors.background.quaternary};
        color: ${colors.fonts.secondary};
        font-weight: 700;
        border: none;
    }

`