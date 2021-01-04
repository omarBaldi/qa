const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true, 
            useFindAndModify: true,
            useUnifiedTopology: true, 
            useCreateIndex: true 
        });
        console.log("Connected to the database!")
    } catch(err) {
        console.log(`Failed at connecting to the database! - ${err.message}`)
    }
};

module.exports = { connectToDatabase }