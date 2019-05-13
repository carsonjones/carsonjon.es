import styled from 'styled-components';
import { theme } from 'styles';
import BG from './Background';

export const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Hero = styled.div`
  position: relative;
  background: ${theme.tan};
  flex-grow: 1;
  z-index: -2;
`;

export const HeroMain = styled.div`
  position: relative;
  z-index: 5;
`;

export const Background = styled(BG)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;