import { css } from 'styled-components';
import bp from '../breakpoints';

export function ensureSemi(val) {
  const newVal = val.trim();
  return newVal && newVal !== ';' ? (newVal.slice(-1) === ';' ? newVal : `${newVal};`) : ''; // eslint-disable-line
}

export function toCssString(val, prefix = '') {
  if (typeof val === 'string') return ensureSemi(`${prefix}${val}`);
  if (!Array.isArray(val)) return '';
  return val
    .map(el => ensureSemi(el))
    .join('')
    .trim();
}

export const renderLessThan = (bkp, style, prefix) => css`
    ${bp.lessThan(`${bkp}`)`
      ${toCssString(style, prefix)}
    `}
  `;

export const renderGreaterThan = (bkp, style, prefix) => css`
    ${bp.greaterThan(`${bkp}`)`
      ${toCssString(style, prefix)}
    `}
  `;

export const renderLessThanMix = (bkp, mixin) => css`
    ${bp.lessThan(`${bkp}`)`
      ${mixin}
    `}
  `;

export const renderGreaterThanMix = (bkp, mixin) => css`
    ${bp.greaterThan(`${bkp}`)`
      ${mixin}
    `}
  `;

export const RuleMediaStyles = (styles, prefix) => {
  if (typeof styles === 'string') return css`${toCssString(styles, prefix)}`;
  if (typeof styles === 'object') {
    return css`
      ${styles.all && renderGreaterThan('1px', styles.all, prefix)}
      ${styles.xs && renderGreaterThan('xs', styles.xs, prefix)}
      ${styles.sm && renderGreaterThan('sm', styles.sm, prefix)}
      ${styles.md && renderGreaterThan('md', styles.md, prefix)}
      ${styles.lg && renderGreaterThan('lg', styles.lg, prefix)}
      ${styles.xl && renderGreaterThan('xl', styles.xl, prefix)}
      ${styles.xxl && renderGreaterThan('xxl', styles.xxl, prefix)}
      ${styles.uxxl && renderLessThan('xxl', styles.uxxl, prefix)}
      ${styles.uxl && renderLessThan('xl', styles.uxl, prefix)}
      ${styles.ulg && renderLessThan('lg', styles.ulg, prefix)}
      ${styles.umd && renderLessThan('md', styles.umd, prefix)}
      ${styles.usm && renderLessThan('sm', styles.usm, prefix)}
      ${styles.uxs && renderLessThan('xs', styles.uxs, prefix)}
    `;
  }
  return [];
};

function MediaStyles(styles) {
  if (Array.isArray(styles)) return styles;
  if (typeof styles === 'string') return css`${toCssString(styles)}`;
  if (typeof styles === 'object') {
    return css`
      ${styles.all && renderGreaterThan('1px', styles.all)}
      ${styles.xs && renderGreaterThan('xs', styles.xs)}
      ${styles.sm && renderGreaterThan('sm', styles.sm)}
      ${styles.md && renderGreaterThan('md', styles.md)}
      ${styles.lg && renderGreaterThan('lg', styles.lg)}
      ${styles.xl && renderGreaterThan('xl', styles.xl)}
      ${styles.xxl && renderGreaterThan('xxl', styles.xxl)}
      ${styles.uxs && renderLessThan('xs', styles.uxs)}
      ${styles.usm && renderLessThan('sm', styles.usm)}
      ${styles.umd && renderLessThan('md', styles.umd)}
      ${styles.ulg && renderLessThan('lg', styles.ulg)}
      ${styles.uxl && renderLessThan('xl', styles.uxl)}
      ${styles.uxxl && renderLessThan('xxl', styles.uxxl)}
    `;
  }

  return [];
}

export default MediaStyles;
