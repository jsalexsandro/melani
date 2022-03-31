const path = require("path")
const sqlite = require("sqlite3").verbose()

const URI_DATABASE = path.resolve("src","database",process.env.DB)

console.log(URI_DATABASE)

const SQL_QUERY_CREATE_TABLE = `
CREATE TABLE PEOPLE (
  user text NOT NULL,
  password text NOT NULL,
  id text NOT NULL,
  PRIMARY KEY (user)
);
`

const db = new sqlite.Database(URI_DATABASE) // CONNECTION DATABASE

db.run(SQL_QUERY_CREATE_TABLE,function (erro) {
  if (!erro) console.log("Table created")
})

module.exports = () => db