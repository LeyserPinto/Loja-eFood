import { styled } from "styled-components";
import { colors, fonts } from "../../global/styles/main.vars";


export const ModalSections = styled.section`
    width: 80%;
    height: 100%;
    margin: 0 auto;
`

export const ModalHead = styled.div`
    padding: 1em;
    float: right;
    display: flex;
    width: 15%;
    height: 80px;
    justify-content: flex-end;
    clear: both;

    
    & svg {
        font-size: ${fonts.big};
        color: ${colors.fonts.secondary};
        cursor: pointer;
    }
`