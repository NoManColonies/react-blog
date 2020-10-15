import React, { ComponentType } from 'react'
import { Helmet } from 'react-helmet'

function withHelmet<T> (title: string) {
  return (Component: ComponentType<T>) => (props: T) => (
    <>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css2?family=Kanit&display=swap'
          rel='stylesheet'
        />
        <title>{title}</title>
      </Helmet>
      <Component {...props} />
    </>
  )
}

export default withHelmet
