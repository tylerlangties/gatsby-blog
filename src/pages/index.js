import React from 'react'
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PostListing from '../components/Posts/PostListing';

import Layout from '../components/layout';

const IndexPage = ({data}) => (
  <Layout>
    
    <h2>{data.site.siteMetadata.title}</h2>
    {data.allMarkdownRemark.edges.map(({node}) => {
      return <PostListing key={node.id} post={node} />
    })}
  </Layout>
);

export default IndexPage;

export const query = graphql`
query TestQuery{
  site{
    siteMetadata{
      title
      desc
    }
  }
  allMarkdownRemark(sort: {
    fields: [frontmatter___date],
    order: DESC
  }) {
    edges{
      node{
        id
        frontmatter{
          title
          date
        }
        fields {
          slug
        }
        html
        excerpt
      }
    }
  }
}
`;
