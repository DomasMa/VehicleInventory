const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    vehicle_make: String,
    vehicle_model: String,
    vehicle_year: Number,
    plate_number: String,
    transmission: {
        type: String,
        enum: ['automatic', 'manual'],
        required: true
    }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
