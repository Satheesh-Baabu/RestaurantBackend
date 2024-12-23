const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.DB_URI)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.error("DB not connected: ", err));
};

module.exports = connectDB;
