const { Given, When, Then } = require('cucumber')
const GetProductsRequest = require('support/requests/customer-api/get_products')
const { expect } = require('chai')
const R = require('ramda')

When('Customer sends request to get products', async function() {
  const request = new GetProductsRequest.Builder().build()
  await this.send(request)
})

When('Customer sends request to get products with location {string}, {string}', async function(
  latitude,
  longitude,
) {
  const request = new GetProductsRequest.Builder()
    .withCustomerLocationLatitude(latitude)
    .withCustomerLocationLongitude(longitude)
    .build()
  await this.send(request)
})

Then('all products should have an id', function() {
  const productsWithNoId = R.filter(o => !o.id, this.lastResponse.data)
  expect(productsWithNoId).to.be.empty
})

Then('all products should have a name', function() {
  const productsWithNoName = R.filter(o => !o.name, this.lastResponse.data)
  expect(productsWithNoName).to.be.empty
})

Then('all products should have a code', function() {
  const productsWithNoCode = R.filter(o => !o.code, this.lastResponse.data)
  expect(productsWithNoCode).to.be.empty
})

Then('Customer should see {int} offer\\(s) for product {string}', function (offers, productCode) {
  const product = this.currentProducts.find(p => p.code === productCode)
  expect(product).not.to.be.undefined
  expect(product.offers).not.to.be.undefined
  expect(product.offers.length).to.equal(offers)
})
