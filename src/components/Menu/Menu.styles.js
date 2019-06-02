import styled from 'styled-components';
import { Text } from 'elements';

export const Container = styled.div`

`;

export const Control = styled(Text)`

`;
Control.defaultProps = {
  color: 'tan',
  shadow: true,
  caps: true,
  bold: true,
  size: {
    umd: 'small',
    md: 'standard',
  },
};