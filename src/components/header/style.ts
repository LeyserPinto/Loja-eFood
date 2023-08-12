import { styled } from "styled-components";
import urlSvg from '../../assets/img/Vector.svg'
import { Wrapper } from "../../global/styles/main.styles";
import { colors, fonts } from "../../global/styles/main.vars";

type Props = {
    src?: string
}
export const HeaderWrapper = styled(Wrapper)<Props>`
    position: relative;
    z-index: -1;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(${urlSvg});
      z-index: -3;
      background-size: contain;
    }
`

export const HomeHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    & img {
        width: 90px;
        margin-bottom: 100px;
    }

    & p {        
        width:539px;
        text-align: center;
        font-size: ${fonts.tall};
        font-weight: 900;
        color: ${colors.fonts.primary};
    }

`