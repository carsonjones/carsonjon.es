import { css } from 'styled-components';
import { RuleMediaStyles } from './mediaStyles';

const alignSelf = (styles) => {
  const prefix = 'align-self:';
  return RuleMediaStyles(styles, prefix);
};

const flex = (styles) => {
  const prefix = 'flex:';
  return RuleMediaStyles(styles, prefix);
};

const flexBasis = (styles) => {
  const prefix = 'flex-basis:';
  return RuleMediaStyles(styles, prefix);
};

const flexGrow = (styles) => {
  const prefix = 'flex-grow:';
  return RuleMediaStyles(styles, prefix);
};

const flexShrink = (styles) => {
  const prefix = 'flex-shrink:';
  return RuleMediaStyles(styles, prefix);
};

const order = (styles) => {
  const prefix = 'order:';
  return RuleMediaStyles(styles, prefix);
};

const FlexItem = props => css`
    ${props.alignSelf && alignSelf(props.alignSelf)};
    ${props.flex && flex(props.flex)};
    ${props.flexBasis && flexBasis(props.flexBasis)};
    ${props.flexGrow && flexGrow(props.flexGrow)};
    ${props.flexShrink && flexShrink(props.flexShrink)};
    ${props.order && order(props.order)};
  `;

export default FlexItem;
