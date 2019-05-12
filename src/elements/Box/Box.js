import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { mixins } from 'styles';
import BoxElement from './BoxElement';

export const boxPropTypes = {
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
export const boxDefaultProps = {
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

const Box = props => (
  <BoxElement {...props}>
    {
      props.fullWidth
        ? (
          <BoxElement {...props} fullWidth={false}>
            {props.children}
          </BoxElement>
        )
        : (
          <Fragment>{ props.children }</Fragment>
        )
    }
  </BoxElement>
);
Box.propTypes = boxPropTypes;
Box.defaultProps = boxDefaultProps;

export default Box;
