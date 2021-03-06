const express = require('express');
const {errors} = require('celebrate');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());


/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do backend
 * POST: criar uma informação no backend
 * PUT: alterar uma informação no backend
 * DELETE: deletar uma informação no backend
 */



module.exports = app;