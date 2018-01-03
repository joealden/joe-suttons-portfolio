import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Media from 'react-media'

import CenterContent from '../components/CenterContent'
import HamburgerIcon from '../components/HamburgerIcon'
import logoBlack from '../assets/images/logo-black.svg'

import '../assets/styles/index.css'

class Header extends React.Component {
  componentDidMount() {
    if (this.nav) {
      const { nav, navCircle } = this

      const circleCoords = navCircle.getBoundingClientRect()
      const circleWidth = circleCoords.width

      function handleNavLeave() {
        navCircle.style.setProperty('opacity', '0')
        navCircle.style.setProperty('transition', 'opacity 0.15s ease-in-out')
      }

      function handleLinkEnter() {
        const coords = this.getBoundingClientRect()
        const left = coords.left + coords.width / 2 - circleWidth / 2
        const top = coords.bottom + 2

        navCircle.style.setProperty('left', `${left}px`)
        navCircle.style.setProperty('top', `${top}px`)
        navCircle.style.setProperty('opacity', '1')

        // Ensures that this property is set after the transform has complete
        setTimeout(
          () => navCircle.style.setProperty('transition', '0.15s ease-in-out'),
          0
        )
      }

      nav.addEventListener('mouseleave', handleNavLeave)

      for (let link of nav.children) {
        link.addEventListener('mouseenter', handleLinkEnter)
      }
    }
  }

  render() {
    return (
      <CenterContent>
        <HeaderWrapper>
          <Navigation>
            <Media query="(min-width: 480px)">
              {matches =>
                matches ? (
                  <FullNavWrapper>
                    <div ref={node => (this.nav = node)}>
                      <Link
                        to="/about"
                        activeStyle={{
                          color: 'black'
                        }}
                      >
                        About
                      </Link>
                      <Link
                        to="/contact"
                        activeStyle={{
                          color: 'black'
                        }}
                      >
                        Contact
                      </Link>
                    </div>
                    <svg
                      ref={node => (this.navCircle = node)}
                      id="circle-svg"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="white"
                        stroke="black"
                      />
                    </svg>
                  </FullNavWrapper>
                ) : (
                  <HamburgerIcon />
                )
              }
            </Media>
          </Navigation>
          <Link to="/">
            <LogoWrapper src={logoBlack} alt="Joe Sutton's logo" />
          </Link>
        </HeaderWrapper>
      </CenterContent>
    )
  }
}

class TemplateWrapper extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  }

  render() {
    const { children } = this.props

    return (
      <BlackBorder>
        <Header />
        <main>{children()}</main>
      </BlackBorder>
    )
  }
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 5rem;

  @media (max-width: 1800px) {
    margin: 1.5rem 6vw;
  }
`

const BlackBorder = styled.div`
  border-top: 5px solid black;
`

const Navigation = styled.nav``

const LogoWrapper = styled.img`
  height: 1.5rem;
  vertical-align: middle;
`

const FullNavWrapper = styled.div`
  div a {
    vertical-align: middle;
    color: #525252;
    transition: 0.15s ease-in-out;

    &:hover {
      color: black;
    }
  }

  div a[href='/about'] {
    margin-right: 2.5rem;
  }

  svg {
    position: absolute;
    width: 10px;
    top: 0;
    opacity: 0;
    transition: opacity 0.15s ease-in-out;

    circle {
      stroke-width: 30px;
    }
  }
`

export default TemplateWrapper
