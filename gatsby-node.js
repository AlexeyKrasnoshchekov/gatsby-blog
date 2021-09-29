// export.createPages = async ({actions. graphql}) => {
//     const {data} = await graphql`
//         query {
//             allMdx(sort: {fields: rawBody, order: ASC}) {
//                 edges {
//                   node {
//                     frontmatter {
//                       slug
//                     }
//                     id
//                   }
//                 }
//             }
//         }
//     `
//     // create paginated pages for posts

//     const postPerPage = 3;

//     const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);


//     Array.from({length: numPages }).forEach((_, index) => {
//         actions.createPages({
//             path: index === 0 ? '/' : `/${index + 1}`,
//             component: require.resolve("./src/templates/allPosts.js"),
//             context: {
//                 limit: postPerPage,
//                 skip: index * postPerPage,
//                 numPages,
//                 currentPage: i + 1,
//             }
//         })
//     })

//     //create single blogpost
//     data.allMdx.edges.forEach(edge => {
//         const slug = edge.node.frontmatter.slug;
//         const id = edge.node.id;
//         actions.createPages({
//             path: slug,
//             component: require.resolve(`./src/templates/singlePost.js`),
//             context: {id}
//         })
//     })

// }