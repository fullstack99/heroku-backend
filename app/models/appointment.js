const mongoose = require('mongoose');
const { Schema } = mongoose;

const appointmentSchema = mongoose.Schema({
    status: {
		type: String,
        enum: ['confirmed', 'pending', 'cancel'],
        default: 'confirmed',
		required: true,
        index: true,
    },
    appointment: String,
    type: String,
    location: String,
    startTime: { type: Date, default: new Date() },
    endTime:  { type: Date, default: new Date() }
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
