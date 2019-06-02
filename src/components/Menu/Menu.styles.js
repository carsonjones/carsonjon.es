import styled, { css } from 'styled-components';
import { Text, Box } from 'elements';
import { theme } from 'styles';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${theme.magenta};
  overflow-y: scroll;
  &.menu-exited{
    opacity: 0;
    z-index: -1;
  }
  &.menu-exiting{
    opacity: 0.01;
  }
  &.menu-entering {
    opacity: 0.01;
  }
  &.menu-entered {
    opacity: 1;
    transform: scale(1) translateX(0%);
    transition: all 150ms cubic-bezier(.02, .01, .47, 1);
    z-index: 999;
    display: flex;
    padding-top: 40px;
  }
`;

const ControlBase = css`
  margin-top: 16px;
`;
const ControlOpen = css`
  position: fixed;
  z-index: 1000;
`;

export const Control = styled(Text)`
  margin-top: 16px;
  ${props => props.isMenuOpen ? ControlOpen : ControlBase}
`;
Control.defaultProps = {
  color: 'tan',
  shadow: true,
  caps: true,
  bold: true,
  cursor: true,
  size: {
    umd: 'small',
    md: 'standard',
  },
};

export const Nav = styled(Box)``;
Nav.defaultProps = {
  m: '3,t',
  p: '1,l',
  row: false,
}

export const Option = styled(Text)``;
Option.defaultProps = {
  color: 'yellow',
  size: 'subheading',
  bold: true,
  shadow: true,
  m: '2,b',
};