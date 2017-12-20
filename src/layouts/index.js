import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Media from 'react-media'

import CenterContent from '../components/CenterContent'
import HamburgerIcon from '../components/HamburgerIcon'
import logoBlack from '../assets/images/logo-black.svg'

import '../assets/styles/index.css'

const Header = () => (
  <CenterContent>
    <HeaderWrapper>
      <Navigation>
        <Media query="(min-width: 480px)">
          {matches =>
            matches ? (
              <div>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </div>
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

const Navigation = styled.nav`
  div a {
    vertical-align: middle;
    color: #525252;
    transition: 0.15s ease-in-out;

    &:not(last-child) {
      margin-right: 2.5rem;
    }

    &:hover {
      color: black;
    }
  }
`

const LogoWrapper = styled.img`
  height: 1.5rem;
  vertical-align: middle;
`

export default TemplateWrapper