import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { MDXProvider } from '@mdx-js/react'
import BreakPointDebugger from 'utils/breakpointDebug';
import GlobalStyles from 'styles/global';
import { Text } from 'elements';

const components = {
  h1: props => <Text subheading {...props} />,
  h2: props => <Text superstandard {...props} />,
  h3: props => <Text standard darker {...props} />,
  p: props => <Text small {...props} />,
};

class Page extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    pageContext: PropTypes.string,
  };

  static defaultProps = {
    children: PropTypes.noop,
    title: null,
    pageContext: null,
  };

  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <BreakPointDebugger />
        <GlobalStyles />
        <Helmet>
          <meta name="description" content="Carson's Site" />
        </Helmet>
        
        <MDXProvider components={components}>
          { children }
        </MDXProvider>
      </Fragment>
    );
  }
}

export default Page;
