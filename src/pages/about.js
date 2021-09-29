// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      {/* <title>About Me</title>
      <h1>About Me</h1> */}
      <Layout pageTitle="About Me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    </main>
  )
}
// Step 3: Export your component
export default AboutPage