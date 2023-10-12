import { Router } from 'express';
import { usuariosDelete, usuariosGet, usuariosPatch, usuariosPost, usuariosPut } from '../controllers/usuarios.js';

const router = Router();


router.get('/', usuariosGet);
router.post('/', usuariosPost);
router.put('/:id', usuariosPut);
router.delete('/', usuariosDelete);
router.patch('/', usuariosPatch);


export { router };