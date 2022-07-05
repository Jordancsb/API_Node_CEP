const api = require("./api.js")
const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.listen(8001);

app.get("/", (req, res) => {
  return res.send({ message:" Rodando na Porta 8001" });
});

app.get('/ws/:cep/json/', async (req, res) => {
  const { cep } = req.params;
  try {
    const { data } = await api.get(`/ws/${cep}/json/`);

    return res.send(
                    {
                      rua: data.logradouro,
                      bairro: data.bairro, 
                      localidade: data.localidade,
                      uf: data.uf,
                      ibge: data.ibge,
                      ddd: data.ddd,
                    }
                    )
  } catch (error) {
    res.send({ error: error.message })
  }
})

