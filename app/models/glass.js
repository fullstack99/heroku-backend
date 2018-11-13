const mongoose = require('mongoose');
const { Schema } = mongoose;

const glassSchema = mongoose.Schema({
    lens: { type: String, default: "" },
    frames: { type: String, default: "" },
    warranty: { type: String, default: "" },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Glass', glassSchema);
