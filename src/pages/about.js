import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Slider from 'react-slick'

import CenterContent from '../components/CenterContent'

import logoWhite from '../assets/images/logo-white.svg'
import xButton from '../assets/images/xButton.svg'

import { siteTitle } from '../constants'

const About = () => (
  <CenterContent>
    <Helmet title={`${siteTitle} - About`} />
    <AboutWrapper>
      <Header>
        <Link to="/">
          <img src={xButton} alt="X" />
          <span>Close</span>
        </Link>
        <Link to="/">
          <img src={logoWhite} alt="Joe Sutton's logo" />
        </Link>
      </Header>
      <AboutMain>
        <MainCopy>
          Delivering bold design solutions that balance form and function.
          Helping to tell your brand's story, and aiding your business reach its
          goals.
        </MainCopy>
        <Columns>
          <AboutMe>
            <h2>About Me</h2>
            <p>
              I’m a Freelance Designer based near London, who specialises in
              branding and digital design work. I’ve worked with companies of
              all sizes, from all across the world. Helping bring their ideas to
              life or being a part of their brands evolution.
            </p>
            <div>
              <a href="https://twitter.com/JosephSutton">Twitter</a>
              -
              <a href="https://www.instagram.com/josephsutton_">Instagram</a>
              -
              <a href="https://dribbble.com/JoeSutton">Dribbble</a>
              -
              <a href="https://www.facebook.com/joe.sutton.581">Facebook</a>
              -
              <a href="https://www.behance.net/JoeSutton">Behance</a>
            </div>
          </AboutMe>
          <Services>
            <h2>Services</h2>
            <p>
              Digtial Design, User Interface Design, User Experience Design,
              Editorial Design, Branding, Lettering, Iconography, Project
              Management, Strategy.
            </p>
            <p>
              I’ve probably missed some things so get in touch. Even if I can’t
              provide the service you’re after I know lots of people that can
              help. I’m more than happy to put a team together, to get the work
              done under one project, taking the stress away from you finding
              people you can trust.
            </p>
          </Services>
          <Testimonials>
            <h2>Testimonials</h2>
            <Slider dots={true} speed={400} arrows={false}>
              <div>
                <p>
                  "We commissioned Joe to refresh our wordmark and he hit it out
                  of the park. He was very easy to work with along the way,
                  notifying us of his work schedule and when to expect updates.
                  He listened to our revision requests and ultimately delivered
                  a great new identity for our brand. If you are in the market
                  for a new creative wordmark for your brand, Joe is your man."
                </p>
                <span>Scott Anderson, Threadbird</span>
              </div>
              <div>
                <p>
                  “I enjoyed working with Joe. During the whole time of the
                  project, he demonstrated a high level of talent, skill,
                  professionalism and an overall profound understanding of our
                  brand. I recommend working with him. ”
                </p>
                <span>Deniz Caglayan, Lunchio</span>
              </div>
              <div>
                <p>
                  "Joe's a young designer with a bright future. Approachable,
                  talented and professional he's got the perfect make up of a
                  great designer. The identity he created for us was off the
                  chart and looks awesome. So so happy with his work."
                </p>
                <span>Jonathan Munn, Keen</span>
              </div>
              <div>
                <p>
                  "Joe helped us change Atdaa's logo. He understood the problem
                  at a glance and came up with many ideas along the way. I was
                  impressed with his ability to adapt to our never ending
                  demands and major changes in the design direction."
                </p>
                <span>Kaan L Caglar, Atdaa</span>
              </div>
            </Slider>
          </Testimonials>
        </Columns>
      </AboutMain>
    </AboutWrapper>
  </CenterContent>
)

const AboutWrapper = styled.div`
  padding: 0 5rem 5rem 5rem;

  @media (max-width: 1800px) {
    padding: 0 6vw 6vw 6vw;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;

  a {
    display: flex;
    align-items: center;
    color: white;
    background-color: black;
    font-size: 22px;

    img {
      height: 1.5rem;
    }

    span {
      font-size: 22px;
      margin-left: 0.75rem;
    }
  }
`

const AboutMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const MainCopy = styled.p`
  font-size: 50px;
  width: 915px;
  margin: 10rem 0;

  @media (max-width: 1050px) {
    width: 100%;
  }
`

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 6rem;
  grid-row-gap: 2rem;

  h2 {
    font-size: 30px;
    margin-bottom: 1.5rem;
  }

  p {
    color: #767676;
    line-height: 30px;
  }

  div {
    a {
      color: #767676;
      transition: 0.15s ease-in-out;

      &:hover {
        color: white;
      }
    }
  }

  @media (max-width: 1550px) {
    grid-template-columns: [start] 1fr [middle] 1fr [end];
  }
`

const AboutMe = styled.div`
  overflow-x: hidden;

  p {
    margin-bottom: 2rem;
  }

  div {
    a {
      margin: 0 0.25rem;
    }

    a:first-child {
      margin: 0 0.25rem 0 0;
    }
  }
`

const Services = styled.div`
  p {
    margin-bottom: 2rem;
  }
`
const Testimonials = styled.div`
  overflow-x: hidden;

  @media (max-width: 1550px) {
    grid-column-start: start;
    grid-column-end: end;
  }

  div.slick-slide {
    span {
      display: block;
      margin-top: 1rem;
      color: #767676;
    }
  }
`

export default About
