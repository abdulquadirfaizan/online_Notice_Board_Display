const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const doenv = require('dotenv')
const path = require('path')
const cookieParser = require("cookie-parser");

const app = express()
app.use(cors())

doenv.config({
    path: './.env'
})

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"db3"
})

// const db = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASS,
//     database: process.env.DATABASE,
//     // port: process.env.DATABASE_PORT
// })

const port = process.env.PORT || 5000



/*Creating Tables for Data*/

db.connect((err) => {
    if (err) throw err
    else {
        console.log("MySQL Connection successful..")
        var sqllogin = "CREATE TABLE project_final(id INT(5),Name VARCHAR(255),Phone_Number INT(12),Email VARCHAR(100),Password VARCHAR(100))"
        db.query(sqllogin, function (err, result) {
            if (err) {
                console.log("Table Login Table Already Exists...");
            }
            else {
                console.log("Table project_final Created :)");
                //var againsql = "INSERT INTO project_final(id,Name,Phone_Number,Email,Password) VALUES ('1','Anirudh Kala','123456789','anirudhkala@gmail.com','Akala@12345')"
                //db.query(againsql, function (err, result) {
                //    if (err)
                //        throw err
                //    else
                //        console.log("Data inserted : ", result);
                //})
            }
        })
        var sqldepartmentnotices = "CREATE TABLE department_notice(id INT(5),topic VARCHAR(255),detail LONGTEXT,image BLOB,event_date DATE)"
        db.query(sqldepartmentnotices, function (err, result) {
            if (err) {
            }
            else {
                console.log("Table department_notice Created:)");
            }
        })
        var sqlplacementnotices = "CREATE TABLE placement_notice(id INT(5),topic VARCHAR(255),detail LONGTEXT,image BLOB,event_date DATE)"
        db.query(sqlplacementnotices, function (err, result) {
            if (err) {
                console.log("Table placement_notice Already Exists...");
            }
            else {
                console.log("Table placement_notice Created:)");
            }
        })
        var sqlplacementresultnotice = "CREATE TABLE placement_result_notice(id INT(5),topic VARCHAR(255),detail LONGTEXT,image BLOB,event_date DATE)"
        db.query(sqlplacementresultnotice, function (err, result) {
            if (err) {
                console.log("Table placement_result_notice Already Exists...");
            }
            else {
                console.log("Table placement_result_notice Created:)");
            }
        })
        var sqlplacementresultnotice = "CREATE TABLE internal_circulars(id INT(5),topic VARCHAR(255),detail LONGTEXT,image BLOB,event_date DATE)"
        db.query(sqlplacementresultnotice, function (err, result) {
            if (err) {
                console.log("Table internal_circulars Already Exists...");
            }
            else {
                console.log("Table internal_circulars Created:)");
            }
        })
        var sqlplacementresultnotice = "CREATE TABLE external_circulars(id INT(5),topic VARCHAR(255),detail LONGTEXT,image BLOB,event_date DATE)"
        db.query(sqlplacementresultnotice, function (err, result) {
            if (err) {
                console.log("Table external_circulars Already Exists...");
            }
            else {
                console.log("Table external_circulars Created:)");
            }
        })
    }
})

/*Creating Tables for Data*/

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

/* Creating API's and Accessing the Data from the DataBase*/

app.get('/', (req, res) => {
    return res.json("From Backend side")
})

app.get('/project_final', (req, res) => {
    const sql = "SELECT * FROM project_final";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})
app.get('/internal_circulars', (req, res) => {
    const sql = "SELECT * FROM internal_circulars";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})
app.get('/external_circulars', (req, res) => {
    const sql = "SELECT * FROM external_circulars";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})
app.get('/placement_result_notice', (req, res) => {
    const sql = "SELECT * FROM placement_result_notice";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})
app.get('/placement_notice', (req, res) => {
    const sql = "SELECT * FROM placement_notice";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})
app.get('/department_notice', (req, res) => {
    const sql = "SELECT * FROM department_notice";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

/*All API's are Connected to DataBase Now*/

app.listen(port, () => {
    console.log(`Server Started at ${port} `)
});