import styled from 'styled-components';

let BreakPointDebugger = () => null; // eslint-disable-line

const bps = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1440px',
  xxl: '1920px',
};

const getBPNumValue = value => parseInt(value.substring(0, value.length - 2), 10);

const breakPoint = (width) => {
  const bkps = {
    xs: getBPNumValue(bps.xs),
    sm: getBPNumValue(bps.sm),
    md: getBPNumValue(bps.md),
    lg: getBPNumValue(bps.lg),
    xl: getBPNumValue(bps.xl),
    xxl: getBPNumValue(bps.xxl),
  };
  switch (true) {
    case (width >= bkps.xxl):
      return 'xxl';
    case (width >= bkps.xl):
      return 'xl';
    case (width >= bkps.lg):
      return 'lg';
    case (width >= bkps.md):
      return 'md';
    case (width >= bkps.sm):
      return 'sm';
    case (width >= bkps.xs):
    default:
      return 'xs';
  }
};

const { NODE_ENV } = process.env;

if (NODE_ENV !== 'production') {
  BreakPointDebugger = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 24px;
    width: 64px;
    font-size: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    background: pink; 
    color: white;
    text-shadow: 0px 0px 4px #000;
    z-index: 999;
    &:before {
      content: ${props => `'${breakPoint(props.width)}:${props.width}'`};
    }
  `;
}

export default BreakPointDebugger;
