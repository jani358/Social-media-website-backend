const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};

// SMPT_SERVICE="gmail"
// SMPT_HOST="smtp.gmail.com"
// SMPT_PORT=2525
// SMPT_HOST="janindugayanga10@gmail.com"
// SMPT_PASSWORD="passwordfgdjritudn"