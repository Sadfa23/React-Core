import React, { useEffect, useState } from 'react'
import axios from "axios"

function ProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(()=>{
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products)
        setLoading(false)
      } catch (error) {
        console.log("Error fetching products from api", error);
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])
  return (
    <div>
      <ul>
        {products.map((product)=>{
          return <li key={product.id}>{product.title}</li>
        })}
      </ul>
    </div>
  )
}

export default ProductsPage