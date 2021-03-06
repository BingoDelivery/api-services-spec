Feature: Get Products

  Background:
    Given Deliverer 'D1' registers and logs in
    And Deliverer 'D2' registers and logs in
    And Deliverer 'D1' sends request to set location to '28.1867348', '-105.4608849'

  Scenario: Get Products As Customer
    When Customer sends request to get products
    Then Customer should receive products
    And all products should have an id
    And all products should have a name
    And all products should have a code

  Scenario: Get Products As Deliverer
    When Deliverer 'D1' sends request to get products
    Then Deliverer should receive products
    And all products should have an id
    And all products should have a name
    And all products should have a code

  Scenario: Get Products Ordered By Offer Existence
    Given Deliverer 'D1' publishes a new offer for product 'RED_APPLE'
    When Customer sends request to get products
    Then Customer should receive successful response
