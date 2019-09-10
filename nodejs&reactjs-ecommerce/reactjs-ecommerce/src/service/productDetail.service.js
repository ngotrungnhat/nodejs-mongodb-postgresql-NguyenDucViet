import BaseCallApi from './../config/base.service'
class callApiProductDetail extends BaseCallApi {
    // constructor(props) {
    //     super(`/products/${idn}`)
    // }

    getProductDetail = idn => {
        this.path = `/products/` + idn
        return this.get(idn)
    }
}

const returnCallApiProductDetail = new callApiProductDetail()
export default returnCallApiProductDetail
