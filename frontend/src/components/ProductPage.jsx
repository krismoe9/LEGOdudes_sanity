import { Profiler, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import client from "../helpers/client"


export default function productPage(){
    const { slug } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        async function fetchProduct() {
            const tempProduct = await client.fetch('*[_type == "product" && slug.current == $slug][0]{productname, price, description, "imageURL": productimage.asset->url}',
                { slug }
            ) 
            setProduct(tempProduct)
        }
        
        if (slug) {
            fetchProduct()
        }
    }, [slug])

    if(!product){
        return <p>Laster inn produkt</p>
    }

    
    return (
        <main>
            <h1>{product.productname}</h1>
            <img src={product.imageURL} alt={product.productname} />
            <p>{product.description}</p>
            <p>Pris: {product.price},-</p>
        </main>
    )
}