import React from 'react'
import styled from 'styled-components'
import { Title, SubTitle } from '../components/Typography'
import BackgroundBlock from '../components/BackgroundBlock'
import backgroundImage from '../assets/bg.jpg'

const Button = styled.button`
  background-color: transparent;
  padding: 1rem 1.5rem;
  border: #fff solid 1px;
  border-radius: 8px;
  color: #fff;
  margin: 1rem;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: #fff;
    color: #000;
    transition: background-color 300ms;
  }

  &:visited {
    color: #fff;
  }
`

const Content = styled.div`
  padding: 2.5rem 3rem;
`

function Home () {
  const array: string[] = new Array(1000).fill(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
  )

  return (
    <>
      <BackgroundBlock src={backgroundImage}>
        <Title>AAA</Title>
        <SubTitle>BBB</SubTitle>
        <Button as='a' href='#content'>
          Look at me!
        </Button>
      </BackgroundBlock>
      <Content id='content'>
        {array.map((elem) => (
          <p key={elem}>{elem}</p>
        ))}
      </Content>
    </>
  )
}

export default Home
