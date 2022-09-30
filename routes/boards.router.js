var express = require('express');
var router = express.Router();
var boardsRouter = require('../controllers/boards.controller.js');

router.post('/', boardsRouter.boardCreate); // CREATE
router.get('/', boardsRouter.boardGetAll); // READ ALL POST
router.get('/:id', boardsRouter.boardGetById); // READ ONE POST
router.put('/:id', boardsRouter.boardUpdate); // UPDATE
router.delete('/:id', boardsRouter.boardDelete); // DELETE

module.exports = router;