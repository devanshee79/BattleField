const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require('fs');
const soldierModel = require('./model/soldierModel.js');
const path = require("path");
const app = express();
const PORT = 5000;
const cors = require('cors');
dotenv.config({path: './config.env'});

app.use(cors())

app.use(express.json());

app.get('/:id', async (req, res) => {
    try {
      const result = await soldierModel.findById(req.params.id);
      console.log(result);
      if (result) {
        res.send(result);
      } else {
        res.status(400).json("Something went wrong");
      }
    } catch (error) {
      res.status(400).json(error);
    }
  });
  

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);


const connectDB = async()=>{
    try{
        await mongoose.connect(DB);
        app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
    }catch(err){
        console.log(err.message);
    }
}

connectDB();



// const imagePaths = ['F:\\webdevelopment projects\\FOG\\client\\assessts\\soldierImages\\vehicle_white.jpeg',
// 'F:\\webdevelopment projects\\FOG\\client\\assessts\\soldierImages\\vehicle_black.jpeg',
// 'F:\\webdevelopment projects\\FOG\\client\\assessts\\soldierImages\\sidearm_white.jpeg',
// 'F:\\webdevelopment projects\\FOG\\client\\assessts\\soldierImages\\sidearm_black.jpeg',
// 'F:\\webdevelopment projects\\FOG\\client\\assessts\\soldierImages\\class_white.jpeg',
// 'F:\\webdevelopment projects\\FOG\\client\\assessts\\soldierImages\\class_black.jpeg',
// 'F:\\webdevelopment projects\\FOG\\client\\assessts\\soldierImages\\primary_white.jpeg',
// 'F:\\webdevelopment projects\\FOG\\client\\assessts\\soldierImages\\primary_white.jpeg'];

// // Add more paths as needed

// const images = imagePaths.map((imagePath) => {
//   const imageData = fs.readFileSync(imagePath);
//   return {
//     data: imageData,
//     contentType: 'image/jpeg'
//   };
// });

// const soldier = new soldierModel({
    
//     username: 'Cookie',
//     totaluser: '110,000',
//     rank: '69,840',
//     killsPerMin: 0.60,
//     winPercent: 44,
//     scorePerMin: 592,

//     weaponCount: 134,
//     weaponTotal: 185,
//     kitsCount: 46,
//     kitsTotal: 64,
//     vehicleCount: 77,
//     vehicleTotal: 182,
//     medalsCount: 11,
//     medalsTotal: 54,
//     assignmentCount: 21,
//     assignmentTotal: 110,
//     dogtagsCount: 357,
//     dogtagsTotal: 720,
    
//     vehicleKills: 33,
//     vehicleName: 'Main Battle Tank',
//     primaryKills: 495,
//     primaryName: 'ACE-R',
//     classKills: '828,514',
//     className: 'ENGINEER',
//     sidearmKills: 112,
//     sidearmName: 'Mg',

//     // Set other field values as needed
//     images: images
//   });
  
// soldier.save();

mongoose.connection.on("open", () => console.log("connection to DB is good"));
mongoose.connection.on("err", () => console.log(err.message));