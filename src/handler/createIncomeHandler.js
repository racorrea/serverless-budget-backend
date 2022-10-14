'use strict';


const { v4: uuidv4 } = require('uuid');
const IncomeTypes = {
    PRINCIPAL_INCOME : 'Sueldo Kushki',
    SECONDARY_INCOME : 'Sueldo UTPL',
    OTHER_INCOME : 'Otro ingreso',
};
const months = [
    "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
];

const util = require('../util/util')

module.exports.createIncome = async (event, context, callback) => {

    /*
    {
        "id": uuid,
        "month": "MONTH",
        "totalAmount": "00.00",
        "updateAt": "dateTime"
        "incomes" : [
        {
            "incomeType": "INCOME_TYPE",
            "amount" : "00.00",
            "detail" : "lorem ipsum dolor"
        }
        ]
    }

    Validar si ya existe un registro creado en dynamo con el mes actual
    Si no existe crearlo, si existe crear el registro en el arreglo INCOME

    */

    var date = new Date();

    const body = JSON.parse(event.body);
    const incomeId = uuidv4();
    const updateAt = Date.now();
    const month = getNameMonth(date.getMonth());

    const income = {
        incomeId: incomeId,
        month: month,
        totalAmount: 0,
        incomes:[body],
        updateAt: updateAt,
    };

    util.saveIncome(income)
        .then(data => {
            callback();
        })
        .catch(error => {
            callback(error);
        });

    return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'createIncome function',
            incomeRegister: income,
            input: event,
          }
        ),
      };

};


function getNameMonth(month){
    return months[month];
};