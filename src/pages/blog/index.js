import * as React from 'react'
import Container from '../../components/Container'
import { graphql, Link } from 'gatsby'

const BlogPage = ({data}) => {
  // console.log('data', data)
  return (
    <Container pageTitle="My Blog Posts">
      <ul>
        {
         data.allMdx.nodes.map((node) => (
          //  console.log('node', node)
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            
          </article>
        ))
        }
      </ul>
    </Container>
  )
}

export const query = graphql`
query BlogListQuery{
  allMdx(filter: {fileAbsolutePath: {regex: "/src/blog/"}}) {
    nodes {
      slug
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      id
    }
  }
}
`

export default BlogPage