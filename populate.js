const { Client } = require("pg");
const envVars = require('../env');

const SQL = `
CREATE TABLE IF NOT EXISTS logs (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message TEXT,
  posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO logs (username, message) 
VALUES
  ('Bryan', 'Odin rocks'),
  ('Odin', 'Rocks my socks off!'),
  ('Damon', 'a');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: envVars.conString,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
