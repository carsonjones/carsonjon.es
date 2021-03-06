import React from 'react';
import PropTypes from 'prop-types';
import Page from './Page';

const Blog = ({ children, pageContext }) => {
  const { title } = pageContext.frontmatter;
  return (
    <Page>
      <article>
        <header>
          <h1>Todo: Main Title Will Go Here</h1>
        </header>
        { children }
      </article>
    </Page>
  )
};
Blog.propTypes = {
  children: PropTypes.node,
};
Blog.defaultProps = {
  children: PropTypes.noop,
};

export default Blog;
