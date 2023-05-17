import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    // arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    className: 'width h',
    // fade: true,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    //     cssEase: 'linear',
  }
  return (
    <div className="app-container" data-testid="planets">
      <div className="width-container">
        <h1 className="main-heading">PLANETS</h1>

        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem eachItem={each} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default PlanetsSlider
