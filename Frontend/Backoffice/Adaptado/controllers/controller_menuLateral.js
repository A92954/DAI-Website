window.onload = function () {
  opcoesMenuL();
};

function opcoesMenuL() {
  fetch("http://localhost:8080/DAI_backend/read_user", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, valor) {
        if (valor.id_type == 2 && valor.state == 1) {
          document.getElementById("opcao1Camaras").style.display = "none";
          document.getElementById("opcao2Camaras").style.display = "none";
          document.getElementById("opcao3Camaras").style.display = "none";
          return false;
        } else if (valor.id_type == 3 && valor.state == 1) {
          document.getElementById("opcao1Instituicoes").style.display = "none";
          document.getElementById("opcao2Instituicoes").style.display = "none";
          document.getElementById("opcao3Instituicoes").style.display = "none";
          document.getElementById("linkCamaras").href =
            "/Frontend/Backoffice/Adaptado/pages/calendar_camaras.html";
          document.getElementById("link2Camaras").href =
            "/Frontend/Backoffice/Adaptado/pages/calendar_camaras.html";
          return false;
        }
      });
    })
    .catch((err) => console.error(err));
}
