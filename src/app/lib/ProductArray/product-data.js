export default async function ProductsArr() {
    const res = await fetch('https://fakestoreapi.com/products')
    const data =  res.json()
    return data
  }