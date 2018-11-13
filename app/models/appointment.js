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

appointmentSchema.pre('save', function(next) {
    const today = new Date();
    this.endTime = new Date(today.setTime(today.getTime() + (1 * 60 * 60 * 1000)));
    next();
})

module.exports = mongoose.model('Appointment', appointmentSchema);
