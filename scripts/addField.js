// Procurar o botao                     // Quando clicar no botao
document.querySelector("#add-time").addEventListener("click", cloneField);

// Executar uma acao (duplicar campos)
function cloneField() {
  // armazenar campos na variavel
  const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
  // pegar os campos
  const fields = newFieldContainer.querySelectorAll('input')

  //para cada campo limpar
  fields.forEach(function(field){
    // pega o field do momento e limpa ele
    field.value = ""
  })
  // colocar na pagina
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
