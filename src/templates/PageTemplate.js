import * as React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/Container'
import Card from '../components/Card'


const PageTemplate = ({pageContext, data}) => {
    const {currentPage, numPages} = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPAge === numPages;
    const prevPage = currentPage - 1 === 1 ? '/' : `/${currentPage - 1}`;
    const nextPage = `/${currentPage + 1}`;

    const blogPosts = data.allMdx.edges;

}