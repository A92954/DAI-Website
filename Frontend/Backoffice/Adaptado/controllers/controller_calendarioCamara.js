window.onload = function () {
  listarAtividades();
};

function listarAtividades() {
  var nomeAtividade;

  fetch("http://localhost:8080/DAI_backend/read_activity1", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, valor) {
        nomeAtividade = valor.name;

        var postElement = $(
          '<div\
            class="external-event bg-info"\
            data-toggle="modal"\
            data-target="#MaisInfo"\
            id="titulo"\
            onclick="infoModal()"\
          >\
            Go home\
          </div>'
        );
        $("#PostWrapper").append(postElement);
        document.getElementById("titulo").innerHTML = nomeAtividade;
        document.getElementById("titulo").id = "titulo2"; //aqui muda o id q faz com que consiga criar novo elemento
      });
    })
    .catch((err) => console.error(err));
}

//como descobrir em qual é que ele carrega ? (não dá pelo ID)
function infoModal() {
  var teste2 = document.getElementById("titulo2").innerHTML;
  console.log(teste2);
  var teste = "teste2";
  document.getElementById("nomeDaAtividade").value = teste;
  document.getElementById("cidadeDaAtividade").value = teste2;
  //document.getElementById("diDaAtividade").value = nomeAtividade;
}
