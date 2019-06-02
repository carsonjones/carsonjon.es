import { css } from 'styled-components';
import bp from '../breakpoints';

const determineDirectionObj = (direction) => {
  const dir = {
    bottom: false,
    top: false,
    left: false,
    right: false,
  };
  switch (direction) {
    case 'trbl':
    case 'all':
      dir.top = true;
      dir.bottom = true;
      dir.left = true;
      dir.right = true;
      break;
    case 'tb':
    case 'bt':
    case 'td':
    case 'dt':
      dir.top = true;
      dir.bottom = true;
      break;
    case 'lr':
    case 'rl':
      dir.right = true;
      dir.left = true;
      break;
    case 't':
      dir.top = true;
      break;
    case 'l':
      dir.left = true;
      break;
    case 'r':
      dir.right = true;
      break;
    case 'b':
    case 'd':
    default:
      dir.bottom = true;
      break;
  }
  return dir;
};

const constructDirectionalCss = (dir, setting, prop, grid = 8) => css`
  ${`${prop}-${dir}: ${parseFloat(setting, 10) * grid}px;`}
`;

const renderDirectionalCss = (dir, setting, bkp = '1px', prop = 'margin', isGreater = true) => {
  if (isGreater) {
    return css`
      ${bp.greaterThan(`${bkp}`)`
        ${dir.bottom && constructDirectionalCss('bottom', setting, prop)};
        ${dir.top && constructDirectionalCss('top', setting, prop)};
        ${dir.left && constructDirectionalCss('left', setting, prop)};
        ${dir.right && constructDirectionalCss('right', setting, prop)};
      `}
    `;
  }
  return css`
      ${bp.lessThan(`${bkp}`)`
        ${dir.bottom && constructDirectionalCss('bottom', setting, prop)};
        ${dir.top && constructDirectionalCss('top', setting, prop)};
        ${dir.left && constructDirectionalCss('left', setting, prop)};
        ${dir.right && constructDirectionalCss('right', setting, prop)};
      `}
    `;
};

const parseSettings = (settings) => {
  const config = settings.replace(/\s+/g, '').split(',');
  const amount = config[0];
  const direction = config[1] || 'd';
  const bkp = config[2] || '1px';
  const dir = {
    ...determineDirectionObj(direction),
  };
  return {
    amount,
    dir,
    bkp,
  };
};

const handleSpacing = (settings, prop) => {
  if (Array.isArray(settings)) {
    const styles = [];
    settings.map((setting) => {
      const {
        dir,
        amount,
        bkp,
      } = parseSettings(setting);
      styles.push(renderDirectionalCss(dir, amount, bkp, prop).join('\r\n'));
      return null;
    });
    return css`
      ${styles.join('\r\n')}
    `;
  }
  if (typeof settings === 'string') {
    const {
      dir,
      amount,
      bkp,
    } = parseSettings(settings);
    return renderDirectionalCss(dir, amount, bkp, prop);
  }
  if (typeof settings === 'object') {
    const callForBkp = (bkp, setting, isGreater) => {
      const {
        dir,
        amount,
      } = parseSettings(setting);
      return renderDirectionalCss(dir, amount, bkp, prop, isGreater);
    };
    return css`
      &&& {
        ${settings.all && callForBkp('1px', settings.all)}
        ${settings.xs && callForBkp('xs', settings.xs)}
        ${settings.sm && callForBkp('sm', settings.sm)}
        ${settings.md && callForBkp('md', settings.md)}
        ${settings.lg && callForBkp('lg', settings.lg)}
        ${settings.xl && callForBkp('xl', settings.xl)}
        ${settings.uxl && callForBkp('xl', settings.uxl, false)}
        ${settings.ulg && callForBkp('lg', settings.ulg, false)}
        ${settings.umd && callForBkp('md', settings.umd, false)}
        ${settings.usm && callForBkp('sm', settings.usm, false)}
        ${settings.uxs && callForBkp('xs', settings.uxs, false)}
      }
    `;
  }

  return [];
};

const Spacing = (props) => {
  const margin = props.m ? props.m : props.margin;
  const padding = props.p ? props.p : props.padding;
  return css`
    ${margin ? handleSpacing(margin, 'margin') : null};
    ${padding ? handleSpacing(padding, 'padding') : null};
  `;
};


export default Spacing;
