import {createGlobalStyle, styled} from "styled-components";
import { colors, fonts } from "./main.vars";
import { Link } from "react-router-dom";


export const GlobalStyle = createGlobalStyle`
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    background-color: ${colors.background.primary};
  }
`

type ContainerProps = {
  maxWidth?: string
}
export const Container = styled.div<ContainerProps>`
    max-width: ${(props) => props.maxWidth || '1366px'};
    margin: 0 auto;
`
export const Wrapper = styled.div`
    height: 300px;
    background-color: ${colors.background.secondary};
`

export const WrapperFlexCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const ButtonLink = styled(Link)`
    padding: 4px 6px;
    background: ${colors.background.quaternary};
    color: ${colors.fonts.secondary};
    font-weight: 700;
    border: none;
    font-size: ${fonts.small};
    cursor: pointer;
    text-decoration: none;
`
