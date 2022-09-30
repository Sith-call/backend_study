const models = require('../models');

const boardCreate = async (req, res) => {
    try{
        let newPost = {
            title : req.body.title,
            content : req.body.content,
            writer : req.body.writer
        }
    
        const post = await models.Boards.create(newPost);
    
        res.status(200).send(post);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
    
}

const boardGetAll = async (req, res) => {
    try {
        let posts = await models.Boards.findAll({});
        res.status(200).send(posts);
    } catch (err) {
        res.status(500).send(err.message);
    }
    
}

const boardGetById = async (req, res) => {
    let id = req.params.id;
    let post = await models.Boards.findOne({
        where : {id:id}
    })
    .catch((err)=>{
        res.status(500).send(err.message);
    });
    res.status(200).send(post);
}

const boardUpdate = async (req, res) => {
    let id = req.params.id;
    const user = await models.Boards.update(req.body, 
        {where:{id:id}}
    )
    .catch((err)=>{
        res.status(500).send(err.message);
    });
    res.status(200).send(user);
}

const boardDelete = async (req, res) => {
    let id = req.params.id;
    await models.Boards.destroy({where:{id:id}})
                .catch((err)=>{
                    res.status(500).send(err.message);
                });
    res.status(200).send({
        "msg":"Post is deleted."
    });
}

module.exports = {
    boardCreate,
    boardGetAll,
    boardGetById,
    boardUpdate,
    boardDelete
};