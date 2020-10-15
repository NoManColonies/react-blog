import React, { ReactElement } from 'react'
import useScroll from '../../utils/useScroll'
import { Container, Wrapper, ActionContainer, Action, Logo } from './styled'
import { Link } from 'react-router-dom'

function NavBar(): ReactElement {
  const isScroll = useScroll({})

  return (
    <Container isScroll={isScroll}>
      <Wrapper>
        <Logo>Logo</Logo>
        <ActionContainer>
          <Action>
            <Link to='/'>Home</Link>
          </Action>
          <Action>
            <Link to='/about'>About</Link>
          </Action>
          <Action>
            <Link to='/contact'>Contact</Link>
          </Action>
          <Action>
            <Link to='/story'>Story</Link>
          </Action>
        </ActionContainer>
      </Wrapper>
    </Container>
  )
}

export default NavBar
