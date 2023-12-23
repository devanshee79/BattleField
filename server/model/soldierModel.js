const mongoose = require("mongoose");


const soldierSchema = new mongoose.Schema({
    username: String,
    totaluser: String,
    rank: String,
    killsPerMin: Number,
    winPercent: Number,
    scorePerMin: Number,

    weaponCount: Number,
    weaponTotal: Number,
    kitsCount: Number,
    kitsTotal: Number,
    vehicleCount: Number,
    vehicleTotal: Number,
    medalsCount: Number,
    medalsTotal: Number,
    assignmentCount: Number,
    assignmentTotal: Number,
    dogtagsCount: Number,
    dogtagsTotal: Number,    
    vehicleKills: Number,
    vehicleName: String,
    primaryKills: Number,
    primaryName: String,
    classKills: String,
    className: String,
    sidearmKills: Number,
    sidearmName: String,

    // Add other fields as needed
    images: [
      {
        path: String,
        hoverPath: String
      }
    ]
});


const soldierModel = mongoose.model('user', soldierSchema);

module.exports = soldierModel;