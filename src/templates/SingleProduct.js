import * as React from 'react'
import Container from '../components/Container'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const SingleProduct = ({data}) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Container pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
      {/* <h1>Hello world</h1> */}
    </Container>
  )
}

export const query = graphql`
query SingleProductQuery($slug: String) {
  mdx(slug: {eq: $slug}) {
    id
    body
    slug
    frontmatter {
      date(formatString: "MMMM D, YYYY")
      title
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
      hero_image_alt
    }
  }
}
  
`

export default SingleProduct