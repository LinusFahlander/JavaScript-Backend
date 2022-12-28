import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BannerGridSectionTop from '../sections/BannerGridSectionTop'
import BannerGridSectionBot from '../sections/BannerGridSectionBot'
import ShowcaseSection from '../sections/ShowcaseSection'
import BannerCommercialSection from '../sections/BannerCommercialSection'
import SupportBadgeSection from '../sections/SupportBadgeSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import ProductTiles from '../sections/ProductTiles'
import ProductCard from '../components/ProductCard'



const HomeView: React.FC = () => {
  const {featured, getFeatured} = useProductContext() as ProductContextType
  const {twentyNine, getTwentyNine} = useProductContext() as ProductContextType
  const {fortyNine, getFortyNine} = useProductContext() as ProductContextType

  useEffect(() => {
    getFeatured(8)
  }, [])

  useEffect(() => {
    getTwentyNine(4)
  }, [])

  useEffect(() => {
    getFortyNine(4)
  }, [])
  
  return (
    <>
      <header>
        <MainMenuSection />
        <ShowcaseSection />
      </header>
      <ProductTiles title="Featured Products" items={featured} />
      <BannerCommercialSection />
      <BannerGridSectionTop title="" items={twentyNine} />
      <BannerGridSectionBot title="" items={fortyNine} />
      <SupportBadgeSection />
      <FooterSection />
    </>
  )
}

export default HomeView