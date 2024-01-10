const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017"
const connectToMongo = ()=>{
  // mongoose.connect(mongoURI,()=>{
  //   console.log("Connected to Mongo Successfully")
  // })
  mongoose.connect(mongoURI)
  .catch(error => console.log(error));
  // console.log("connected mongo")

}
module.exports = connectToMongo;

