import PropTypes from 'prop-types';

const settingsStringOrObj = PropTypes.oneOfType([PropTypes.string, PropTypes.object]);

export const marginPropTypes = {
  margin: settingsStringOrObj,
  m: settingsStringOrObj,
};

export const paddingPropTypes = {
  padding: settingsStringOrObj,
  p: settingsStringOrObj,
};

export const spacingPropTypes = {
  ...paddingPropTypes,
  ...marginPropTypes,
};

export const marginPropDefaults = {
  margin: null,
  m: null,
};

export const paddingPropDefaults = {
  padding: null,
  p: null,
};

export const spacingPropDefaults = {
  ...paddingPropDefaults,
  ...marginPropDefaults,
};

export const mediaStylesPropTypes = {
  styles: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object,
  ]),
};

export const flexContainerPropTypes = {
  flexDirection: settingsStringOrObj,
  row: PropTypes.bool,
  flexWrap: settingsStringOrObj,
  justifyContent: settingsStringOrObj,
  alignItems: settingsStringOrObj,
};

export const flexContainerDefaults = {
  flexDirection: 'column',
  row: false,
  flexWrap: 'nowrap',
  justifyContent: null,
  alignItems: null,
};

export const flexItemPropTypes = {
  alignSelf: settingsStringOrObj,
  flex: PropTypes.string,
  flexBasis: PropTypes.string,
  flexGrow: settingsStringOrObj,
  flexShrink: settingsStringOrObj,
  order: settingsStringOrObj,
};

export const flexItemDefaults = {
  alignSelf: null,
  flex: null,
  flexBasis: null,
  flexGrow: null,
  flexShrink: null,
  order: null,
};

export const flexedItemDefaults = {
  alignSelf: 'auto',
  flex: '0 1 auto',
  flexBasis: 'auto',
  flexGrow: 0,
  flexShrink: 1,
  order: 0,
};
