const instance = axios.create({
    baseURL: 'https://prototype.up.railway.app/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

const createProject = async (projeto, resetForm) => {
    try {
        const { data, status } = await instance.post('projetos/salvar', { ...projeto })
        if (status === 200) {
            console.log(data)
            alert('Projeto Criado com sucesso!');
            resetForm.reset()
        }
    } catch (error) {
        handlerError(error)
    }
}

const handlerError = (error) => {
    if (error.response.status === 400) {
        alert('Erro ao criar o projeto, por que os dados não foram enviados corretamente!')
    } else {
        alert(msg, 'Erro ao criar o projeto!')
    }
}


