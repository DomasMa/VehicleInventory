# Vehicle Inventory System Backend

## Overview
This project is a backend service for managing a vehicle inventory system. It leverages GraphQL to handle queries and mutations related to vehicle data.

## Table of Contents
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [API Documentation](#api-documentation)
    - [Queries](#queries)
    - [Mutations](#mutations)

## Technology Stack
- **Node.js**: The runtime environment for running JavaScript server-side.
- **Apollo Server**: A community-driven, open-source GraphQL server.
- **MongoDB**: The NoSQL database used for storing vehicle data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **GraphQL**: A query language for APIs.

## Getting Started
### Prerequisites
Before you begin, ensure you have the following installed:
- Node.js - Download & Install [Node.js](https://nodejs.org/)
- MongoDB - Download & Install [MongoDB](https://www.mongodb.com/try/download/community), or use Docker to run a MongoDB container.

### Installation
Follow these steps to get your development environment running:

1. Clone the repository:
   ```bash
   git clone github.com:DomasMa/VehicleInventory.git
   cd vehicle-inventory-backend
   
2. Install NPM packages:
   ```bash
   npm install

3. Start the MongoDB service (skip if using Docker):
   ```bash
   mongod

4. Seed the database with sample data:
   ```bash
   cd seed
   node seed.js
   
5. Run the server:
   ```bash
   node server.js

# API Documentation

Here's how to interact with the API:

## Queries

### Fetch All Vehicles

Retrieve all vehicles from the inventory:

```graphql
{
  query: {
    vehicles {
      vehicle_make
      vehicle_model
      vehicle_year
      plate_number
      transmission
    }
  }
}
```
## Mutations

### Add a New Vehicle

Add a new vehicle to the database:

```graphql
mutation AddVehicle($vehicle_make: String!, $vehicle_model: String!, $vehicle_year: Int!, $plate_number: String!, $transmission: String!) {
  addVehicle(vehicle_make: $vehicle_make, vehicle_model: $vehicle_model, vehicle_year: $vehicle_year, plate_number: $plate_number, transmission: $transmission) {
    success
    message
    vehicle {
      vehicle_make
      vehicle_model
      vehicle_year
      plate_number
      transmission
    }
  }
}
