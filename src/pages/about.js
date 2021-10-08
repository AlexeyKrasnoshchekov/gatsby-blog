// Step 1: Import React
import * as React from 'react'
import Container from '../components/Container'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      {/* <title>About Me</title>
      <h1>About Me</h1> */}
      <Container pageTitle="About Me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Container>
    </main>
  )
}
// Step 3: Export your component
export default AboutPage