import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface BackgroundImagePropsType {
  src: string;
  height: string;
}

interface BackgroundBlockType {
  src: string;
  height?: string;
  children?: ReactElement[] | ReactElement;
}

const BackgroundImage = styled.div`
  height: ${(props: BackgroundImagePropsType): string => props.height};
  width: auto;
  background-image: url(${(props: BackgroundImagePropsType): string =>
    props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  position: relative;
`

const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function BackgroundBlock({
  src,
  height = '100vh',
  children
}: BackgroundBlockType): ReactElement {
  return (
    <div>
      <BackgroundImage src={src} height={height}>
        <BackgroundOverlay>{children}</BackgroundOverlay>
      </BackgroundImage>
    </div>
  )
}

export default BackgroundBlock
