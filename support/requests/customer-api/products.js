const Base = require('./$base')

class ProductsRequest extends Base {
  constructor(build) {
    super()
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'products'
  }
  get body() {
    return {}
  }
  static get Builder() {
    class Builder {
         constructor() {

         }
         build() {
            return new ProductsRequest(this)
         }
      }
      return Builder
  }
}

module.exports = ProductsRequest