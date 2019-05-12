import { css } from 'styled-components';
// import { lighten } from 'polished';
import * as theme from '../variables';
import bp from '../breakpoints';
import config from './typography.config';
import { colorSelect } from '../utils';
import { renderLessThanMix, renderGreaterThanMix } from './mediaStyles';

export const lineHeight = lh => css`
  &&& { line-height: ${lh}px; }
`;

export const shadow = () => css`
  &&& { text-shadow: 0px 1px 0px rgba(0,0,0,.2); }
`;

export const selectFont = (font) => {
  switch (font) {
    case 'mono':
      return css`
        &&& { 
          font-family: ${theme.defaultFontMono};
          ${''}
          letter-spacing: .08em;
        }
      `;
    default:
      return null;
  }
};
export const selectShade = (shade) => {
  switch (shade) {
    case 'darker':
      return css`
        &&& { color: ${theme.black}; }
      `;
    default:
      return css`
        &&& { color: ${theme.defaultTextColor}; }
      `;
  }
};
export const selectColor = color => css`
    &&& { color: ${colorSelect(color)}; }
  `;

export const mixJumbo = css`
  color: ${theme.defaultHeadingColor};
  font-family: ${theme.defaultFontHeading};
  font-weight: ${theme.defaultHeadingWeight};
  font-size: ${config.jumbo.xs.fontSize};
  line-height: ${config.jumbo.xs.lineHeight};
  ${bp.greaterThan('sm')`
    font-size: ${config.jumbo.sm.fontSize};
    line-height: ${config.jumbo.sm.lineHeight};
  `}
  ${bp.greaterThan('md')`
    font-size: ${config.jumbo.md.fontSize};
    line-height: ${config.jumbo.md.lineHeight};
  `}
  ${bp.greaterThan('lg')`
    font-size: ${config.jumbo.lg.fontSize};
    line-height: ${config.jumbo.lg.lineHeight};
  `}
  ${bp.greaterThan('xl')`
    font-size: ${config.jumbo.lg.fontSize};
    line-height: ${config.jumbo.lg.lineHeight};
  `}
`;
export const mixHero = css`
  color: ${theme.defaultHeadingColor};
  font-family: ${theme.defaultFontHeading};
  font-weight: ${theme.defaultHeadingWeight};
  font-size: ${config.hero.xs.fontSize};
  line-height: ${config.hero.xs.lineHeight};
  ${bp.greaterThan('sm')`
    font-size: ${config.hero.sm.fontSize};
    line-height: ${config.hero.sm.lineHeight};
  `}
  ${bp.greaterThan('md')`
    font-size: ${config.hero.md.fontSize};
    line-height: ${config.hero.md.lineHeight};
  `}
  ${bp.greaterThan('lg')`
    font-size: ${config.hero.lg.fontSize};
    line-height: ${config.hero.lg.lineHeight};
  `}
  ${bp.greaterThan('xl')`
    font-size: ${config.hero.lg.fontSize};
    line-height: ${config.hero.lg.lineHeight};
  `}
`;
export const mixHeading = css`
  color: ${theme.defaultHeadingColor};
  font-family: ${theme.defaultFontHeading};
  font-weight: ${theme.defaultHeadingWeight};
  font-size: ${config.heading.xs.fontSize};
  line-height: ${config.heading.xs.lineHeight};
  ${bp.greaterThan('sm')`
    font-size: ${config.heading.sm.fontSize};
    line-height: ${config.heading.sm.lineHeight};
  `}
  ${bp.greaterThan('md')`
    font-size: ${config.heading.md.fontSize};
    line-height: ${config.heading.md.lineHeight};
  `}
  ${bp.greaterThan('lg')`
    font-size: ${config.heading.lg.fontSize};
    line-height: ${config.heading.lg.lineHeight};
  `}
  ${bp.greaterThan('xl')`
    font-size: ${config.heading.lg.fontSize};
    line-height: ${config.heading.lg.lineHeight};
  `}
`;
export const mixSubheading = css`
  color: ${theme.defaultTextColor};
  font-family: ${theme.defaultFontFamily};
  font-weight: ${theme.defaultHeadingWeight};
  font-size: ${config.subheading.xs.fontSize};
  line-height: ${config.subheading.xs.lineHeight};
  ${bp.greaterThan('sm')`
    font-size: ${config.subheading.sm.fontSize};
    line-height: ${config.subheading.sm.lineHeight};
  `}
  ${bp.greaterThan('md')`
    font-size: ${config.subheading.md.fontSize};
    line-height: ${config.subheading.md.lineHeight};
  `}
  ${bp.greaterThan('lg')`
    font-size: ${config.subheading.lg.fontSize};
    line-height: ${config.subheading.lg.lineHeight};
  `}
  ${bp.greaterThan('xl')`
    font-size: ${config.subheading.lg.fontSize};
    line-height: ${config.subheading.lg.lineHeight};
  `}
`;
export const mixSuperstandard = css`
  color: ${theme.defaultTextColor};
  font-weight: ${theme.defaultTextWeight};
  font-family: ${theme.defaultFontFamily};
  font-size: ${config.superstandard.xs.fontSize};
  line-height: ${config.superstandard.xs.lineHeight};
  ${bp.greaterThan('sm')`
    font-size: ${config.superstandard.sm.fontSize};
    line-height: ${config.superstandard.sm.lineHeight};
  `}
  ${bp.greaterThan('md')`
    font-size: ${config.superstandard.md.fontSize};
    line-height: ${config.superstandard.md.lineHeight};
  `}
  ${bp.greaterThan('lg')`
    font-size: ${config.superstandard.lg.fontSize};
    line-height: ${config.superstandard.lg.lineHeight};
  `}
  ${bp.greaterThan('xl')`
    font-size: ${config.superstandard.lg.fontSize};
    line-height: ${config.superstandard.lg.lineHeight};
  `}
`;
export const mixStandard = css`
  color: ${theme.defaultTextColor};
  font-family: ${theme.defaultFontFamily};
  font-weight: ${theme.defaultTextWeight};
  font-size: ${config.standard.xs.fontSize};
  line-height: ${config.standard.xs.lineHeight};
  font-weight: ${theme.defaultTextWeight};
  ${bp.greaterThan('sm')`
    font-size: ${config.standard.sm.fontSize};
    line-height: ${config.standard.sm.lineHeight};
  `}
  ${bp.greaterThan('md')`
    font-size: ${config.standard.md.fontSize};
    line-height: ${config.standard.md.lineHeight};
  `}
  ${bp.greaterThan('lg')`
    font-size: ${config.standard.lg.fontSize};
    line-height: ${config.standard.lg.lineHeight};
  `}
  ${bp.greaterThan('xl')`
    font-size: ${config.standard.lg.fontSize};
    line-height: ${config.standard.lg.lineHeight};
  `}
`;
export const mixSubstandard = css`
  color: ${theme.defaultTextColor};
  font-weight: ${theme.defaultTextWeight};
  font-family: ${theme.defaultFontFamily};
  font-size: ${config.substandard.xs.fontSize};
  line-height: ${config.substandard.xs.lineHeight};
  ${bp.greaterThan('sm')`
    font-size: ${config.substandard.sm.fontSize};
    line-height: ${config.substandard.sm.lineHeight};
  `}
  ${bp.greaterThan('md')`
    font-size: ${config.substandard.md.fontSize};
    line-height: ${config.substandard.md.lineHeight};
  `}
  ${bp.greaterThan('lg')`
    font-size: ${config.substandard.lg.fontSize};
    line-height: ${config.substandard.lg.lineHeight};
  `}
  ${bp.greaterThan('xl')`
    font-size: ${config.substandard.lg.fontSize};
    line-height: ${config.substandard.lg.lineHeight};
  `}
`;
export const mixLabel = css`
  color: ${theme.defaultTextColor};
  font-weight: ${theme.defaultTextWeight};
  font-family: ${theme.defaultFontFamily};
  font-size: ${config.label.xs.fontSize};
  line-height: ${config.label.xs.lineHeight};
  letter-spacing: 0.025em;
  ${bp.greaterThan('sm')`
    font-size: ${config.label.sm.fontSize};
    line-height: ${config.label.sm.lineHeight};
  `}
  ${bp.greaterThan('md')`
    font-size: ${config.label.md.fontSize};
    line-height: ${config.label.md.lineHeight};
  `}
  ${bp.greaterThan('lg')`
    font-size: ${config.label.lg.fontSize};
    line-height: ${config.label.lg.lineHeight};
  `}
  ${bp.greaterThan('xl')`
    font-size: ${config.label.lg.fontSize};
    line-height: ${config.label.lg.lineHeight};
  `}
`;
export const mixTiny = css`
  color: ${theme.defaultTextColor};
  font-weight: ${theme.defaultTextWeight};
  font-family: ${theme.defaultFontFamily};
  font-size: ${config.tiny.xs.fontSize};
  line-height: ${config.tiny.xs.lineHeight};
  letter-spacing: 0.025em;
  ${bp.greaterThan('sm')`
    font-size: ${config.tiny.sm.fontSize};
    line-height: ${config.tiny.sm.lineHeight};
  `}
  ${bp.greaterThan('md')`
    font-size: ${config.tiny.md.fontSize};
    line-height: ${config.tiny.md.lineHeight};
  `}
  ${bp.greaterThan('lg')`
    font-size: ${config.tiny.lg.fontSize};
    line-height: ${config.tiny.lg.lineHeight};
  `}
  ${bp.greaterThan('xl')`
    font-size: ${config.tiny.lg.fontSize};
    line-height: ${config.tiny.lg.lineHeight};
  `}
`;
export const mixDefault = css`
  ${mixStandard}
`;

export const mixLink = () => css`
  &&&{
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration-line: underline;
    text-decoration-style: solid;
    color: ${props => props.linkColor ? theme.black : 'inherit'};
    text-decoration-color: ${props => props.linkColor ? theme.black : 'inherit'};
    &:hover {cursor: pointer;}
  }
`;

const returnSizeMixin = (size) => {
  let sizeMixin = null;
  switch (size) {
    case 'jumbo':
      sizeMixin = mixJumbo;
      break;
    case 'hero':
      sizeMixin = mixHero;
      break;
    case 'heading':
      sizeMixin = mixHeading;
      break;
    case 'subheading':
      sizeMixin = mixSubheading;
      break;
    case 'superstandard':
      sizeMixin = mixSuperstandard;
      break;
    case 'substandard':
      sizeMixin = mixSubstandard;
      break;
    case 'small':
    case 'label':
      sizeMixin = mixLabel;
      break;
    case 'tiny':
      sizeMixin = mixTiny;
      break;
    case 'standard':
    default:
      sizeMixin = mixStandard;
      break;
  }
  return css`
    ${sizeMixin}
  `;
};

export const selectSize = (size) => {
  if (typeof size === 'string') return css`${returnSizeMixin(size)}`;
  if (typeof size === 'object') {
    return css`
      ${size.all && renderGreaterThanMix('1px', returnSizeMixin(size.all))}
      ${size.xs && renderGreaterThanMix('xs', returnSizeMixin(size.xs))}
      ${size.sm && renderGreaterThanMix('sm', returnSizeMixin(size.sm))}
      ${size.md && renderGreaterThanMix('md', returnSizeMixin(size.md))}
      ${size.lg && renderGreaterThanMix('lg', returnSizeMixin(size.lg))}
      ${size.xl && renderGreaterThanMix('xl', returnSizeMixin(size.xl))}
      ${size.xxl && renderGreaterThanMix('xxl', returnSizeMixin(size.xxl))}
      ${size.uxs && renderLessThanMix('xs', returnSizeMixin(size.uxs))}
      ${size.usm && renderLessThanMix('sm', returnSizeMixin(size.usm))}
      ${size.umd && renderLessThanMix('md', returnSizeMixin(size.umd))}
      ${size.ulg && renderLessThanMix('lg', returnSizeMixin(size.ulg))}
      ${size.uxl && renderLessThanMix('xl', returnSizeMixin(size.uxl))}
      ${size.uxxl && renderLessThanMix('xxl', returnSizeMixin(size.uxxl))}
    `;
  }
  return [];
};
