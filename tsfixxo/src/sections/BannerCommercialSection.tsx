import LeftImage from '../assets/images/pamela-reifs.svg'
import RightImage from '../assets/images/lets-be.svg'

const BannerCommercialSection: React.FC = () => {
  return (
    <section>
        <div className="commercial-banners container">
            <img className="left-banner" src={LeftImage} alt="Pamela reif's" />
            <img className="right-banner" src={RightImage} alt="Let's be" />
        </div>
    </section>
  )
}

export default BannerCommercialSection