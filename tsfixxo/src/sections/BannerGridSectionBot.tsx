import ProductCard from '../components/ProductCard'
import RightImageSquare from '../assets/images/right-2-for-usd.svg'
import { ProductItem } from '../models/ProductModels'

interface BannerGridSectionType {
  title?: String,
  items: ProductItem[]
}

const BannerGridSection: React.FC<BannerGridSectionType> = ({title, items = []}) => {
  return (
    <section className="banner-grids container">
      <div className="bot-banner">
        <div  className="product-grid">
          <h1>{title}</h1>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 g-4">    
            {
              items.map( (product: ProductItem) => <ProductCard key={product.articleNumber} item={product} />)
            }
          </div>
        </div>
        <div className='for-usd-banner-bot'>
          <img src={RightImageSquare} alt="" />
        </div>
      </div>
    </section>
  )
}

export default BannerGridSection