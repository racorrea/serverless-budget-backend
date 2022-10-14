'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports.saveIncome = income => {

    console.log("guardar ingreso fue llamado");

    const params = {
        TableName: process.env.INCOME_TABLE,
        Item: income
    }

    return dynamo.put(params).promise();
};

/*
const months = [
    "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
]

function getNameMonth(month){
    return months[month];
}*/