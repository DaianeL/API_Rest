let campoInput = document.getElementById("valorInput");
let enviar = document.getElementById("btnEnviar");
let exibir = document.getElementById("exibirObjeto");
let imagem = document.getElementById("exibirImagem");

let fetchApi = (value) => {
  let result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => res.json())
    .then((dados) => {
      console.log(dados);
      return dados;
    });
  return result;
};

enviar.addEventListener("click", async (event) => {
  event.preventDefault();
  let result = await fetchApi(campoInput.value);
  exibir.textContent = JSON.stringify(result, undefined, 2);
  imagem.src = result.image;
});
