const app = require("./app.js");
const dotenv = require("dotenv");

dotenv.config();

//create server
app.listen(process.env.PORT, () => {
  console.log("server listening on port " + process.env.PORT);
});
