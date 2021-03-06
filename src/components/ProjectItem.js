import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const StyledLink = styled(Link)`
  height: 100%;
`

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;

  &:hover {
    img {
      transform: scale(1.075);
    }
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.3s ease-in-out;
`

const Details = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50px;
  color: white;
  z-index: 10;

  h4 {
    font-size: 30px;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 22px;
  }

  @media (max-width: 1800px) {
    bottom: 2.75vw;
    left: 2.75vw;

    h4 {
      font-size: 1.75vw;
      margin-bottom: 0.5vw;
    }

    span {
      font-size: 1.25vw;
    }
  }
  @media (max-width: 1200px) {
    bottom: 5vw;
    left: 5vw;

    h4 {
      font-size: 3vw;
      margin-bottom: 1vw;
    }

    span {
      font-size: 1.75vw;
    }
  }

  @media (max-width: 1000px) {
    bottom: 5vw;
    left: 5vw;

    h4 {
      font-size: 1.75rem;
      margin-bottom: 1.25vw;
    }

    span {
      font-size: 1rem;
    }
  }
  @media (max-width: 500px) {
    h4 {
      font-size: 1.1rem;
      margin-bottom: 0;
    }

    span {
      font-size: 0.75rem;
    }
  }
`

class ProjectItem extends React.Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
  }

  render() {
    const { link, src, alt, title, info } = this.props

    return (
      <StyledLink to={`/work/${link}`}>
        <ImageWrapper>
          <Details>
            <h4>{title}</h4>
            <span>{info}</span>
          </Details>
          <Img src={src} alt={alt} />
        </ImageWrapper>
      </StyledLink>
    )
  }
}

export default ProjectItem
