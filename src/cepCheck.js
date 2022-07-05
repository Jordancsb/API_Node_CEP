const cep = document.querySelector("#cep")
const insertInfo = document.querySelector(".insertInfo");

document.getElementById("button").addEventListener("click", (e)=>{
    let search = cep.value.replace("-","")
    const options = {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    }

    fetch(`http://localhost:8001/ws/${search}/json/`, options)
      .then(response => {response.json()
        .then (data => { 
          try {
            insertInfo.innerHTML = "";
            createText('Rua: ' + data.rua);
            createText('Bairro: ' + data.bairro);
            createText('Cidade/Estado: ' + data.localidade + ' - ' + data.uf);
            createText('IBGE: ' + data.ibge);
            createText('DDD: ' + data.ddd);
          } catch (error) {
            createText('Insira um CEP Válido!')
          }
        })
    })
    .catch(e => createText('Erro no Servidor!'));
})