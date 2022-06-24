import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function clientePet(nome){
    const resposta = await api.post('/pet', {
        pet: nome
    })
    return resposta.data;
}

export async function listarTodosPets(){
    const resposta = await api.get('/pet');
    return resposta.data;
}