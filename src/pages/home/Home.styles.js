import styled from 'styled-components';
import { theme, bp } from 'styles';
import BG from './Background';

export const Main = styled.main`
  position: relative;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: ${theme.tan};
`;

export const Hero = styled.div`
  position: relative;
  flex-grow: 1;
  z-index: 2;
`;

export const HeroMain = styled.div`
  position: relative;
  z-index: 5;
`;

export const Background = styled(BG)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  /* ${bp.greaterThan('md')`
    top: -40px;
  `} */
`;