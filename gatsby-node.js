const path = require(`path`)

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const productTemplate = path.resolve(`src/templates/SingleProduct.js`);
    // const pageTemplate = path.resolve(`src/templates/PageTemplate.js`);
    const {data} = await graphql(`
      query SlugsQuery{
        allMdx(filter: {fileAbsolutePath: {regex: "/src/products/"}}) {
          nodes {
            slug
          }
        }
      }
    `)

    console.log('dataNode', data);

    // const productPerPage = 3;
    // const numPages = Math.ceil(result.allMdx.nodes.length / productPerPage);

    // // page with paginated posts
    // Array.from({ length: numPages }).forEach((_, index) => {
    //     createPage({
    //         path: index === 0 ? `/` : `/${index + 1 }`,
    //         component: pageTemplate,
    //         context: {
    //           limit: productPerPage,
    //           skip: index * productPerPage,
    //           numPages,
    //           currentPage: index + 1
    //         },
    //       })
    // })
    
    // single post
    data.allMdx.nodes.forEach(node => {
      createPage({
        path: `/products/${node.slug}`,
        component: productTemplate,
        context: {slug: node.slug}
      })
    })
  }