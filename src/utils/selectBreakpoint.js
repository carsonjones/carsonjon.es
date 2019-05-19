const bps = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1440px',
  xxl: '1920px',
};

const getBPNumValue = value => parseInt(value.substring(0, value.length - 2), 10);

const selectBreakPoint = (width) => {
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

export default selectBreakPoint;
