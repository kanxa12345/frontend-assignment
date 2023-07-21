import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const url = `https://fakestoreapi.com/products/${id}`;
            const response = await fetch(url);
            const parsedData = await response.json();
            setProduct(parsedData);
            setLoading(false);
        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-lg-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-lg-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} width={150} />
                    <Skeleton height={100} />
                    <Skeleton height={50} width={100} />
                </div>
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="col-lg-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" style={{ objectFit: 'contain' }} />
                </div>
                <div className="col-lg-6">
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1>{product.title}</h1>
                    <p className='fw-bolder'>
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='my-4 fw-bolder'>${product.price}</h3>
                    <p>{product.description}</p>
                    <Link to='/' className='btn btn-primary'>Go back</Link>
                </div>
            </>
        )
    }
    return (
        <section>
            <div className="container py-4">
                <div className="row py-5">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </section>
    )
}

export default ProductDetail;
