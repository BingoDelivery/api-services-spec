const Base = require('../$base')

class Request extends Base {
  constructor(build) {
    super()
    this.product_code = build.product_code
    this.quantity = build.quantity
    this.customerLocationLatitude = build.customerLocationLatitude
    this.customerLocationLongitude = build.customerLocationLongitude
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'offers/search_for_one_product'
  }
  get payload() {
    return {
      product_code: this.product_code,
      quantity: this.quantity,
      customerLocation: {
        latitude: this.customerLocationLatitude,
        longitude: this.customerLocationLongitude,
      },
    }
  }
  static get Builder() {
    class Builder {
      constructor() {
        this.product_code = 'CORN_TORTILLA'
        this.quantity = '1'
        this.customerLocationLatitude = '28.1867048'
        this.customerLocationLongitude = '-105.4600849'
      }
      withProductCode(product_code) {
        this.product_code = product_code
        return this
      }
      withQuantity(quantity) {
        this.quantity = quantity
        return this
      }
      withCustomerLocationLatitude(customerLocationLatitude) {
        this.customerLocationLatitude = customerLocationLatitude
        return this
      }
      withCustomerLocationLongitude(customerLocationLongitude) {
        this.customerLocationLongitude = customerLocationLongitude
        return this
      }
      build() {
        return new Request(this)
      }
    }
    return Builder
  }
}

module.exports = Request