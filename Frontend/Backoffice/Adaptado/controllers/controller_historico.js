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
  var data;
  var nomeAtividade;
  var descricao;
  var local;

  fetch("http://localhost:8080/DAI_backend/read_activity", {
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

        var postElement = $(
          '<div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch"> \
            <div class="card bg-light"> \
              <div class="card-header text-muted border-bottom-0"> \
            *Data de fim? (JAVASCRIPT FETCH)* \
          </div> \
          <div class="card-body pt-0">\
            <div class="row">\
              <div class="col-7">\
                <h2 class="lead"><b>*Nome da atividade?*</b></h2>\
                <p class="text-muted text-sm">\
                  <b>Descrição: </b> Atividade de balões ao ar livre,\
                  free covid, e com palhaços.\
                </p>\
                <ul class="ml-4 mb-0 fa-ul text-muted">\
                  <li class="small">\
                    <span class="fa-li"\
                      ><i class="fas fa-lg fa-building"></i\
                    ></span>\
                    *Local:? Parque da Ponte, Braga*\
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
        </div>\
        </div>'
        );
        $("#PostWrapper").append(postElement);
      });
    })
    .catch((err) => console.error(err));
}
