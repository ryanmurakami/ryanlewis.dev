import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import 'typeface-quicksand'
import styles from './courses.module.css'
import Header from '../components/header'
import Footer from '../components/footer'

export const query = graphql`
  query {
    aws: file(relativePath: { eq: "img/aws.png" }) {
      childImageSharp {
        fluid(maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nodejs: file(relativePath: { eq: "img/nodejs.png" }) {
      childImageSharp {
        fluid(maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ({ data }) => <>
  <Header />
  <div className={styles.container}>
    <div className={styles.section}>
      <div className={styles.icon}>
        <Img fluid={data.aws.childImageSharp.fluid} />
      </div>
      <div className={styles.courses}>
        <div className={styles.course}>
          <div className={styles.coursePrompt}>
            Looking for a great overview of AWS?
          </div>
          <div className={styles.courseLink}>
            <a href="https://www.pluralsight.com/courses/aws-developer-big-picture">
              AWS Developer: The Big Picture
            </a>
          </div>
        </div>
        <div className={styles.course}>
          <div className={styles.coursePrompt}>
            Want to get hands-on AWS experience?
          </div>
          <div className={styles.courseLink}>
            <a href="https://www.pluralsight.com/courses/aws-developer-getting-started">
              AWS Developer: Getting Started
            </a>
          </div>
        </div>
        <div className={styles.course}>
          <div className={styles.coursePrompt}>
            Looking to develop AWS applications?
          </div>
          <div className={styles.courseLink}>
            <a href="https://www.pluralsight.com/courses/aws-developer-designing-developing">
              AWS Developer: Designing &amp; Developing
            </a>
          </div>
        </div>
        <div className={styles.course}>
          <div className={styles.coursePrompt}>
            Trying to deploy and secure AWS applications?
          </div>
          <div className={styles.courseLink}>
            <a href="https://www.pluralsight.com/courses/aws-developer-deployment-security">
              AWS Developer: Deployment &amp; Security
            </a>
          </div>
        </div>
        <div className={styles.course}>
          <div className={styles.coursePrompt}>
            Want to build Serverless applications in AWS?
          </div>
          <div className={styles.courseLink}>
            <a href="https://www.pluralsight.com/courses/aws-developer-serverless-architecture-monitoring">
              AWS Developer: Serverless Architecture &amp; Monitoring
            </a>
          </div>
        </div>
        <div className={styles.course}>
          <div className={styles.coursePrompt}>
            Looking to deploy AWS applications automagically?
          </div>
          <div className={styles.courseLink}>
            <a href="https://www.pluralsight.com/courses/practicing-cicd-aws-codepipeline">
              Practicing CI/CD with AWS CodePipeline
            </a>
          </div>
        </div>
        <div className={styles.course}>
          <div className={styles.coursePrompt}>
            Want to learn to build AWS infrastructure the best way?
          </div>
          <div className={styles.courseLink}>
            <a href="https://www.pluralsight.com/courses/aws-cloudformation-stacks-automation-best-practices">
              AWS CloudFormation Stacks &amp; Automation: Best Practices
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.section}>
      <div className={styles.icon}>
        <Img fluid={data.nodejs.childImageSharp.fluid} />
      </div>
      <div className={styles.courses}>
        <div className={styles.course}>
          <div className={styles.coursePrompt}>
            Looking to build a web application in Node.js?
          </div>
          <div className={styles.courseLink}>
            <a href="https://www.pluralsight.com/courses/hapi-building-web-applications">
              Building Web Applications with hapi
            </a>
          </div>
        </div>
        <div className={styles.course}>
          <div className={styles.coursePrompt}>
            Trying to create HTML templates in Node.js?
          </div>
          <div className={styles.courseLink}>
            <a href="https://www.pluralsight.com/courses/handlebars-javascript-templating">
              JavaScript Templating with Handlebars
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</>
