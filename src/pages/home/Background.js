import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const xs = () => (
  <Fragment>
    <path fill="#B0353B" d="M0 74l46.871-.399L314.88 260.95H320V0H0z" />
    <path fill="#FFE600" d="M0 113l34.193-.11 268.008 187.385L320 300v20h-24.138L27.854 132.615 0 133z"
    />
    <path fill="#F7C060" d="M0 93h40.532L308.54 280H320v20l-17.8.461L34.194 113.076H0z"
    />
    <path fill="#D64043" d="M0 73l46.871.379L314.88 260.764 320 261v19l-11.46.488L40.532 93H0z"
    />
  </Fragment>
);

const sm = () => (
  <Fragment>
    <path fill="#B0353B" d="M0 110.402h43.307L445.32 391.425H480V0H0z" />
    <path fill="#FFE600" d="M0 169.335h24.29L426.3 450.413H480V480h-63.208L14.781 198.922H0z"
    />
    <path fill="#F7C060" d="M0 140.027h33.798L435.81 421.105H480v29.587h-53.699L24.29 169.614H0z"
    />
    <path fill="#D64043" d="M0 110.068h43.307L445.32 391.146H480v29.587h-44.19L33.798 139.655H0z"
    />
  </Fragment>
);

const md = () => (
  <Fragment>
    <path fill="#B0353B" d="M0 115.002h220.112l418.762 292.732H768V0H0z" />
    <path fill="#FFE600" d="M0 176.39h200.302l418.762 292.79H768V500H609.159L190.397 207.21H0z"
    />
    <path fill="#F7C060" d="M0 145.862h210.207L628.969 438.65H768v30.82H619.064L200.302 176.68H0z"
    />
    <path fill="#D64043" d="M0 114.654h220.112l418.762 292.79H768v30.82H628.969l-418.762-292.79H0z"
    />
  </Fragment>
);

const lg = () => (
  <Fragment>
    <path fill="#B0353B" d="M0 169.513h261.444L878.7 601H992V0H0z" />
    <path fill="#FFE600" d="M0 260h232.244L849.5 691.571H992V737H834.9L217.644 305.429H0z"
    />
    <path fill="#F7C060" d="M0 214h246.844L864.1 646H992v46H849.5L232.244 260.429H0z"
    />
    <path fill="#D64043" d="M0 169h261.444L878.7 600.571H992V646H864.1L246.844 214.429H0z"
    />
  </Fragment>
);

const xl = () => (
  <Fragment>
    <path fill="#B0353B" d="M0 209h280l761 532h159V0H0z" />
    <path fill="#FFE600" d="M0 321h244l761 532h195v56H987L226 377H0z" />
    <path fill="#F7C060" d="M0 265h262l761 532h177v56h-195L244 321H0z" />
    <path fill="#D64043" d="M0 209h280l761 532h159v56h-177L262 265H0z" />
  </Fragment>
);

const xxl = () => (
  <Fragment>
    <path fill="#B0353B" d="M0 209h400l761 532h279V0H0z" />
    <path fill="#FFE600" d="M0 321h364l761 532h315v56h-333L346 377H0z" />
    <path fill="#F7C060" d="M0 265h382l761 532h297v56h-315L364 321H0z" />
    <path fill="#D64043" d="M0 209h400l761 532h279v56h-297L382 265H0z" />
  </Fragment>
);

const size = {
  xs: {
    width: 320,
    height: 320,
    component: <xs />,
  },
  sm: {
    width: 480,
    height: 480,
    component: <sm />,
  },
  md: {
    width: 768,
    height: 500,
    component: <md />,
  },
  lg: {
    width: 992,
    height: 767,
    component: <lg />
  },
  xl: {
    width: 1200,
    height: 909,
    component: <xl />
  },
  xxl: {
    width: 1440,
    height: 909,
    component: <xxl />
  },
};

const Background =  ({ bp, ...rest }) => (
  <svg
    viewBox={`0 0 ${size[bp].width} ${size[bp].width}`}
    preserveAspectRatio="xMidYMid"
    {...rest}
  >
    <g fill="none">
      {size[bp].component}
    </g>
  </svg>
);
Background.propTypes = {
  bp: PropTypes.string,
};
Background.defaultProps = {
  bp: 'xxl',
};

export default Background;
