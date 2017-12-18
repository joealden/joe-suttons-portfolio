import React from 'react'
import styled from 'styled-components'

const ProjectItem = ({ src, alt, title, info }) => (
  <ImageWrapper>
    <Details>
      <h4>{title}</h4>
      <span>{info}</span>
    </Details>
    <Img src={src} alt={alt} />
  </ImageWrapper>
)

const ImageWrapper = styled.div`
  position: relative;
`

const Img = styled.img`
  width: 100%;
`

const Details = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50px;
  color: white;

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
`

export default ProjectItem
