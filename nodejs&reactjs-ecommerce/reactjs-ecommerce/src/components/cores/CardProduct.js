import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class CardProduct extends Component {
    render() {
        const { image, title, price, id } = this.props
        return (
            <div className="col-sm-3">
                <div className="card mt-4" style={{ width: '18rem' }}>
                    <NavLink to={'/product-detail/' + id}>
                        <img
                            width="200"
                            height="200"
                            src={image}
                            className="card-img-top"
                            alt="..."
                        />
                    </NavLink>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            {price}
                            <span className="woocommerce-Price-currencySymbol">
                                ₫
                            </span>
                        </p>
                        <button
                            className="btn"
                            style={{ background: '#ff5622', color: '#fff' }}
                        >
                            Mua
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardProduct
