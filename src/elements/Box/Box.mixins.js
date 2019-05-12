/* eslint-disable no-shadow */
import { css } from 'styled-components';
import { bp } from 'styles';

export const mixVertical = css`
  flex-direction: column;
`;

export const mixHorizontal = css`
  flex-direction: row;
`;

export const wrapper = (setting) => {
  let width = '1200px';
  switch (setting) {
    case 'xs':
      width = '680px';
      break;
    case 'sm':
      width = '800px';
      break;
    case 'md':
      width = '960px';
      break;
    case 'lg':
      width = '1040px';
      break;
    case 'xl':
    default:
      break;
  }
  return css`
    margin: 0 auto;
    width: 100%;
    max-width: ${width};
    &&& {
      ${bp.lessThan(width)`
        padding: 0 8px;
      `}
    }
  `;
};

export const mixWrapper = css`
  ${wrapper('xl')};
`;

export const wrap = setting => css`
    ${bp.lessThan(`${setting}`)`
      flex-direction: column;
    `}
  `;

export const wrapAt = setting => css`
    &&& {
      ${bp.lessThan(`${setting}`)`
        flex-direction: row;
      `}
      ${bp.greaterThan(`${setting}`)`
        flex-direction: column;
      `}
    }
  `;

export const wrapUntil = setting => css`
    &&& {
      ${bp.lessThan(`${setting}`)`
        flex-direction: column;
      `}
      ${bp.greaterThan(`${setting}`)`
        flex-direction: row;
      `}
    }
  `;

export const resetMargin = () => css`
  margin: 0;
`;
export const resetPadding = () => css`
  padding: 0;
`;

export const resetBorder = () => css`
  border-top: 0;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
`;

// eslint-disable-next-line
export const fullWidth = props => css`
  max-width: 100vw;
  width: 100%;
  &&& { ${resetPadding()} }
  & > div {
    ${resetMargin()};
    ${resetBorder()};
    ${props => props.wrapper ? wrapper(props.wrapper) : null};
    &:after{ display:none; }
  }
`;
