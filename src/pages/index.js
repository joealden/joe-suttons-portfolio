import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Media from 'react-media'

import CenterContent from '../components/CenterContent'
import ProjectItem from '../components/ProjectItem'

import umoroImage from '../assets/images/umoro.jpg'
import stabImage from '../assets/images/stab-mag.jpg'
import countedImage from '../assets/images/counted.jpg'
import letteringImage from '../assets/images/logos-lettering.jpg'

import { siteTitle } from '../constants'

const scrollToTop = () => window.scrollTo(0, 0)

const Home = () => (
  <div>
    <Helmet title={`${siteTitle} - Home`} />
    <CenterContent>
      <TitleAndProjects>
        <Title>
          <h3>Joe Sutton</h3>
          <h1>Freelance Digital and Brand Designer</h1>
        </Title>
        <Projects>
          <ProjectsTitle>
            <h2>Projects</h2>
          </ProjectsTitle>
          <ImageGrid>
            <ProjectItem
              src={umoroImage}
              alt="Man in a hooded coat with a hat on"
              title="Umoro"
              info="A Random Snippet of info on the Work"
            />
            <ProjectItem
              src={stabImage}
              alt="A beach with surfers"
              title="Stab Mag"
              info="A Random Snippet of info on the Work"
            />
            <ProjectItem
              src={countedImage}
              alt="A salad on a plate with a fork"
              title="Counted"
              info="A Random Snippet of info on the Work"
            />
            <ProjectItem
              src={letteringImage}
              alt="A dark background"
              title="Logos and Lettering"
              info="A Random Snippet of info on the Work"
            />
          </ImageGrid>
        </Projects>
      </TitleAndProjects>
    </CenterContent>
    <Contact>
      Have a project in mind, or just a question?
      <Link to="/contact">Get in Touch</Link>
    </Contact>
    <CenterContent>
      <Media query="(min-width: 1200px)">
        {matches =>
          matches ? (
            <Footer>
              <span>Joe Sutton - Freelance Digital and Brand Designer</span>
              <button onClick={scrollToTop}>Back to Top</button>
            </Footer>
          ) : (
            <Footer>
              <span>Joe Sutton - Freelance Digital and Brand Designer</span>
            </Footer>
          )
        }
      </Media>
    </CenterContent>
  </div>
)

const TitleAndProjects = styled.div`
  max-width: 1800px;
  margin: 10rem 5rem 5rem 5rem;

  @media (max-width: 1800px) {
    margin-right: 6vw;
    margin-left: 6vw;
    margin-bottom: 6vw;
  }
  @media (max-width: 600px) {
    margin-top: 8rem;
  }
`

const Title = styled.div`
  h3 {
    padding-bottom: 0.25rem;
    font-size: 22px;
    color: #949494;
  }

  h1 {
    font-size: 50px;
    width: 419px;
    line-height: 60px;
  }

  @media (max-width: 650px) {
    h3 {
      font-size: 3.5vw;
    }

    h1 {
      font-size: 7.5vw;
      width: 70vw;
      line-height: 9vw;
    }
  }
`

const Projects = styled.section`
  margin-top: 0.5rem;
`

const ProjectsTitle = styled.div`
  display: flex;

  h2 {
    font-size: 30px;
    text-align: right;
  }

  &::before {
    align-self: flex-end;
    margin: 0 2rem 6px 0;
    content: '';
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: #f2f2f2;
  }

  @media (max-width: 1800px) {
    &::before {
      margin: 0 3vw 6px 0;
    }
  }
  @media (max-width: 768px) {
    margin-top: 4vw;
    h2 {
      font-size: 5vw;
    }
  }
`

const ImageGrid = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;

  @media (max-width: 1800px) {
    grid-gap: 4vw;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 768px) {
    margin-top: 9vw;
  }
`

const Contact = styled.section`
  background-color: #0c0c0c;
  color: #5e5e5e;
  font-size: 30px;
  padding: 8rem 0;
  text-align: center;

  a {
    color: white;
    font-size: 30px;
    margin-left: 0.5rem;
  }

  @media (max-width: 1000px) {
    font-size: 3vw;
    padding: 12vw 0;

    a {
      font-size: 3vw;
    }
  }

  @media (max-width: 480px) {
    font-size: 4.5vw;
    padding: 25vw 0;

    a {
      display: block;
      margin-top: 1.5vw;
      font-size: 4.5vw;
    }
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  color: #959595;
  margin: 1.5rem 4rem;

  button {
    color: #959595;
  }

  @media (max-width: 1200px) {
    display: block;
    text-align: center;
    margin: 1rem 0;
  }
  @media (max-width: 700px) {
    span {
      font-size: 2.5vw;
    }
  }
  @media (max-width: 480px) {
    span {
      font-size: 3vw;
    }
  }
`

export default Home
