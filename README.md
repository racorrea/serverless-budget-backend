Documentación del proyecto

- Comandos utilizados:
1. Crear el proyecto serverless-framework : serverless create --template aws-nodejs
2. Deployar el proyecto : sls deploy
3. Eliminar los recursos: sls remove
4. probar lambda localmente: serverless invoke local --function functionName
5. probar lambda localmente enviando datos: serverless invoke local --function createIncome --data {"hello":"123"}



'{"incomeType":"INCOME_TYPE","amount":123.45,"detail":"lorem ipsum dolor"}'


