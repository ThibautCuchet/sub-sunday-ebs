const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

client.query("SELECT user_id, game FROM votes", (err, res) => {
  console.log(res);
});

function getTop() {
  client.query(
    "SELECT user_id, game, COUNT(*) FROM votes GROUP BY game",
    (err, res) => {
      console.log(res);
    }
  );
}

module.exports = { getTop };
