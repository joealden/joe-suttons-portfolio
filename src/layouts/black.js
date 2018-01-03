import React from 'react'

import '../assets/styles/index.css'

class BlackWrapper extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
  }

  render() {
    const { children } = this.props

    return <main>{children()}</main>
  }
}

export default BlackWrapper
