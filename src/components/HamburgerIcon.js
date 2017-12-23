import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const HamburgerIcon = () => (
  <Link to="/menu">
    <Hamburger>
      <span />
      <span />
      <span />
    </Hamburger>
  </Link>
)

export default HamburgerIcon

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

/*

#hamburger.open span
  &:nth-child(1)
    transform rotate(45deg)
    top 0px
    left 10px
  &:nth-child(2)
    width 0%
    opacity 0
  &:nth-child(3)
    transform rotate(-45deg)
    top 29px
    left 10px

*/
