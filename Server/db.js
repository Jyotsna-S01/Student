import mongoose from "mongoose";
import colors from "colors";

const db = async() =>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected to database ${con.connection.host}`.bgWhite.green);
    } catch (error) {
        console.log(error.message.bgRed.white);
    }
}

export default db;