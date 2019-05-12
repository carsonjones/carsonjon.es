import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mixins } from 'styles';
import {
  wrapper,
  fullWidth,
  wrapUntil,
} from './Box.mixins';

const BoxElement = styled.div`
  ${props => props.wrapper && wrapper(props.wrapper)};
  ${props => props.fullWidth ? fullWidth(props) : null};

  ${props => mixins.withSpacing(props)};
  ${props => mixins.withFlexContainer(props)};
  ${props => mixins.withFlexItem(props)};

  ${props => props.wrapUntil ? wrapUntil(props.wrapUntil) : null};
  ${props => props.wrapAt ? wrapUntil(props.wrapAt) : null};

  ${props => props.styles ? mixins.withMediaStyles(props.styles) : null};
`;

const propTypes = {
  className: PropTypes.string,
  inline: PropTypes.bool,
  wrapper: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  wrapAt: PropTypes.string,
  wrapUntil: PropTypes.string,
  fullWidth: PropTypes.bool,

  ...mixins.mediaStylesPropTypes,
  ...mixins.spacingPropTypes,
  ...mixins.flexContainerPropTypes,
  ...mixins.flexItemPropTypes,
};
const defaultProps = {
  className: PropTypes.noop,
  inline: false,
  wrapper: false,

  wrapAt: null,
  wrapUntil: null,
  fullWidth: false,

  styles: null,
  ...mixins.spacingPropDefaults,
  ...mixins.flexContainerDefaults,
  ...mixins.flexItemDefaults,
};
BoxElement.propTypes = propTypes;
BoxElement.defaultProps = defaultProps;


export default BoxElement;
