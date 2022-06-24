import { pet,consultarPet } from '../repository/petRepository.js';

import { Router } from 'express'

const server = Router();

server.post('/pet', async (req,resp)=> {
    try {
        const adicionarPet = req.body;

        const petAdicionado = await pet(adicionarPet)

        resp.send( adicionarPet)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/pet' , async (req,resp)=>{
    try{
        const x = await consultarPet()
        resp.send(x);
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})



export default server;