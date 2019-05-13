import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { MDXProvider } from "@mdx-js/react"
import GlobalStyles from 'styles/global';
import { Text } from 'elements';

const components = {
  h1: props => <Text subheading {...props} />,
  h2: props => <Text superstandard {...props} />,
  h3: props => <Text standard darker {...props} />,
  p: props => <Text small {...props} />,
};

const Page = ({ children, title = null, pageContext = null }) => {
  // const pageTitle = pageContext.title || title;
  return (
    <Fragment>
      <GlobalStyles />
      <Helmet>
        <meta name="description" content="Carson's Site" />
      </Helmet>
      
      <MDXProvider components={components}>
        {children}
      </MDXProvider>
    </Fragment>
  );
};
Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
Page.defaultProps = {
  children: PropTypes.noop,
  title: null,
};

export default Page;
