import React from 'react'
import styled from 'styled-components'

import CenterContent from '../components/CenterContent'

const Contact = () => (
  <CenterContent>
    <ContactWrapper>
      <Info>
        <h1>Contact</h1>
        <FirstParagraph>
          If you're contacting me about work, then it'd be great if you could
          include the details of the project, budget, deadline etc. to help
          speed up the process. Also feel free to get in touch if you have any
          questions.
        </FirstParagraph>
        <SecondParagraph>
          If you would rather not use the form, you can email me directly:
          &nbsp; <a href="mailto:hi@joesutton.co">hi@joesutton.co</a>
        </SecondParagraph>
      </Info>
      <ContactForm />
    </ContactWrapper>
  </CenterContent>
)

const ContactForm = () => (
  <Form>
    <label>
      <span>Name</span>
      <input type="text" id="name" />
    </label>
    <label>
      <span>Email Address</span>
      <input type="email" id="email" />
    </label>
    <label>
      <span>Subject</span>
      <input type="text" id="subject" />
    </label>
    <label>
      <span>Message</span>
      <textarea
        name="message"
        id="message"
        placeholder="Let me know all the details as well as timeline and budget..."
      />
    </label>
    <button>
      <span>Send</span> &gt;
    </button>
  </Form>
)

const ContactWrapper = styled.div`
  margin: 10rem 4rem 5rem 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Info = styled.div`
  h1 {
    font-size: 50px;
  }

  p {
    width: 450px;
    color: #707070;
    line-height: 30px;
  }
`

const FirstParagraph = styled.p`
  margin: 4rem 0 6rem 0;
`

const SecondParagraph = styled.p`
  a {
    color: black;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    margin-top: 1.25rem;

    span {
      font-size: 22px;
      margin-bottom: 0.75rem;
    }

    /* Remove top margin on name field */
    &:first-child {
      margin-top: 0;
    }
  }

  input,
  textarea {
    border: 2px solid #eaeaea;
    font-size: 22px;
    padding: 1rem;
    outline: none;
    transition: 0.15s ease-in-out;

    &:focus {
      border: 2px solid black;
    }
  }

  textarea {
    resize: none;
    height: 12rem;
  }

  button {
    text-align: right;
    margin-top: 1rem;
    font-size: 30px;

    span {
      font-size: 30px;
      display: inline-block;
      transition: 0.15s ease-in-out;
    }

    &:hover,
    &:focus {
      span {
        transform: translateX(-0.5rem);
      }
    }
  }
`

export default Contact
