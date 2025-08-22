import React from 'react'
import ProductPageBanner from '../components/ProductPageBanner'
import HomeProduct from '../components/HomeProduct'
import ProductForm from '../components/ProductForm'
import ProductPageSpec from '../components/ProductPageSpec'
import ProductPageProductsSection from '../components/ProductsSection'


const Product = () => {
  return (
    <>
 <ProductPageBanner/>
<ProductPageProductsSection/>
 <ProductPageSpec/>
 <ProductForm/>
 </>
  )
}

export default Product
