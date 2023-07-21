import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem(props) {
    const { imageUrl, title, price, id } = props;
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 col-12 p-2'>
            <div className="card p-1">
                <img src={imageUrl} className="card-img-top img-fluid img-custom" alt="product-image" />
                <div className="card-body">
                    <h5 className="card-title fw-semibold">{title.substring(0,12)}...</h5>
                    <p className="card-text card-text-custom fw-bold fs-5">${price}</p>
                    <Link to={`/${id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;
