import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Hamburger = styled.div`
  width: 25px;
  height: 27px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: black;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    transform-origin: left center;

    &:nth-child(1) {
      top: 4px;
    }
    &:nth-child(2) {
      top: 12px;
    }
    &:nth-child(3) {
      top: 20px;
    }
  }
`

class HamburgerIcon extends React.Component {
  render() {
    return (
      <Link to="/menu">
        <Hamburger>
          <span />
          <span />
          <span />
        </Hamburger>
      </Link>
    )
  }
}

export default HamburgerIcon
