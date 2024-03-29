const express = require("express");
const PORT = process.env.PORT || 3001;
const { getTop } = require("./database");
const app = express();

setInterval(() => getTop(), 60000);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
