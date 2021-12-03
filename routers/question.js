const express = require('express');
const { getAllQuestions } = require('../controllers/question');

const router = express.Router();

router.get("/",(req,res)=>{
    res
    .status(200)
    .json({
        success : true
    });
});

router.get("/delete",(req,res)=>{
    res.send("Questions Delete Page")
});

module.exports = router;