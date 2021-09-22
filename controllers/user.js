const { request, response } = require('express');


const userGet= (req =request, res = response) => {

    const { id, page='1', limit='10', size='1'}  = req.query;

    res.json({
        msg:'listar registro -- controlador',
        id,
        page,
        limit,
        size
    })
}

const userPost= (req, res = response) => {
    
    const {nombre,edad} = req.body;
    res.json({
        msg:'inserta registro -- controlador',
        nombre,
        edad
    })
}

const userPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msg:'Actualiza registro -- controlador',
        id
    })
}

const userDelete = (req, res=response) => {
    res.json({
        msg:'Elimina registro -- controlador'
    })
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}