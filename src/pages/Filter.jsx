// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchFilteredProducts } from '../redux/actions/productsActions'
// import ProductCard from '../components/ProductCard'
// import '../assets/styles/Pages.css'

// function Filter() {
//   const dispatch = useDispatch()
//   const { products, loading, error } = useSelector((state) => state.products)

//   const [category, setCategory] = useState('')
//   const [price, setPrice] = useState({ min: 0, max: 1000 })

//   useEffect(() => {
//     dispatch(fetchFilteredProducts({ category, price }))
//   }, [category, price, dispatch])

//   const handleCategoryChange = (e) => setCategory(e.target.value)
//   const handlePriceChange = (e) => setPrice(prev => ({ ...prev, [e.target.name]: +e.target.value }))

//   return (
//     <div className="page">
//       <h1>Filter Products</h1>

//       <div className="filters">
//         <select onChange={handleCategoryChange} value={category}>
//           <option value="">Select Category</option>
//           <option value="electronics">Electronics</option>
//           <option value="jewelery">Jewelery</option>
//           <option value="men's clothing">Men's Clothing</option>
//           <option value="women's clothing">Women's Clothing</option>
//         </select>

//         <input
//           type="number"
//           name="min"
//           value={price.min}
//           placeholder="Min Price"
//           onChange={handlePriceChange}
//         />
//         <input
//           type="number"
//           name="max"
//           value={price.max}
//           placeholder="Max Price"
//           onChange={handlePriceChange}
//         />
//       </div>

//       {loading ? (
//         <div>Loading...</div>
//       ) : error ? (
//         <div>Error: {error}</div>
//       ) : (
//         <div className="products-grid">
//           {products.map((p) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default Filter
