const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Vehicle {
    vehicle_make: String
    vehicle_model: String
    vehicle_year: Int
    plate_number: String
    transmission: String
  }

  type Query {
    vehicles: [Vehicle]
  }

  type Mutation {
    addVehicle(vehicle_make: String!, vehicle_model: String!, vehicle_year: Int!, plate_number: String!, transmission: String!): VehicleResponse
  }

  type VehicleResponse {
    success: Boolean
    message: String
    vehicle: Vehicle
  }
`;

module.exports = typeDefs;
