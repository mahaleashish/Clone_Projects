import React from 'react'
import "./Home.css"
import HeaderUpper from '../Templetes/headerupper/HeaderUpper'
import HeaderDown from '../Templetes/headerdown/HeaderDown'
import TextArea from '../Templetes/textarea/TextArea'

const Home = () => {
  return (
    <>
    <div className='home'>
    <HeaderUpper/>
     <HeaderDown/>
     <TextArea/>
      </div>
    </>
  )
}

export default Home