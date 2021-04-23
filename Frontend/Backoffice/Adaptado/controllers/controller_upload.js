//Carregar ficheiro materiais de referencia
function uploadMaterial() {
  var titulo = document.getElementById("titulo1").value;
  var descricao = document.getElementById("descricao1").value;

  fetch("http://161.230.18.89:8080/DAI_backend/update_material_reference", {
    headers: { "Content-Type": "application/json" },
    method: "PUT",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, valor) {
        valor.title = titulo;
        valor.description = descricao;
      });
    })
    .catch((err) => console.error(err));
}
