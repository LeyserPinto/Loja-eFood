import { styled } from "styled-components";
import { colors, fonts } from "../../../../global/styles/main.vars";


export const Cardcontainer = styled.div`
    background: #E66767;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const HeadSection = styled.div`
    height: 150px;
    overflow: hidden;
    & img {
        width: 100%;
        object-position: center -35px;
    }
`

export const BodySection = styled.div`
    font-size: ${fonts.small};
    color: ${colors.fonts.secondary};
    padding-top: 5px;

    & p {
        font-size: ${fonts.small};
        margin: 5px 0px;
    }

    & button {
        padding: 2px;
        width: 100%;
        border: none;
        background: ${colors.background.secondary};
        font-weight: 500;
        color: ${colors.fonts.primary};
        cursor: pointer;
    }

`