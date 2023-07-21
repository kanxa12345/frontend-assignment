import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Product() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const url = 'https://fakestoreapi.com/products';
            const response = await fetch(url);
            const parsedData = await response.json();
            setData(parsedData);
            setLoading(false);
        }
        fetchData();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-lg-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-lg-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-lg-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-lg-3">
                    <Skeleton height={350} />
                </div>
            </>
        )
    }
    const updateFilterValue = (e) => {
        setText(e.target.value);
    }
    return (
        <section className='my-4'>
            <div className="container">
                <div className='d-flex justify-content-between my-4'>
                    <div>
                        <form onSubmit={(e) => e.preventDefault()}></form>
                        <input className='form-control' placeholder='search' type="text" name='search' value={text} onChange={updateFilterValue} />
                    </div>
                    <h2>All Products</h2>
                </div>
                <div className="row">
                    {loading ? <Loading /> : data.map((product) => {
                        if (text.trim() === '' || product.title.toLowerCase().includes(text.toLocaleLowerCase())) {
                            return <ProductItem key={product.id} imageUrl={product.image} title={product.title} price={product.price} id={product.id} />
                        }
                        return null
                    })}
                </div>
            </div>

        </section>
    )
}

export default Product;
