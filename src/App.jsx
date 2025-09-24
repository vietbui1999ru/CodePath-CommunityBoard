import './App.css'
import Banner from './components/Banner.jsx'
import Title from './components/Title.jsx'
import GridContainer from './components/GridContainer.jsx'
import legoData from './data/legoList.js'

function App() {

  return (
    <>
      <Banner></Banner>
      <Title></Title>
      <GridContainer data={legoData} />
    </>
  )
}

export default App
