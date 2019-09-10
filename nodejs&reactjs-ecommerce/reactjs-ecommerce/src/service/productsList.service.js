import BaseCallApi from './../config/base.service'

class callApiProductsList extends BaseCallApi {
    constructor() {
        super('/products')
    }
    getProductsList() {
        return this.get()
    }
}
const returnCallApiListProducts = new callApiProductsList()
export default returnCallApiListProducts
