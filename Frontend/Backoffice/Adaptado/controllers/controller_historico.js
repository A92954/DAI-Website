window.onload = function () {
  listarHistorico();
};

// data (id: data)
// nome atividade (id: nome-atividade)
// descricao (id: descricao)
// local (id: local)
// avaliacao (id: )

// Fonte:
// https://stackoverflow.com/questions/25852361/how-to-build-big-div-structures-in-javascript-jquery
// http://jsfiddle.net/0089yghq/

function listarHistorico() {
  var nomedAtividade;
  var localdAtividade;
  var descricaodAtividade;
  var dataFimdAtividade;
  var avaliacaodAtividade;

  fetch("http://localhost:8080/DAI_backend/read_activity", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, valor) {
        nomedAtividade = valor.name;
        localdAtividade = valor.city;
        descricaodAtividade = valor.description;
        dataFimdAtividade = valor.schedule_end;
        // avaliacaodAtividade = valor.;

        var postElement = $(
          '<div id="teste" class="col-12 col-sm-6 col-md-4"> \
            <div class="card bg-light"> \
              <div id="dataFimAtividade" class="card-header text-muted border-bottom-0"> \
                *Data de fim? (JAVASCRIPT FETCH)* \
              </div> \
            <div class="card-body pt-0">\
              <div class="row">\
              <div class="col-7">\
                <h2 id="nomeAtividade" class="lead"><b>*Nome da atividade?*</b></h2>\
                <ul class="ml-4 mb-0 fa-ul text-muted">\
                  <li class="small">\
                    <span class="fa-li"\
                      ><i class="fas fa-book"></i\
                    ></span>\
                    <p id="descricaoAtividade" class="text-muted text-sm">\
                  <b>Descrição: </b> \
                </p>\
                  </li>\
                </ul>\
                <ul class="ml-4 mb-0 fa-ul text-muted">\
                  <li class="small">\
                    <span class="fa-li"\
                      ><i class="fas fa-map-marker-alt"></i\
                    ></span>\
                    <h6 id="localAtividade"> teste</h2>\
                  </li>\
                  <br />\
                  <li class="small">\
                    <span class="fa-li"\
                      ><i class="fas fa-star"></i\
                    ></span>\
                    *Avaliação?*\
                  </li>\
                </ul>\
              </div>\
              <div class="col-5 text-center">\
                <img\
                  src="../../dist/img/user1-128x128.jpg"\
                  alt="user-avatar"\
                  class="img-circle img-fluid"\
                />\
              </div>\
            </div>\
          </div>\
          <section id="botaoVerMais">\
          <div class="card-footer">\
            <div class="text-right">\
              <a\
                href="#"\
                class="btn btn-sm btn-primary"\
                data-toggle="modal"\
                data-target="#b-verMais"\
              >\
                <i class="fas fa-info-circle"></i> Ver mais\
              </a>\
            </div>\
          </div>\
          </section>\
        </div>\
        </div>'
        );
        $("#PostWrapper").append(postElement);
        document.getElementById("nomeAtividade").innerHTML = nomedAtividade;
        document.getElementById("localAtividade").innerHTML = localdAtividade;
        document.getElementById("descricaoAtividade").innerHTML =
          descricaodAtividade;
        document.getElementById("dataFimAtividade").innerHTML =
          dataFimdAtividade;
        document.getElementById("nomeAtividade").id = "nomeAtividade2";
        document.getElementById("localAtividade").id = "localAtividade2";
        document.getElementById("descricaoAtividade").id =
          "descricaoAtividade2";
        document.getElementById("dataFimAtividade").id = "dataFimAtividade2";
      });
    })
    .catch((err) => console.error(err));
}
