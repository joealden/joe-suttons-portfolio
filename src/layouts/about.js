import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import '../assets/styles/index.css'

class AboutWrapper extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
  }

  render() {
    const { children } = this.props

    return (
      <BlackBorder>
        <main>{children()}</main>
      </BlackBorder>
    )
  }
}

const BlackBorder = styled.div`
  border-top: 5px solid black;
`

export default AboutWrapper
