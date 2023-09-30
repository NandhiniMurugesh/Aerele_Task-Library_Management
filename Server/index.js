const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const mysql = require("mysql")
const connect = express()
connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static('public'))
connect.use(bodyparser.urlencoded({ extended: true }))
let databaseconnection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "N@ndhu0514",
    database: "project"

})

databaseconnection.connect(function (error) {
    if (error) {
        console.log(error)
    }
    else {
        console.log("database connected")
    }
})

// login Page
connect.post('/login', (request, response) => {
    let { username, password } = request.body
    let sql = 'select * from userdetail where username=?'
    databaseconnection.query(sql, [username], (error, result) => {
        if (error) {
            response.send({ "status": "empty_set" })
        }
        else if (result.length > 0) {
            var dbusername = result[0].username
            var dbpassword = result[0].password
            var id = result[0].id
            var usertype = result[0].usertype
            if (dbusername === username && dbpassword === password) {

                response.send({ "status": "success", "id": id, "usertype": usertype })

            }
            else {
                response.send({ "status": "invalid_password" })
                console.log(result)
            }
        }
        else {
            response.send({ "status": "both_are_invalid" })
        }
    })

})

// data fetch for Librarian Dashboard

connect.get('/libdash/:id', (request, response) => {
    let { id } = request.params
    let sql = 'select * from userdetail where id=?'
    databaseconnection.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
        }

    })
})

//add member to the userdetail table
connect.post('/userdetails', (request, response) => {
    let { id, fname, lname, email, phoneno, username, password, usertype } = request.body
    let sql = 'insert into userdetail(id,fname,lname,email,phoneno,username,password,usertype) values(?,?,?,?,?,?,?,?)'
    databaseconnection.query(sql, [id, fname, lname, email, phoneno, username, password, usertype], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
            console.log("ok")
        }
    })
})
// view member detail in table format
connect.get('/memlist', (request, response) => {
    let sql = 'select * from userdetail'
    databaseconnection.query(sql, (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)


        }

    })
})

// delete the user
connect.post('/delete', (request, response) => {
    let id = request.body.id
    let sql = 'delete from userdetail where id=?'
    databaseconnection.query(sql, [id], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
            console.log("okay")
        }
    })
})
// get single user detail
connect.get('/singleuser/:id', (request, response) => {
    let { id } = request.params
    let sql = 'select * from userdetail where id=?'
    databaseconnection.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
        }

    })
})
// update the profile
connect.put('/userupdate/:id', (request, response) => {
    let { id } = request.params
    let { fname, lname, email, phoneno, username, password, usertype } = request.body
    let sql = 'update userdetail set  fname=?,lname=?,email=?,phoneno=?,username=?,password=? where id=?'
    databaseconnection.query(sql, [fname, lname, email, phoneno,
        username, password, id], (error, result) => {
            if (error) {
                response.send({ "status": "not_updated" })
                console.log(error)
            }
            else {
                response.send({ "status": "success", "usertype": usertype })
                console.log("ok")
            }
        })
})
// insert data in bookdetail table from addbook
connect.post('/addbook', (request, response) => {
    let { bookname, author, description, category, rating, image, price } = request.body
    let sql = 'insert into bookdetail(bookname,author,description,category,rating,image,price) values(?,?,?,?,?,?,?)'
    databaseconnection.query(sql, [bookname, author, description, category, rating, image, price], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
            console.log("ok")
        }
    })
})

// Bookreview page => get all the details of the books added
connect.get('/bookdetail', (request, response) => {
    let sql = 'select * from bookdetail'
    databaseconnection.query(sql, (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)

        }

    })
})
// Single book Review 
connect.get('/singlebook/:bookid', (request, response) => {
    let { bookid } = request.params
    let sql = 'select * from bookdetail where bookid=?'
    databaseconnection.query(sql, [bookid], (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)

        }

    })
})
// update book detail
connect.put('/bookupdate/:bookid', (request, response) => {
    let { bookid } = request.params
    let { bookname, author, description, category, rating, image, price } = request.body
    let sql = 'update bookdetail set bookname=?,author=?,description=?,category=?,rating=?,image=?,price=? where bookid=?'
    databaseconnection.query(sql, [bookname, author, description, category, rating, image, price, bookid], (error, result) => {
        if (error) {
            response.send({ "status": "not_updated" })
            console.log(error)
        }
        else {
            response.send({ "status": "success", "bookid": bookid })
            console.log("ok")
        }
    })
})
// delete the book
connect.post('/delete', (request, response) => {
    let bookid = request.body.bookid
    let sql = 'delete from bookdetail where bookid=?'
    databaseconnection.query(sql, [bookid], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
            console.log("okay")
        }
    })
})

// issue book details
// issues   
connect.post('/issuebook', (request, response) => {
    let { transid, bookid, id, issuedate, returndate, duedate, fineamnt, status, outdebt, dueday } = request.body
    let bookPrice
    var outDebt
    var memid
    var totalPrice


    let priceSql = 'select price from bookdetail where bookid = ?'
    databaseconnection.query(priceSql, [bookid], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            bookPrice = result[0].price
            totalPrice = bookPrice * dueday
            console.log(bookPrice);
        }
    })

    let debtSql = 'select outdebt, id from transactiondetail where id = ?'
    databaseconnection.query(debtSql, [id], (error, result) => {


        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        } else {

            console.log(result);
            if (result.length == 0) {

                if (totalPrice > 500) {
                    response.send({ 'status': 'limit reached' });
                } else {
                    let sql = 'insert into transactiondetail(transid,id,bookid,issuedate,duedate,returndate,fineamnt,status,outdebt,dueday) values(?,?,?,?,?,?,?,?,?,?)'
                    databaseconnection.query(sql, [transid, id, bookid, issuedate, duedate, returndate, fineamnt, status, totalPrice, dueday], (error, result) => {
                        if (error) {
                            response.send({ "status": "error" })
                            console.log(error)
                        }
                        else {
                            response.send({ "status": "success" })
                        }
                    })
                }


            } else {

                console.log(result);
                outDebt = result[0].outdebt
                console.log(outDebt);
                console.log(totalPrice);


                var totalDebt = outDebt + totalPrice


                console.log(totalDebt);
                if (totalDebt > 500) {
                    response.send({ 'status': 'limit reached' });
                } else if (totalDebt > 0 && totalDebt < 500) {
                    console.log('last else if');

                    let updateSql = 'update transactiondetail set outdebt = ? where id = ?'
                    console.log(updateSql);
                    databaseconnection.query(updateSql, [totalDebt, id], (error, result) => {
                        if (error) {
                            response.send({ "status": "error" })
                            console.log(error)
                        }
                        else {

                            response.send({ "status": "success" })
                        }
                    })
                }


            }
        }
    })

    //   get data from transaction table
    connect.get('/transdet', (request, response) => {
        let sql = 'select * from project.transactiondetail'
        databaseconnection.query(sql, (error, result) => {
            if (error) {
                response.send(error)
                console.log(error)
            }
            else {
                response.send(result)

            }

        })
    })





})

// Single trans detail Review 
connect.get('/transdet/:transid', (request, response) => {
    let { transid } = request.params
    let sql = 'select * from transactiondetail where transid=?'
    databaseconnection.query(sql, [transid], (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)

        }

    })
})
// update book detail
connect.put('/transupdate/:transid', (request, response) => {
    let { transid } = request.params
    let { returndate, outdebt, fineamount } = request.body
    let sql = 'update transactiondetail set returndate=?,outdebt=?,fineamnt=? where transid=?'
    databaseconnection.query(sql, [returndate, outdebt, fineamount, transid], (error, result) => {
        if (error) {
            response.send({ "status": "not_updated" })
            console.log(error)
        }
        else {
            response.send({ "status": "success", "transid": transid })
            console.log("ok")
        }
    })
})
// delete the book
connect.post('/delete', (request, response) => {
    let transid = request.body.transid
    let sql = 'delete from transactiondetail where transid=?'
    databaseconnection.query(sql, [transid], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
            console.log("okay")
        }
    })
})


// inser data into transaction table
connect.post('/addtrans', (request, response) => {
    let { transid, id, bookid, issuedate, duedate, returndate, fineamnt, status, outdebt, dueday } = request.body
    let sql = 'insert into transactiondetail(transid,id,bookid,issuedate,duedate,returndate,fineamnt,status,outdebt,dueday) values(?,?,?,?,?,?,?,?,?,?)'
    databaseconnection.query(sql, [transid, id, bookid, issuedate, duedate, returndate, fineamnt, status, outdebt, dueday], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
            console.log("ok")
        }
    })
})



// database connection
connect.listen(5040, () => {
    console.log("your server is running in port 5040")
})