//tenativa de fazer o historico de atividades

window.onload = function () {
  listarHistorico();
};

// data (id: data)
// nome atividade (id: nome-atividade)
// descricao (id: descricao)
// local (id: local)
// avaliacao (id: )

function listarHistorico() {
  var data;
  var nomeAtividade;
  var descricao;
  var local;

  fetch("http://161.230.18.89:8080/DAI_backend/read_activity", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, valor) {
        valor.schedule = data;
        valor.name = nomeAtividade;
        valor.description = descricao;
        valor.activity_local = local;

        let newActivity = document.createElement("div", {
          className: "col-12 col-sm-6 col-md-4 d-flex align-items-stretch",
        });
        console.log(newActivity);
      });
    })
    .catch((err) => console.error(err));
}
