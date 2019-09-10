import React, { Component } from 'react'
import CardProduct from '../components/cores/CardProduct'
import LayoutMain from '../layout/LayoutMain'
import returnCallApiListProducts from './../service/productsList.service'

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProductsList: [],
        }
    }
    

    getProductsList = () => {
        returnCallApiListProducts.getProductsList().then(respone => {
            this.setState({ dataProductsList: respone.data })
        })
    }

    componentDidMount() {
        this.getProductsList()
    }

    mappingData = () => {
        return this.state.dataProductsList.map((value, key) => (
            <CardProduct
                key={key}
                id={value._id}
                image={value.image}
                title={value.title}
                price={value.price}
            />
        ))
    }

    render() {
        return (
            <LayoutMain>
                <div className="container">
                    <div className="row">{this.mappingData()}</div>
                </div>
            </LayoutMain>
        )
    }
}

export default ProductsList
