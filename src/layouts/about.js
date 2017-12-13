import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import '../assets/styles/index.css'

const AboutWrapper = ({ children }) => {
  document.body.style.backgroundColor = 'black'
  document.body.style.color = 'white'

  return (
    <BlackBorder>
      <main>{children()}</main>
    </BlackBorder>
  )
}

const BlackBorder = styled.div`
  border-top: 5px solid black;
`

export default AboutWrapper
