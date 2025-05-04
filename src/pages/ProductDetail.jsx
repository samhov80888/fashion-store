import { useParams } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'
import '../assets/styles/Pages.css'
import { useEffect } from 'react'
import ProductsController from '../controllers/productsController'
import { singleProductSelector } from '../store/selectors/productsSelector'
import ProductDetailInfo from '../components/ProductDetail/ProductDetailInfo'
import Links from '../components/Links/Links'
import BrendDescription from '../components/BrandDescription/BrendDescription'
import Features from '../components/Features/Features'
import DealOfMount from '../components/DealOfMount/DealOfMount'
import Subscribe from '../components/Subscribe/Subscribe'

function ProductDetail() {
  const product = useSelector(singleProductSelector, shallowEqual)

  const { id } = useParams()

  useEffect(() => {
    ProductsController.getSingleProduct(id)
  }, [])

  return (
    <div className="page">
      {
        product.length !== 0 ?
          <>
            <ProductDetailInfo product={product} />
            <Links />
            <BrendDescription product={product} />
            <Features />
            <DealOfMount />
            <Subscribe />
          </> :
          <div style={{
            textAlign: 'center'
          }}>
            <h1>Product</h1>
          </div>
      }

    </div >
  )
}

export default ProductDetail
