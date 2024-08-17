const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET

// POST
router.get('/', (req,res) => {
    let queryText = 'Select * FROM "Shopping";';

    pool.query(queryText)
    .then((result) => {
        console.log(result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('get request went wrong,', error);
        res.sendStatus(500);
    })
    })

// POST
router.post('/',(req,res) => {
    console.log(req.body);
    const name = req.body.name
    const quanity = req.body.quanity
    const unit = req.body.unit

    let queryText = 
    `
    INSERT INTO "Shopping" ("name", "quanity", "unit")
    VALUES 
    ($1,$2,$3);
    `;
    pool.query(queryText, [name,quanity,unit]) 
    .then(result => {
        res.sendStatus(200);
    })
    .catch(error => {
        res.sendStatus(500);
})})
// PUT


router.put('/toggle/:id', (req,res) => {
    let {id} = req.params;
    const queryText = 'UPDATE "Shopping" set "purchase" = NOT "purchase" WHERE "id" = $1;';
    pool.query(queryText, [id])
    .then(result => {
        res.sendStatus(200);
    })
    .catch(error => {
        res.sendStatus(500);
})})






// DELETE
router.delete('/:id',(req,res) => {
 const deleateRow = req.params.id;
 const queryText = 'Delete From "Shopping" WHERE "id"=$1;';
 pool.query(queryText, [deleateRow]) 
     .then(response => {
         console.log('id with deletwd ', response);
         res.sendStatus(200);
         // console.log()
     })
     .catch(error => {
         console.log("error", error);
         res.sendStatus(500);

     })

 })



 router.delete('/:id',(req,res) => {
    const deleateRow = req.params;
    const queryText = ' Delete from "Shopping" WHERE id > 0;';
    pool.query(queryText, [deleateRow]) 
        .then(response => {
            console.log('id with deletwd ', response);
            res.sendStatus(200);
            // console.log()
        })
        .catch(error => {
            console.log("error", error);
            res.sendStatus(500);
   
        })
   
    })
module.exports = router;