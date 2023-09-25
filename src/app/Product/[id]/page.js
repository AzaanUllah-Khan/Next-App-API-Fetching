"use client"
import ProductsArrSingle from "@/app/lib/ProductArray/single-product"
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default async function ProductDetails({ params }) {
    var singleProduct = await ProductsArrSingle(params.id)
    console.log(singleProduct);
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Image
                    src={singleProduct.image}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />

                <Card.Body>
                    <Card.Title>{singleProduct.title}</Card.Title>
                    <Card.Text>
                        {singleProduct.description}
                    </Card.Text>
                    <Button variant="primary">$ {singleProduct.price}</Button>
                </Card.Body>
            </Card>
        </>
    )
}