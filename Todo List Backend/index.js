import mongoose from "mongoose";
import 'dotenv/config'
import app from "./app.js";


const dbUrl = process.env.MONGO_URL;
const PORT = process.env.PORT;

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");
        
        const response = await mongoose.connect(dbUrl);
        console.log(`MongoDB connected: ${response.connection.host}`);
    }
    catch (err) {
        console.log(err);
    }
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((err) => {
    console.log(err);
 });
