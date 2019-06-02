import styled from 'styled-components';
import { Logo } from 'illustrations';
import { bp } from 'styles';
import { Text, Box } from 'elements';

export const Container = styled(Box)`
  position: absolute;
  top: 12px;
  right: 16px;
  ${bp.between(0, 'xs')`
    top: 32px;
  `}
  ${bp.between('xs', 'sm')`
    top: 48px;
    right: 32px;
  `}
  ${bp.between('600px', 'sm')`
    top: 72px;
    right: 40px;
  `}
  ${bp.between('sm', 'md')`
    top: 120px;
    right: 120px;
  `}
  ${bp.between('md', 'xl')`
    top: 64px;
    right: 64px;
  `}
  ${bp.greaterThan('xl')`
    top: 180px;
    right: 64px;
  `}
`;

export const StyledLogo = styled(Logo)`
  position: relative;
  height: 180px;
  ${bp.between(0, 'xs')`
    height: 64px;
  `}
  ${bp.between('xs', 'sm')`
    height: 120px;
  `}
  ${bp.between('600px', 'sm')`
    height: 120px;
  `}
  ${bp.between('sm', 'md')`
    height: 144px;
  `}
  ${bp.between('md', 'xl')`
    height: 170px;
  `}
`;

export const Tagline = styled(Text)`
  text-transform: uppercase;
  font-weight: 400 !important;
  ${bp.lessThan('xs')`
    margin-left: 48px;
    max-width: 72px;
  `}
  ${bp.between('xs', 'sm')`
    margin-top: -16px;
    margin-left: 96px;
  `}
  ${bp.between('sm', 'md')`
    margin-top: -18px;
    margin-left: 128px;
    height: 170px;
  `}
  ${bp.greaterThan('md')`
    margin-left: 136px;
    margin-top: -12px;
  `}
`;
Tagline.defaultProps = {
  color: 'vino',
  size: {
    xs: 'small',
    sm: 'substandard',
    md: 'standard',
    lg: 'superstandard',
  }
};
