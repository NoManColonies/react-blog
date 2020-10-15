import styled from 'styled-components'

interface ContainerPropType {
  isScroll: boolean;
}

export const Container = styled.div`
  width: 100%;
  position: ${(props: ContainerPropType): string =>
    props.isScroll ? 'fixed' : 'static'};
  z-index: 100;
  background-color: ${(props: ContainerPropType): string =>
    props.isScroll ? '#fff' : 'transparent'};
  transition: background-color 500ms;
`

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 2rem;
`

export const Logo = styled.div``

export const ActionContainer = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

export const Action = styled.li`
  padding: 0 1rem;
  color: #000;
  text-decoration: none;
`
