'use strict';

exports.index = (req, res) => {
    res.sendfile('public/index.html');
};

exports.edit = (req, res) => {
    res.sendfile('public/edit.html');
};

exports.update = (req, res) => {
    console.log('ludvig')
};