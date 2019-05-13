import React from 'react';
import { graphql, Link } from 'gatsby';
import { Page } from 'layout';

function BlogIndex({ data }) {
  const { edges: posts } = data.allMdx;
  return (
    <Page>
      {posts.map(({ node }) => {
        const { title, author } = node.frontmatter;
        return (
          <div key={node.id}>
            <header>
              <div>{title}</div>
              <div>Posting By {author}</div>
            </header>
            <p>{node.excerpt}</p>
            <Link to={node.fields.slug}>View Article</Link>
            <hr />
          </div>
        );
      })}
    </Page>
  )
};

export default BlogIndex;

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            author
          }
        }
      }
    }
  }
`;
