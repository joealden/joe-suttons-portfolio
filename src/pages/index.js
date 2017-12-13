import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import CenterContent from '../components/CenterContent'
import ProjectItem from '../components/ProjectItem'

import umoroImage from '../assets/images/umoro.jpg'
import stabImage from '../assets/images/stab-mag.jpg'
import countedImage from '../assets/images/counted.jpg'
import letteringImage from '../assets/images/logos-lettering.jpg'

const scrollToTop = () => window.scrollTo(0, 0)

const Home = () => (
  <div>
    <Helmet title="The Creative Portfolio of Joe Sutton - Home" />
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
      <Footer>
        <span>Joe Sutton - Freelance Digital and Brand Designer</span>
        <button onClick={scrollToTop}>Back to Top</button>
      </Footer>
    </CenterContent>
  </div>
)

const TitleAndProjects = styled.div`
  max-width: 1800px;
  margin: 10rem 4rem 5rem 4rem;
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
`

const ImageGrid = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
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
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  color: #959595;
  margin: 1.5rem 4rem;

  button {
    color: #959595;
  }
`

export default Home
