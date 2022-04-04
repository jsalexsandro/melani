const path = require("path")
const sqlite = require("sqlite3").verbose()

const URI_DATABASE = path.resolve("src","database",process.env.DB)

console.log(URI_DATABASE)

const SQL_QUERY_CREATE_TABLE = `
CREATE TABLE PEOPLE (
  name text NOT NULL,
  password text NOT NULL,
  id text NOT NULL,
  coins text NOT NULL,
  victory text NOR NULL,
  PRIMARY KEY (name)
);
`

const db = new sqlite.Database(URI_DATABASE) // CONNECTION DATABASE

db.run(SQL_QUERY_CREATE_TABLE,function (erro) {
  if (!erro) console.log("Table created")
})

module.exports = () => db