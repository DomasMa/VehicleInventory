const Vehicle = require('../models/Vehicle');

const resolvers = {
    Query: {
        vehicles: async () => await Vehicle.find({})
    },
    Mutation: {
        addVehicle: async (_, { vehicle_make, vehicle_model, vehicle_year, plate_number, transmission }) => {
            try {
                const vehicle = new Vehicle({ vehicle_make, vehicle_model, vehicle_year, plate_number, transmission });
                await vehicle.save();
                return { success: true, message: 'Vehicle added successfully!', vehicle };
            } catch (error) {
                return { success: false, message: error.message, vehicle: null };
            }
        }
    }
};

module.exports = resolvers;
