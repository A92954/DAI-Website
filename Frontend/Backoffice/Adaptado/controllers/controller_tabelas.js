window.onload = function () {
  tabelaAtividades();
  modalAtividades();
  tabelaMateriais();
  tabelaParceiros();
  tabelaSugestoes();
};

//preenchimento da tabela das Atividades
function tabelaAtividades() {
  let table = $("#example1").DataTable();
  fetch("http://localhost:8080/DAI_backend/read_activity", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, value) {
        table.row
          .add([
            value.name,
            value.schedule + " / " + value.schedule_end,
            value.description,
            '<button\
              type="button"\
              data-toggle="modal"\
              data-target="#VerMaisInfo"\
              class="btn btn-primary ver_Mais"\
              id="teste123"\
            >\
              <i class="far fa-eye"></i>\
            </button>\
            <button\
              type="button"\
              class="btn btn-success toastsDefaultSuccess remove"\
            >\
            <i class="fas fa-check"></i>\
            </button>\
            <button type="button" class="btn btn-danger remove">\
              <i class="fas fa-times"></i>\
            </button>',
          ])
          .draw();
      });
    })
    .catch((err) => console.error(err));
}

//preenchimento do modal da tabela das Atividades (ainda n está em funcionamento)
//
// $(document).ready(function () {
//   console.log("aqui tou eu!");
//   $("#example1 tbody").on("click", "#teste123", function () {
//     $("#VerMaisInfo").modal("show");

//     var id_ocorr = $("td", this).eq(0).text();
//     console.log("tem isto = " + $("td", this).eq(0).text());
//     console.log("id_ocorr = " + id_ocorr);
//     $("#nAtividade").text(id_ocorr);
//   });
// });
//
function modalAtividades() {
  fetch("http://localhost:8080/DAI_backend/read_activity", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, valor) {
        var nomeAtividade = valor.name;
        var localAtividade = valor.city;
        var dataInicioAtividade = valor.schedule;
        var dataFimAtividade = valor.schedule_end;
        var descricaoAtividade = valor.description;
        var parceirosAtividade = valor.id_partner;
        document.getElementById("nAtividade").value = nomeAtividade;
        document.getElementById("lAtividade").value = localAtividade;
        document.getElementById("diAtividade").value = dataInicioAtividade;
        document.getElementById("dfAtividade").value = dataFimAtividade;
        document.getElementById("dAtividade").value = descricaoAtividade;
        document.getElementById("pAtividade").value = parceirosAtividade;
      });
    })
    .catch((err) => console.error(err));
}

// aceitar uma atividade da tabela de atividades
function aceitarAtividade() {}

// recusar uma atividade da tabela de atividades
function recusarAtividade() {}

//preenchimento da tabela de materiais de referencia
function tabelaMateriais() {
  let table = $("tabela-m-referencia").DataTable();
  fetch("http://localhost:8080/DAI_backend/read_material_reference", {
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
  let table = $("#tabela-parceiros").DataTable();
  fetch("http://localhost:8080/DAI_backend/read_partner", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, valor) {
        table.row
          .add([
            valor.name_partner,
            valor.email_partner,
            valor.proposal_partner,
            '<button\
          type="button"\
          class="btn btn-primary"\
          data-toggle="modal"\
          data-target="#VerMaisInfo"\
        >\
          <i class="far fa-eye"></i>\
        </button>\
        <button\
          type="button"\
          class="btn btn-success toastsDefaultSuccess remove"\
        >\
          <i class="fas fa-user-check"></i>\
        </button>\
        <button type="button" class="btn btn-danger remove">\
          <i class="fas fa-user-times"></i>\
        </button>',
          ])
          .draw();
      });
    })
    .catch((err) => console.error(err));
}

//preenchimento da tabela das sugestões
function tabelaSugestoes() {
  let table = $("#tabela-sugestoes").DataTable();
  fetch("http://localhost:8080/DAI_backend/read_suggestion", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, valor) {
        table.row
          .add([
            valor.id_child,
            valor.comment,
            '<button type="button" class="btn btn-success toastsDefaultSuccess remove">\
        <i class="fas fa-check"></i>\
      </button>\
      <button type="button" class="btn btn-danger remove">\
        <i class="fas fa-times"></i>\
      </button>',
          ])
          .draw();
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
