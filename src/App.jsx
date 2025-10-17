import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import FirstBlock from './components/FirstBlock/FirstBlock'
import LongImgBox from './components/LongImgBox/LongImgBox'
import EndBox from './components/EndBox/EndBox'


function App() {

  return (
    <>
      <Header></Header>
      <FirstBlock></FirstBlock>
      <LongImgBox></LongImgBox>
      <EndBox></EndBox>
      
    </>
  )
}

export default App
