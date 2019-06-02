import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { theme, mixins } from 'styles';
import {
  selectSize,
  selectShade,
  selectColor,
  selectFont,
  lineHeight,
  shadow,
  mixDefault,
  mixLink,
} from 'styles/mixins/typography';

export const textPropTypes = {
  children: PropTypes.node,
  className: PropTypes.string,

  size: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  hero: PropTypes.bool,
  heading: PropTypes.bool,
  subheading: PropTypes.bool,
  large: PropTypes.bool,
  standard: PropTypes.bool,
  small: PropTypes.bool,
  tiny: PropTypes.bool,

  link: PropTypes.bool,

  lineHeight: PropTypes.number,
  shade: PropTypes.oneOf([
    'darker',
    'dark',
    'light',
    'white',
    'whiteish',
    'medium',
    'default',
  ]),
  dark: PropTypes.bool,
  light: PropTypes.bool,
  white: PropTypes.bool,
  whiteish: PropTypes.bool,
  medium: PropTypes.bool,
  default: PropTypes.bool,
  color: PropTypes.oneOf([
    'blue',
    'blueish',
    'green',
    'greenish',
    'yellow',
    'orange',
    'red',
    'purple',
    'white',
    'black',
  ]),
  darken: PropTypes.bool,
  lighten: PropTypes.bool,

  bold: PropTypes.bool,
  center: PropTypes.bool,
  mono: PropTypes.bool,

  pointer: PropTypes.bool,

  ...mixins.mediaStylesPropTypes,
  ...mixins.spacingPropTypes,
  ...mixins.flexItemPropTypes,
};

export const textDefaultProps = {
  children: PropTypes.noop,
  className: null,

  size: null,
  hero: false,
  heading: false,
  subheading: false,
  large: false,
  standard: false,
  small: false,
  tiny: false,

  link: false,

  shade: null,
  color: null,
  lineHeight: null,

  dark: null,
  light: null,
  white: null,
  whiteish: null,
  medium: null,
  default: null,

  darken: PropTypes.noop,
  lighten: PropTypes.noop,

  bold: null,
  center: null,
  mono: false,

  pointer: false,

  styles: null,
  ...mixins.spacingPropDefaults,
  ...mixins.flexItemDefaults,
};

const mixBold = bold => css`
    &&& {
      ${bold ? `font-weight: ${theme.defaultHeadingWeight};` : `font-weight: ${theme.defaultTextWeight};`}
    }
  `;

const mixCenter = center => css`
    ${center ? 'text-align: center ' : null}
  `;

const TypographyElement = styled.div`
  &&& {
    /* Sizing */
    ${props => props.size ? selectSize(props.size) : mixDefault}
    ${props => props.hero && selectSize('hero')};
    ${props => props.heading && selectSize('heading')};
    ${props => props.subheading && selectSize('subheading')};
    ${props => props.large && selectSize('large')};
    ${props => props.standard && selectSize('standard')};
    ${props => props.small && selectSize('small')};
    ${props => props.tiny && selectSize('tiny')};

    /* Typography */
    ${props => props.mono && selectFont('mono')}
    ${props => props.lineHeight && lineHeight(props.lineHeight)};
    ${props => props.bold && mixBold(props.bold)};
    ${props => props.link && mixLink()};
    ${props => props.center && mixCenter(props.center)};
    ${props => props.caps && 'text-transform: uppercase;'}
    ${props => props.shadow && shadow()}

    /* Color */
    ${props => props.color && selectColor(props.color)}
    ${props => props.shade && selectShade(props.shade)};
    ${props => props.dark && selectShade('dark')};
    ${props => props.light && selectShade('light')};
    ${props => props.white && selectShade('white')};
    ${props => props.whiteish && selectShade('whiteish')};
    ${props => props.medium && selectShade('medium')};
    ${props => props.default && selectShade('default')};

    /* Extras */
    ${props => props.pointer && '&:hover { cursor: pointer; }'}
    ${props => mixins.withSpacing(props)};
    ${props => mixins.withFlexItem(props)};
    ${props => props.styles ? mixins.withMediaStyles(props.styles) : null};
  }
`;
TypographyElement.propTypes = textPropTypes;
TypographyElement.defaultProps = textDefaultProps;

const Text = props => (
  <TypographyElement
    {...props}
  >
    {props.children}
  </TypographyElement>
);

Text.propTypes = textPropTypes;
Text.defaultProps = textDefaultProps;

export default Text;
