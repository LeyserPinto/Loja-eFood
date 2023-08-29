import { styled } from "styled-components";
import { Wrapper, WrapperFlexCenter } from "../../global/styles/main.styles";
import { colors, fonts } from "../../global/styles/main.vars";

export const FooterWrapper = styled(Wrapper) `
    height: 250px;
    position: relative;
`

export const FooterFlex = styled(WrapperFlexCenter) `
    height: 80%;    
    justify-content: space-between;
    & img{
        width: 125px;
    }

    & p {
        width: 70%;
        text-align: center;
        font-size: ${fonts.tiny};
        font-weight: 400;
        color: ${colors.fonts.primary};
    }
`

export const FooterIcons = styled.div`
    
    & a {
        text-decoration: none;
        
        padding: 6px;
        background-color: ${colors.background.quaternary};
        color: ${colors.fonts.secondary};
        margin: 0 8px;
        border-radius: 50%;
        
        line-height: 36px;
        display: inline-flex;
    }
`