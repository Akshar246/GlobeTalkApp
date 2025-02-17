import React from 'react'
import Header from './Header'
import Title from '../shared/Title'

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
      <div>
        <Title title={"GlobeTalk"}/>
        <Header/>
          <WrappedComponent {...props} />
          <div>Footer</div>
      </div>
      </>
    )
  }
}

export default AppLayout 