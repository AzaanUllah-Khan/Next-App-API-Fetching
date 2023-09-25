export default async function ProductsArrSingle(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data =  res.json()
    return data
  }