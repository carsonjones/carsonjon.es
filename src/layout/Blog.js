import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Page from './Page';

const Blog = ({ children, pageContext }) => {
  console.log(pageContext);
  const { title } = pageContext.frontmatter;
  return (
    <Page title={title}>
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
