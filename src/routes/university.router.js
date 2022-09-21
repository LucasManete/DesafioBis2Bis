/* eslint-disable max-len */
const { Router } = require('express');
const universityController = require('../controllers/universityController');

const universityBDRouter = Router();

/**
 * @swagger
 * tags:
 *     name: DesafioBis2Bis
 *     description: Endpoints do desafio
 */

/**
 * @swagger
 * /universities/populate:
 *    get:
 *        tags: [DesafioBis2Bis]
 *        description: Popula o banco de dados
 *        responses:
 *           200:
 *             description: 'Retorna uma mensagem'
 *             content:
 *              application/json:
 *               schema:
 *                 type: object
 *               example: { "message":"Banco populado com 1020 registros", "error": false, "statusCode": 200}
 *           409:
 *             description: 'Banco já populado'
 *             content:
 *              application/json:
 *               schema:
 *                 type: object
 *               example:
 *                  { "message":"Banco já populado", "error": true, "statusCode": 409}
 */
universityBDRouter.get('/populate', universityController.populate);
/**
 * @swagger
 * /universities:
 *    get:
 *        tags: [DesafioBis2Bis]
 *        description: Busca com paginação os 20 primeiros paises podendo colocar um filtro de pais na busca
 *        parameters:
 *          - in: query
 *            name: country
 *            required: true
 *            content:
 *             application/json:
 *               schema:
 *                 type: string
 *                 example: Brazil
 *        responses:
 *           200:
 *             description: 'Retorna um objeto com 20 universidades do pais filtrado'
 *           404:
 *             description: 'Passando um pais que não foi varrido pela API'
 *             content:
 *              application/json:
 *               schema:
 *                 type: object
 *               example:
 *                  { "message": "País não encontrado", "error": true, "statusCode": 404}
 */
universityBDRouter.get('/', universityController.getAll);
/**
 * @swagger
 * /universities/{id}:
 *    get:
 *        tags: [DesafioBis2Bis]
 *        description: Busca uma universidade por ID
 *        parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            content:
 *             application/json:
 *               schema:
 *                 type: string
 *                 example: 632a26221ec706b6f695f495
 *        responses:
 *           200:
 *             description: 'Retorna um pais com o ID Informado '
 *             content:
 *              application/json:
 *               schema:
 *                 type: object
 *               example: {"statusCode": 200, "message":{
 * "_id": "632a26221ec706b6f695f495","domains": ["baraodemaua.br"], "alpha_two_code": "BR", "country": "Brazil", "web_pages": ["http://www.baraodemaua.br/"],"name": "Centro Universitário Barao de Maua", "state_province": null, "__v": 0}, "error": false}
 *           404:
 *             description: 'Universidade não encontrada'
 *             content:
 *              application/json:
 *               schema:
 *                 type: object
 *               example:
 *                  { "message":"Universidade não encontrada", "error": true, "statusCode": 404}
 */
universityBDRouter.get('/:id', universityController.getOne);

/**
 * @swagger
 * /universities:
 *    post:
 *        tags: [DesafioBis2Bis]
 *        description: Retorna um objeto com a universidade criada
 *        requestBody:
 *            required: true
 *            content:
 *             application/json:
 *               schema:
 *                 type: object
 *               example: { "domains":[ "inun.edu.aras"], "alpha_two_code": "BR", "country": "Brazil", "web_pages": ["http://www.inun.edu.ar/"], "name": "Centro Universitário Barao de Maua", "state_province": "BR"}
 *        responses:
 *           200:
 *             description: 'Retorna a faculdade cadastrada'
 *             content:
 *              application/json:
 *               schema:
 *                 type: object
 *                 example: {"statusCode": 200, "message":{
 * "_id": "632a26221ec706b6f695f495", "domains": ["baraodemaua.br"], "alpha_two_code": "BR", "country": "Brazil", "web_pages": ["http://www.baraodemaua.br/"],"name": "Centro Universitário Barao de Maua", "state_province": null, "__v": 0}, "error": false}
 *           409:
 *             description: 'Universidade já cadastrada'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    { "message":"Universidade já cadastrada", "error": true, "statusCode": 409}
 */
universityBDRouter.post('/', universityController.create);

/**
 * @swagger
 * /universities/{id}:
 *      put:
 *        tags: [DesafioBis2Bis]
 *        description: Atualizando uma universidade
 *        parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            content:
 *             application/json:
 *               schema:
 *                 type: string
 *                 example: 632a26221ec706b6f695f495
 *        requestBody:
 *            required: true
 *            content:
 *             application/json:
 *               schema:
 *                 type: object
 *               example: { "domains":[ "inun.edu.aras"], "web_pages": ["http://www.inun.edu.ar/"], "name": "Centro Universitário Barao de Maua"}
 *        responses:
 *           200:
 *             description: 'Retorna uma mensagem de sucesso'
 *             content:
 *              application/json:
 *               schema:
 *                 type: object
 *                 example:
 *                  { "message":"Dados atualizados com sucesso", "error": false, "statusCode": 200}
 *           404:
 *             description: 'Universidade não encontrada'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    { "message":"Universidade não econtrada", "error": true, "statusCode": 404}
 */
universityBDRouter.put('/:id', universityController.update);

/**
 * @swagger
 * /universities/{id}:
 *      delete:
 *        tags: [DesafioBis2Bis]
 *        description: Deletando uma universidade
 *        parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            content:
 *             application/json:
 *               schema:
 *                 type: string
 *                 example: 632a26221ec706b6f695f495
 *        responses:
 *           200:
 *             description: 'Retorna uma mensagem de sucesso'
 *             content:
 *              application/json:
 *               schema:
 *                 type: object
 *                 example:
 *                  { "message":"Universidade Deletada com sucesso", "error": false, "statusCode": 200}
 *           404:
 *             description: 'Universidade não encontrada'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    { "message":"Universidade não econtrada", "error": true, "statusCode": 404}
 */
universityBDRouter.delete('/:id', universityController.destroy);

module.exports = { universityBDRouter };
