const cep = document.querySelector("#cep")
const insertInfo = document.querySelector(".insertInfo");

document.getElementById("button").addEventListener("click", (e)=>{
    let search = cep.value.replace("-","")
    const options = {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
      .then(response => {response.json()
        .then (data => { 
          insertInfo.innerHTML = "";
          createText('Rua: ' + data.logradouro);
          createText('Bairro: ' + data.bairro);
          createText('Cidade/Estado: ' + data.localidade + ' - ' + data.uf);
          createText('IBGE: ' + data.ibge);
          createText('DDD: ' + data.ddd);
        })
    })
    .catch(e => alert('Erro ao buscar CEP!'));
})

function createText (responseCep) {
  let createEl = document.createElement('p');
  let createText = document.createTextNode(responseCep);

  createEl.appendChild(createText);
  insertInfo.appendChild(createEl);
}