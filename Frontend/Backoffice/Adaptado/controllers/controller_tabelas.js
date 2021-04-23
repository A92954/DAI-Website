window.onload = function () {
  tabelaAtividades();
  tabelaMateriais();
  tabelaParceiros();
  tabelaSugestoes();
};

//preenchimento da tabela das Atividades
function tabelaAtividades() {
  let table = $("example1").DataTable();
  fetch("http://161.230.18.89:8080/DAI_backend/read_activity", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $("#example1 tbody").empty();
      $.each(out, function (index, valor) {
        $("#example1 tbody").append(
          "<tr>" +
            "<td>" +
            valor.name +
            "</td>" +
            "<td>" +
            valor.city +
            "</td>" +
            "<td>" +
            valor.name_institution +
            "</td>" +
            "</tr>"
        );
      });
    })
    .catch((err) => console.error(err));
}

//preenchimento da tabela de materiais de referencias
function tabelaMateriais() {
  let table = $("tabela-m-referencia").DataTable();
  fetch("http://161.230.18.89:8080/DAI_backend/read_material_reference", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $("#tabela-m-referencia tbody").empty();
      $.each(out, function (index, valor) {
        $("#tabela-m-referencia tbody").append(
          "<tr>" +
            "<td>" +
            valor.title +
            "</td>" +
            "<td>" +
            valor.description +
            "</td>" +
            "<td>" +
            valor.state + //true = está ativo
            "</td>" +
            "<td>" +
            valor.file + //true = está ativo
            "</td>" +
            "</tr>"
        );
      });
    })
    .catch((err) => console.error(err));
}

//preenchimento da tabela de parceiros
function tabelaParceiros() {
  let table = $("tabela-parceiros").DataTable();
  fetch("http://161.230.18.89:8080/DAI_backend/read_partner", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $("#tabela-parceiros tbody").empty();
      $.each(out, function (index, valor) {
        $("#tabela-parceiros tbody").append(
          "<tr>" +
            "<td>" +
            valor.name_partner +
            "</td>" +
            "<td>" +
            valor.email_partner +
            "</td>" +
            "<td>" +
            valor.proposal_partner +
            "</td>" +
            "</tr>"
        );
      });
    })
    .catch((err) => console.error(err));
}

//preenchimento da tabela das sugestões
function tabelaSugestoes() {
  let table = $("tabela-sugestoes").DataTable();
  fetch("http://161.230.18.89:8080/DAI_backend/read_suggestion", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $("#tabela-sugestoes tbody").empty();
      $.each(out, function (index, valor) {
        $("#tabela-sugestoes tbody").append(
          "<tr>" +
            "<td>" +
            valor.id_child +
            "</td>" +
            "<td>" +
            valor.comment +
            "</td>" +
            "</tr>"
        );
      });
    })
    .catch((err) => console.error(err));
}

/*
function verOcorrenciaAtual() {
  fetch("http://161.230.18.89:8080/DAI_backend/read_activity", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      var i = 0;
      $.each(out, function (index, valor) {
        i++;
        console.log(i);
      });
      document.getElementById("n-ati-ati").innerHTML = i;
    })
    .catch((err) => {
      //alert("Erro!" + err);
    });
}
*/
