import React from 'react'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

export default function Home() {
    const url = `https://5fdf0c80eca1780017a30800.mockapi.io/product?page=1&limit=5`;
    let products = useAxiosGet(url);

    let content = null;

    if (products.loading) {
        content = <div className="flex justify-center items-center"><Loader></Loader></div>
    }

    if (products.error) {
        content = <p>Somethings went wrong, pls try again</p>
    }


    if (products.data) {
        content =
            products.data.map((product, key) =>
                <div key={product.id}>
                    <ProductCard
                        product={product}
                    />
                </div>
            )
    }

    return (
        <div>
            <p>{content}</p>
        </div>
    )
}
