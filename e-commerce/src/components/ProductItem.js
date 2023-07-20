import React from 'react';

function ProductItem(props) {
    const {imageUrl, title, description} = props;
    return (
        <div className='col-lg-4 p-2'>
            <div className="card p-1" style={{ width: "18rem" }}>
                <img src={imageUrl} className="card-img-top img-fluid img-custom" alt="product-image"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text card-text-custom">{description}</p>
                    <a href="#" className="btn btn-primary">View Details</a>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;
