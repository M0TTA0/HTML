function exibirNome(){
    let nome = document.getElementById("campo-nome").value
    alert(nome)
    document.getElementById("cabeçalio").innerHTML = "ola, " + nome + "!!"
}
function parOuImpar(){
    let numero = document.getElementById("numerix").value
    if(numero % 2 == 0){
    alert( " Este numero é par")
    } else{
    alert( " Este numero é impar")
    } 
  //  document.getElementById("cabeçalio").innerHTML = "ola, " + nome + "!!"
}
