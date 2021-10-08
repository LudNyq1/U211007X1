'use strict';

const { text } = require('express');

exports.index = (req, res) => {
    res.sendfile('public/index.html');
};

exports.edit = (req, res) => {
    res.sendfile('public/edit.html');
};

exports.submit = (req, res) => {
    

    console.log(req.body.tBox1);
    console.log(req.body.tBox2);
    console.log(req.body.tBox3);

    const fs = require('fs');

    const textData = {
        "headline" : req.body.tBox1, 
        "intro" : req.body.tBox2, 
        "articleImage":req.body.tBox3
    }
    
    const data = JSON.stringify(textData);

    fs.writeFile('./public/data/exercise1.json', data, (err) => {
        if(err){
            throw err;
        }
        console.log('Data has been written to file');
    });

    

    res.sendfile('public/edit.html');
};