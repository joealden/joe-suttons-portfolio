import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Media from 'react-media'

import CenterContent from '../components/CenterContent'

import logoWhite from '../assets/images/logo-white.svg'
import xButton from '../assets/images/xButton.svg'

import { siteTitle } from '../constants'

const Menu = () => (
  <div>
    <Helmet title={`${siteTitle} - Menu`} />
    <Media query="(max-width: 480px)">
      {matches =>
        matches ? (
          <MenuWrapper>
            <Header>
              <Link to="/">
                <img src={xButton} alt="X" />
              </Link>
              <Link to="/">
                <img src={logoWhite} alt="Joe Sutton's logo" />
              </Link>
            </Header>
            <Navigation>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </Navigation>
            <Footer>
              <a href="https://twitter.com/JosephSutton">Twitter</a>
              -
              <a href="https://www.instagram.com/josephsutton_">Instagram</a>
              -
              <a href="https://dribbble.com/JoeSutton">Dribbble</a>
              -
              <a href="https://www.facebook.com/joe.sutton.581">Facebook</a>
              -
              <a href="https://www.behance.net/JoeSutton">Behance</a>
            </Footer>
          </MenuWrapper>
        ) : (
          <MenuError>
            Sorry, your screen is too big to display the mobile menu.
          </MenuError>
        )
      }
    </Media>
  </div>
)

export default Menu

const MenuWrapper = styled.div`
  position: fixed;
  box-sizing: border-box;
  border-top: 5px solid black;
  height: 100vh;
  padding: 1.5rem 6vw 1.5rem 6vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    color: white;
    background-color: black;
    font-size: 22px;

    img {
      height: 1.5rem;
    }
  }
`

const Navigation = styled.nav`
  ul {
    li {
      list-style: none;

      &:not(last-child) {
        margin-bottom: 1.25rem;
      }

      a {
        font-size: 50px;
        color: white;
      }
    }
  }
`

const Footer = styled.footer`
  text-align: center;

  a {
    margin: 0 0.25rem;
    color: #767676;
    transition: 0.15s ease-in-out;

    &:hover {
      color: white;
    }

    &:first-child {
      margin: 0 0.25rem 0 0;
    }
  }
`

const MenuError = styled.div`
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  padding: 5rem;
`
