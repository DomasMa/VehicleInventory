const mongoose = require('mongoose');
const Vehicle = require('../models/Vehicle'); // Ensure the path is correct

mongoose.connect('mongodb://localhost:27017/vehicleInventory', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const vehicles = [
    { vehicle_make: 'Toyota', vehicle_model: 'Corolla', vehicle_year: 2020, plate_number: 'XYZ123', transmission: 'automatic' },
    { vehicle_make: 'Ford', vehicle_model: 'Mustang', vehicle_year: 2019, plate_number: 'ABC987', transmission: 'manual' },
    { vehicle_make: 'Tesla', vehicle_model: 'Model S', vehicle_year: 2021, plate_number: 'TES321', transmission: 'automatic' },
    { vehicle_make: 'Chevrolet', vehicle_model: 'Impala', vehicle_year: 2018, plate_number: 'CHE456', transmission: 'automatic' },
    { vehicle_make: 'Honda', vehicle_model: 'Civic', vehicle_year: 2022, plate_number: 'HND789', transmission: 'manual' }
];

Vehicle.insertMany(vehicles)
    .then(() => {
        console.log('Vehicles added successfully!');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Failed to add vehicles', err);
        mongoose.connection.close();
    });
