Vehicle Inventory System Backend
This project is a backend service for managing a vehicle inventory. It uses GraphQL to handle queries and mutations related to vehicle data. This README provides all the necessary instructions to set up and run this backend system.

Technology Stack
Node.js: The runtime environment for running the JavaScript code server-side.
Apollo Server: A community-driven, open-source GraphQL server.
MongoDB: The database used for storing vehicle data.
Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
GraphQL: A query language for your API.
Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
What things you need to install the software:

Node.js (https://nodejs.org/)
MongoDB (https://www.mongodb.com/try/download/community) or Docker (for running MongoDB in a container)
Installing
A step-by-step series of examples that tell you how to get a development environment running:

Clone the repository:

bash
Copy code
git clone https://yourrepository.com/vehicle-inventory-backend.git
cd vehicle-inventory-backend
Install dependencies:

bash
Copy code
npm install
Ensure MongoDB is running:

If using a local MongoDB installation, ensure mongod is running.
If using Docker, you can start MongoDB with:
bash
Copy code
docker run --name mongodb -d -p 27017:27017 mongo
Start the server:

bash
Copy code
node server.js
Usage
Once the server is running, you can interact with the GraphQL API. Here are the primary operations you can perform:

Queries
Fetch All Vehicles:

graphql
Copy code
query {
vehicles {
vehicle_make
vehicle_model
vehicle_year
plate_number
transmission
}
}
Mutations
Add a New Vehicle:

graphql
Copy code
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
Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.
