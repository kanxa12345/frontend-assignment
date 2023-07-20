import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

function Product() {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const url = 'https://fakestoreapi.com/products';
        const response = await fetch(url);
        const parsedData = await response.json();
        console.log(parsedData);
        setData(parsedData);
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <section className='my-4'>
            <div className="container">
                <div className="row">
                    {data.map((product) => {
                       return <ProductItem key={product.id} imageUrl={product.image} title={product.title} description={product.description} />
                    })}
                </div>
            </div>

        </section>
    )
}

export default Product;
