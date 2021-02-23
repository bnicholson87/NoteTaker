const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;
//var notes = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


app.listen(PORT, () => {
  console.log(`App listening on PORT: http://localhost:${PORT}`);
});