const mysql = require("mysql");
const Promise = require("bluebird");
const Connection = require("mysql/lib/Connection");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "wpt",
};

const connection = mysql.createConnection(dbinfo);

// check connection method
async function checkconnection() {
  await connection.connectAsync();
  console.log("Connected...");

  await connection.endAsync();
}

// read all msg method
async function readAllMessages() {
  await connection.connectAsync();
  console.log("Connected...");

  const sql = `SELECT * FROM MESSAGE;`;
  const list = await connection.queryAsync(sql, []);
  console.log(list);
  await connection.endAsync();
  return list;
}

// Add new msg record method
async function addNewMessageRecord(record) {
  await connection.connectAsync();
  console.log("Connected...");
  const sql = `INSERT INTO MESSAGE (user1,msg, user2) values(?,?,?);`;
  await connection.queryAsync(sql, [record.user1, record.msg, record.user2]);
  console.log(`message from ${record.user1} is Succesfully Added`);
  await connection.endAsync();
}

// checkconnection();
// readAllMessages();

// let record = { user1: "Jayant", msg: "Hellooo Tushar", user2: "Tushar" };
// addNewMessageRecord(record);

module.exports = { readAllMessages, addNewMessageRecord };
