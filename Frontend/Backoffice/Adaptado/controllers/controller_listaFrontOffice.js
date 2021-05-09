//em atualização

window.onload = function () {
  listarAtividadesPlaneadas();
  logout();
};

function listarAtividadesPlaneadas() {
  var i = 0;

  fetch("http://localhost:8080/DAI_backend/read_activity", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, valor) {
        while (i < 6) {
          var novaLista = $(
            '<div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">\
              <div class="portfolio-wrap">\
                <figure>\
                  <img src="/Frontend/FrontOffice/bizpage-master/bizpage-master/img/Grafitti.jpg" class="img-fluid" alt="">\
                  <a href="/Frontend/FrontOffice/bizpage-master/bizpage-master/img/Grafitti.jpg" data-lightbox="portfolio" data-title="App 1" class="link-preview" title="Preview"><i class="ion ion-eye"></i></a>\
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>\
                </figure>\
              <div class="portfolio-info">\
                <h4 name="name" id="nomeDaAtividade" value="teste"><a href="#"></a></h4>\
                <div class="row">\
                  <div class="col">\
                    <p name="activity_local" id="localDaAtividade"></p>\
                  </div>\
                  <div class="col">\
                    <p name="schedule" id="dataDaAtividade"></p>\
                  </div>\
                </div>\
              </div>\
             </div>\
            </div>'
          );
          $("#Lista").append(novaLista);
          document.getElementById("nomeDaAtividade").innerHTML = valor.name;
          document.getElementById("localDaAtividade").innerHTML = valor.city;
          document.getElementById("dataDaAtividade").innerHTML = valor.schedule;
          i++;
        }
      });
    })
    .catch((err) => console.error(err));
}

// em construção ...
function logout() {
  fetch("http://localhost:8080/DAI_backend/logout1", {
    headers: { "Content-Type": "application/json" },
    method: "PUT",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, valor) {
        if (valor.state == 1) {
          console.log("igual a 1");
        } else if (valor.state == 0) {
          console.log("igual a 0");
        }
        valor.state = 0;
        console.log(valor.state);
      });
    })
    .catch((err) => console.error(err));
}
