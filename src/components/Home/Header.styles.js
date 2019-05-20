import styled from 'styled-components';
import { Logo } from 'illustrations';
import { bp, theme } from 'styles';
import { Text } from 'elements';

export const StyledLogo = styled(Logo)`
  position: absolute;
  top: 12px;
  right: 16px;
  height: 180px;
  ${bp.between(0, 'xs')`
    top: 24px;
    height: 64px;
  `}
  ${bp.between('xs', 'sm')`
    top: 48px;
    height: 120px;
    right: 32px;
  `}
  ${bp.between('600px', 'sm')`
    top: 72px;
    height: 120px;
    right: 40px;
  `}
  ${bp.between('sm', 'md')`
    top: 120px;
    right: 120px;
    height: 144px;
  `}
  ${bp.between('md', 'xl')`
    top: 64px;
    right: 64px;
    height: 170px;
  `}
  ${bp.greaterThan('xl')`
    top: 180px;
    right: 64px;
  `}
`;

export const Tagline = styled(Text)`
  text-transform: uppercase;
  font-weight: 300 !important;
`;
Tagline.defaultProps = {
  color: 'vino',
};
