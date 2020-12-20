import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

export default function Product() {
    const { id } = useParams();
    const url = `https://5fdf0c80eca1780017a30800.mockapi.io/product/${id}`;
    let product = useAxiosGet(url);

    let content = null;

    if (product.loading) {
        content = <Loader></Loader>
    }

    if (product.error) {
        content = <p>Somethings went wrong, pls try again</p>
    }


    if (product.data) {
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
                <div>
                    <img
                        src={product.data.image}
                        alt={product.data.name}
                    />
                </div>
                <div className="text-xl font-bold mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.desciption}
                </div>
            </div>
    }

    return (
        <div>
            <h1>{content}</h1>
        </div>
    )
}
