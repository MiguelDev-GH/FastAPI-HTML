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
    } catch(error) {
        console.error("Erro ao adicionar o cliente, (" + error + ")")
    }

})

// Arrumar isso daqui

async function RemoverUltimo(e) {
    try {
        let response = await fetch("/excluirUltimo",{
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
        })
    } catch (error) {
        console.error("Erro ao remover o cliente, (" + error + ")")
    }
}