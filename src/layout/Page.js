import React, { Fragment, Component } from 'react';
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

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    if (typeof window !== 'undefined') { window.addEventListener('resize', this.updateDimensions); }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') { window.removeEventListener('resize', this.updateDimensions); }
  }

  updateDimensions = () => {
    if (typeof window !== 'undefined') { this.setState({ windowWidth: window.innerWidth, }); }
  }

  render() {
    const { children } = this.props;
    const { windowWidth } = this.state;
    return (
      <Fragment>
        <BreakPointDebugger width={windowWidth} />
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
