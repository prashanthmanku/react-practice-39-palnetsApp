import './index.css'

const PlanetItem = props => {
  const {eachItem} = props
  const {name, description, imageUrl} = eachItem

  return (
    <div className="each-slide h">
      <img src={imageUrl} alt={`planet ${name}`} className="slide-img" />
      <h1 className="slide-heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
