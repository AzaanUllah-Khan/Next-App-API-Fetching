"use client"
import Link from "next/link"
import ProductsArr from "../lib/ProductArray/product-data"
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

export default async function Product() {
var style={
  width: '95%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '10px',
  marginBottom: '0',
}
  var products = await ProductsArr()

  return (
    <>
      {
        products.map((data) => {
          return (
            <>
              {[
                'primary'
              ].map((variant) => (
                <Alert key={variant} variant={variant} className="d-flex justify-content-between align-items-center" style={style}>
                  {data.title}
                  <Button variant="outline-light"><Link href={`/Product/${data.id}`} className="nav-link">View Details</Link></Button>
                </Alert>
              ))}
            </>
          )
        })
      }
    </>
  )
}