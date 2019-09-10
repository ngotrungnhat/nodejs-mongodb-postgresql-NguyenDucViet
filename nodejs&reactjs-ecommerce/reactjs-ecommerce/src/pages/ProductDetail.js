import React, { Component } from 'react'
import LayoutMain from '../layout/LayoutMain'
import returnCallApiProductDetail from '../service/productDetail.service'
import CardProduct from '../components/cores/CardProduct'

class ProductDetail extends Component {
    state = {
        dataQuestionDetail: [],
    }

    getProductDetail = idn => {
        returnCallApiProductDetail
            .getProductDetail(idn)
            .then((respone, error) => {
                this.setState({ dataQuestionDetail: respone.data })
            })
    }

    componentDidMount() {
        this.getProductDetail(this.props.match.params.id)
    }

    render() {
        return (
            <LayoutMain>
                {this.state.dataQuestionDetail.map((value, key) => {
                    return (
                        <CardProduct
                            key={key}
                            id={value._id}
                            image={value.image}
                            title={value.title}
                            price={value.price}
                        />
                    )
                })}
            </LayoutMain>
        )
    }
}

export default ProductDetail
