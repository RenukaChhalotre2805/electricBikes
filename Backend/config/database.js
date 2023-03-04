const mongoose = require("mongoose");

DB_URI =
  "mongodb+srv://Renuka:Deardevil%40280599@cluster0.bo1omkg.mongodb.net/?retryWrites=true&w=majority";
const connectDatabase = () => {
  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
  //   .catch((err) => {
  //     console.log(err, "***********************************");
  //   });
};

module.exports = connectDatabase;
