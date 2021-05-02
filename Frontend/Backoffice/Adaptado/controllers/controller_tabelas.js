window.onload = function () {
  tabelaAtividades();
  modalAtividades();
  tabelaMateriais();
  tabelaParceiros();
  tabelaSugestoes();
};

//preenchimento da tabela das Atividades
function tabelaAtividades() {
  let table = $("example1").DataTable();
  fetch("http://localhost:8080/DAI_backend/read_activity", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $("#example1 tbody").empty();
      $.each(out, function (index, valor) {
        // var botaoAcoes = $(
        //   '<button\
        //     type="button"\
        //     class="btn btn-primary ver_Mais"\
        //    >\
        //     <i class="far fa-eye"></i>\
        //    </button>\
        //    <button\
        //     type="button"\
        //     class="btn btn-success toastsDefaultSuccess remove"\
        //    >\
        //     <i class="fas fa-check"></i>\
        //    </button>\
        //    <button type="button" class="btn btn-danger remove">\
        //     <i class="fas fa-times"></i>\
        //    </button>'
        // );

        $("#example1 tbody").append(
          "<tr>" +
            "<td>" +
            valor.name +
            "</td>" +
            "<td>" +
            valor.schedule +
            "</td>" +
            "<td>" +
            valor.description +
            "</td>" +
            "<td>" +
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
            </button>' +
            "</td>" +
            "</tr>"
        );
      });
    })
    .catch((err) => console.error(err));
}

//preenchimento do modal da tabela das Atividades (ainda n está em funcionamento)
function modalAtividades() {
  fetch("http://localhost:8080/DAI_backend/read_activity", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, valor) {
        var nomeAtividade = valor.name;
        var localAtividade = valor.activity_local;
        var dataInicioAtividade = valor.start_date;
        var dataFimAtividade = valor.end_date;
        var descricaoAtividade = valor.description;
        var parceirosAtividade = valor.id_partners;
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
  let table = $("tabela-parceiros").DataTable();
  fetch("http://localhost:8080/DAI_backend/read_partner", {
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
            "<td>" +
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
                            </button>' +
            "</td" +
            "</tr>"
        );
      });
    })
    .catch((err) => console.error(err));
}

//preenchimento da tabela das sugestões
function tabelaSugestoes() {
  let table = $("tabela-sugestoes").DataTable();
  fetch("http://localhost:8080/DAI_backend/read_suggestion", {
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
            "<td>" +
            '<button type="button" class="btn btn-success">\
                              <i class="fas fa-check"></i>\
                            </button>\
                            <button type="button" class="btn btn-danger">\
                              <i class="fas fa-times"></i>\
                            </button>' +
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
