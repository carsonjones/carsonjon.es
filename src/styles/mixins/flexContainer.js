/* eslint-disable no-shadow */
import { css } from 'styled-components';
import bp from '../breakpoints';
import { RuleMediaStyles } from './mediaStyles';

const justifyContent = (setting) => {
  const prefix = 'justify-content:';
  if (typeof setting === 'object') return RuleMediaStyles(setting, prefix);
  let justify = 'flex-start';
  switch (setting) {
    case 'end':
    case 'flex-end':
      justify = 'flex-end';
      break;
    case 'center':
      justify = 'center';
      break;
    case 'space-between':
    case 'between':
      justify = 'space-between';
      break;
    case 'space-around':
    case 'around':
      justify = 'space-around';
      break;
    case 'start':
    case 'flex-start':
    default:
      break;
  }
  return RuleMediaStyles(justify, prefix);
};

const alignItems = (setting) => {
  const prefix = 'align-items:';
  if (typeof setting === 'object') return RuleMediaStyles(setting, prefix);
  let align = 'flex-start';
  switch (setting) {
    case 'stretch':
      align = 'stretch';
      break;
    case 'center':
      align = 'center';
      break;
    case 'flex-end':
    case 'end':
      align = 'flex-end';
      break;
    case 'baseline':
    case 'base':
      align = 'baseline';
      break;
    case 'flex-start':
    case 'start':
    default:
      break;
  }
  return RuleMediaStyles(align, prefix);
};

export const wrapAt = (bkp, setting) => css`
    &&& {
      ${bp.greaterThan(`${bkp}`)`
        flex-wrap: ${setting};
      `}
    }
  `;

export const wrapUntil = (bkp, setting) => css`
    &&& {
      ${bp.lessThan(`${bkp}`)`
        flex-wrap: ${setting};
      `}
    }
  `;

export const flexWrap = (styles) => {
  const prefix = 'flex-wrap:';
  return RuleMediaStyles(styles, prefix);
};

export const flexDirection = (styles) => {
  const prefix = 'flex-direction:';
  return RuleMediaStyles(styles, prefix);
};

const FlexContainer = (props) => {
  const direction = props.row ? 'row' : props.flexDirection;
  return css`
    ${props => props.inline ? 'display: inline-flex' : 'display: flex'};
    ${flexDirection(direction)};
    ${props => flexWrap(props.flexWrap)};
    ${props => props.justifyContent && justifyContent(props.justifyContent)};
    ${props => props.alignItems && alignItems(props.alignItems)};
    ${props => props.wrapAt && wrapAt(props.wrapAt, props.flexWrap)};
    ${props => props.wrapUntil && wrapUntil(props.wrapUntil, props.flexWrap)};
  `;
};

export default FlexContainer;
