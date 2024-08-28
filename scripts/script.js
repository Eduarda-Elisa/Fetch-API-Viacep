const btnPesquisarCep = document.querySelector(".container__search__button");
const inputDoCep = document.querySelector(".container__search__cep")


btnPesquisarCep.addEventListener("click", event => {
    const valorDoCep = inputDoCep.value;
    const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;
    fetch(url).then(response => {
        return response.json();
    })
     .then(data => {
        if(data.erro){
            alert("O CEP DIGITADO ESTÁ INVÁLIDO");
            return ;
        }
        else{
            console.log(data)
            atribuirCampos(data)
        }
    })

    event.preventDefault();
})

function atribuirCampos(data) {
    const estado = document.querySelector(".container__Address__state")
    const cidade = document.querySelector(".container__Address__city")
    const bairro = document.querySelector(".container__Address__neighborhood")
    const rua = document.querySelector(".container__Address__road")

    estado.innerHTML =  data.uf;
    cidade.innerHTML =  data.localidade;
    bairro.innerHTML =  data.bairro;
    rua.innerHTML = data.logradouro; 
}
   