import { response } from "express";

const usuariosGet = (req, res = response) => {

    const { q, nombre, apikey } = req.query;
    res.json({
        msg: 'Get API - controlador',
        q, nombre, apikey
    });
}
const usuariosPost = (req, res = response) => {
    const body = req.body;
    res.json({
        msg: 'Post API - controlador',
        body
    });
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'Put API - controlador',
        id
    });
}
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - controlador'
    });
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API - controlador'
    });
}
export {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
};