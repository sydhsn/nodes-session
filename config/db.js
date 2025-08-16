const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongobURL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.sbxqant.mongodb.net/${process.env.MONGODB_DATABASE}`

const connectDB = async () => { 
    try {
        await mongoose.connect(mongobURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("MongoBd cnnection error", error);
        process.exit(1)
    }
}
module.exports = connectDB