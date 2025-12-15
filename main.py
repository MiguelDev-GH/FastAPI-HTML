from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

app = FastAPI()

clientes = [
    {"Nome": "Miguel", "Idade": 18},
    {"Nome": "Ana", "Idade": 25},
    {"Nome": "Pedro", "Idade": 30},
]

templates = Jinja2Templates(directory="templates")

app.mount("/static", StaticFiles(directory="static"), name="static")

class Cliente(BaseModel):
    Nome: str
    Idade: int

@app.get("/", response_class=HTMLResponse)
async def init(request: Request):
    
    context = {'request': request, 'clientes': clientes}
    return templates.TemplateResponse("index.html", context)

@app.post("/cadastrar")
async def adicionar_cliente(cliente: Cliente):

    novo_cliente_dict = cliente.model_dump()
    clientes.append(novo_cliente_dict)
    
    return novo_cliente_dict

@app.delete("/excluirUltimo")
async def excluirUltimo_cliente():
    if clientes:
        cliente_removido = clientes.pop()
        return {"mensagem": "Cliente removido com sucesso", "cliente": cliente_removido}