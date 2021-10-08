import * as React from 'react'
// import { Link, useStaticQuery, graphql } from 'gatsby'
import { container,heading } from './container.module.css'
import {Nav} from '../components'

export const Container = ({pageTitle, children}) => {
    return( <div className={container}>
        <Nav />
        <main>
                {/* <title>{pageTitle}</title> */}
                <h1 className={heading}>{pageTitle}</h1>
                {children}
        </main>
    </div>)
}

export default Container;