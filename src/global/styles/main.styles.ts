import {createGlobalStyle, styled} from "styled-components";
import { colors } from "./main.vars";


export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

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