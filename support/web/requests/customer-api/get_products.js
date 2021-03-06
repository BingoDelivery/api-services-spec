const Base = require('./$base')

class GetProductsRequest extends Base {
  constructor(build) {
    super()
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'products'
  }
  get payload() {
    return {}
  }
  static get Builder() {
    class Builder {
      constructor() {}
      build() {
        return new GetProductsRequest(this)
      }
    }
    return Builder
  }
}

module.exports = GetProductsRequest
