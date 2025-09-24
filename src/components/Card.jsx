
const Card = ({ data }) => {
  const handleButtonClick = () => {
    window.location.href = 'https://lego.com'

  }
  return (
    <div className="card">
      <img src={data.imageUrl} alt={data.setName} />
      <h2>{data.setName}</h2>
      <h4>{data.theme}</h4>
      <button onClick={handleButtonClick}>View Set {data.id}</button>
    </div >
  )
}

export default Card
