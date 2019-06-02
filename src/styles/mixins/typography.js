import { css } from 'styled-components';
import { lighten } from 'polished';
import { colorSelect } from 'utils/colorSelect';
import * as theme from '../variables';
import bp from '../breakpoints';
import config from './typography.config';
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
          font-family: ${theme.fontFamilyMono};
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

export const mixHero = css`
  color: ${theme.defaultHeadingColor};
  font-family: ${theme.fontFamilyHeading};
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
  font-family: ${theme.fontFamilyHeading};
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
  font-family: ${theme.fontFamilyDefault};
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

export const mixLarge = css`
  color: ${theme.defaultTextColor};
  font-weight: ${theme.defaultTextWeight};
  font-family: ${theme.fontFamilyDefault};
  font-size: ${config.large.xs.fontSize};
  line-height: ${config.large.xs.lineHeight};
  ${bp.greaterThan('sm')`
    font-size: ${config.large.sm.fontSize};
    line-height: ${config.large.sm.lineHeight};
  `}
  ${bp.greaterThan('md')`
    font-size: ${config.large.md.fontSize};
    line-height: ${config.large.md.lineHeight};
  `}
  ${bp.greaterThan('lg')`
    font-size: ${config.large.lg.fontSize};
    line-height: ${config.large.lg.lineHeight};
  `}
  ${bp.greaterThan('xl')`
    font-size: ${config.large.lg.fontSize};
    line-height: ${config.large.lg.lineHeight};
  `}
`;

export const mixStandard = css`
  color: ${theme.defaultTextColor};
  font-family: ${theme.fontFamilyDefault};
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

export const mixSmall = css`
  color: ${theme.defaultTextColor};
  font-weight: ${theme.defaultTextWeight};
  font-family: ${theme.fontFamilyDefault};
  font-size: ${config.small.xs.fontSize};
  line-height: ${config.small.xs.lineHeight};
  letter-spacing: 0.025em;
  ${bp.greaterThan('sm')`
    font-size: ${config.small.sm.fontSize};
    line-height: ${config.small.sm.lineHeight};
  `}
  ${bp.greaterThan('md')`
    font-size: ${config.small.md.fontSize};
    line-height: ${config.small.md.lineHeight};
  `}
  ${bp.greaterThan('lg')`
    font-size: ${config.small.lg.fontSize};
    line-height: ${config.small.lg.lineHeight};
  `}
  ${bp.greaterThan('xl')`
    font-size: ${config.small.lg.fontSize};
    line-height: ${config.small.lg.lineHeight};
  `}
`;

export const mixTiny = css`
  color: ${theme.defaultTextColor};
  font-weight: ${theme.defaultTextWeight};
  font-family: ${theme.fontFamilyDefault};
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

const mixUnderline = () => css`
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: ${props => props.linkColor ? theme.blue3 : 'inherit'}
`;

export const mixLink = () => css`
  &&&{
    font-weight: inherit;
    line-height: inherit;
    color: ${props => props.linkColor ? props.linkColor : theme.blue3};
    ${props => props.underline && mixUnderline()}
    &:hover {
      cursor: pointer;
      color: ${props => props.hoverColor && `${props.hoverColor}`};
    }
  }
`;

const returnSizeMixin = (size) => {
  let sizeMixin = null;
  switch (size) {
    case 'hero':
      sizeMixin = mixHero;
      break;
    case 'heading':
      sizeMixin = mixHeading;
      break;
    case 'subheading':
      sizeMixin = mixSubheading;
      break;
    case 'large':
      sizeMixin = mixLarge;
      break;
    case 'small':
    case 'label':
      sizeMixin = mixSmall;
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
