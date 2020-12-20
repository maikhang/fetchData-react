import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
    return (
        <div className="border mb-3 rounded overflow-hidden">
            <Link to={`/product/${props.product.id}`}>
                <div
                    style={{
                        'backgroundImage': `url('${props.product.image}')`
                    }}
                    className="w-full h-64 bg-blue bg-cover"
                >
                </div>
            </Link>
            <div className="p-3">
                <Link to={`/product/${props.product.id}`}>
                    <h3 className="font-bold text-xl mb-2">{props.product.name}</h3>
                    <div className="font-bold mb-3">
                        ${props.product.price}
                    </div>
                    <div className="mb-2">
                        {props.product.desciption}
                    </div>
                    <div className="bg-blue-500 text-white p-2 flex justify-center">View</div>
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;