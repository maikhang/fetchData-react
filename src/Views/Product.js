import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'

export default function Product() {
    const { id } = useParams();
    console.log(id);
    const url = `https://5fdf0c80eca1780017a30800.mockapi.io/product/${id}`;
    const [product, setProduct] = useState({
        loading: false,
        data: null
    });

    let content = null;

    useEffect(() => {
        setProduct({
            loading: true,
            data: null
        });
        axios.get(url)
            .then(response => {
                setProduct({
                    loading: false,
                    data: response.data
                })
            });
    }, [url]);

    if (product.loading) {
        content = <Loader></Loader>
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
