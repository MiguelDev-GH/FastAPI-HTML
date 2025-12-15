document.getElementById("form_clientes").addEventListener("submit",async (e)=>{

    const nome = document.getElementById("input-nome").value
    const idade = parseInt(document.getElementById("input-idade").value)

    if(!nome || !idade){
        alert("Campos não preenchidos corretamente")
        return
    }

    try{
        let response = await fetch("/cadastrar", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({Nome: nome, Idade: idade})
        })

        if(response){
            const resultado = await response.json()
            console.log("Adicionado: ", resultado.cliente);
        }

    } catch(error) {
        console.error("Erro ao adicionar o cliente, (" + error + ")")
    }

})

// Arrumar isso daqui

document.getElementById("btn_Excluir").addEventListener("click",async (e)=>{
    try {
        let response = await fetch("/excluirUltimo",{
            method: "DELETE"
        })

        if (response.ok) {
            const resultado = await response.json();
            console.log("Removido: ", resultado.cliente);
        }

        location.reload()

    } catch (error) {
        console.error("Erro ao remover o cliente, (" + error + ")")
    }
})