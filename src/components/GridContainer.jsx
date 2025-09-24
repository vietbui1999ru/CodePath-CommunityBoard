import Card from './Card'

const GridContainer = ({ data }) => {
  return (
    <div className="grid-container">
      {parseData(data)}
    </div>
  )
}

const parseData = (data) => {
  return (data.map((item) => {
    return (<Card key={item.id} data={item} />)
  }
  )
  )
}

export default GridContainer
